import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { ZodError, z } from 'zod';

const prisma = new PrismaClient();

const pointValidation = z.number().nonnegative({ message: 'can\'t create poi with negative coordinate' });

const schema = z.object({
  name: z.string()
    .min(1, { message: 'name can\'t be empty' })
    .max(100, { message: 'maximum of 100 characteres' }),
  x: pointValidation,
  y: pointValidation
});

export async function create(req: Request, res: Response) {
  try {
    const data = schema.parse(req.body);

    const poi = await prisma.poi.create({ data });

    return res.status(201).json({ message: 'POI created successfully', poi });
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        message: error.issues[0].message
      });
    }

    return res.status(520).json({ message: 'unknown error' });
  }
}
