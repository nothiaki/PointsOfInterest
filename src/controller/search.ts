import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { ZodError, z } from 'zod';

const prisma = new PrismaClient();

type Poi = {
  name: string,
  x: number,
  y: number
}

const pointValidation = z.number().nonnegative({ message: 'can\'t create poi with negative coordinate' });

const schema = z.object({
  max: z.number(),
  x: pointValidation,
  y: pointValidation
});

export async function search(req: Request, res: Response) {
  try {
    const data = schema.parse(req.body);
    const poiRange: Poi[] = [];

    const poiMany = await prisma.poi.findMany({
      select: { name: true, x: true, y: true }
    });

    poiMany.map(poi => {
      const d: number = Math.sqrt((Math.pow((poi.x - data.x), 2) + Math.pow((poi.y - data.y), 2)));
      if (d < data.max) {
        return poiRange.push(poi);
      }
    });

    return res.status(200).json(poiRange);
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        message: error.issues[0].message
      });
    }

    return res.status(520).json({ message: 'unknown error' });
  }
}
