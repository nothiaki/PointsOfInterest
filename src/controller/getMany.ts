import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getMany(_: Request, res: Response) {
  try {
    const poiMany = await prisma.poi.findMany({
      select: { name: true, x: true, y: true }
    });

    return res.status(200).json(poiMany);
  } catch (error: unknown) {
    return res.status(520).json({ message: 'unknown error' });
  }
}
