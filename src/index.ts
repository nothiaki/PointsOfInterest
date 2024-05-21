import express from 'express';
import cors from 'cors';
import router from './routes/routes';
import { PrismaClient } from '@prisma/client';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use('/', router);

const prisma = new PrismaClient();

app.listen(port, async () => {
  console.log(`> Server on: http://localhost:${port}`);

  await prisma.poi.createMany({
    data: [
      { name: 'Lanchonete', x: 27, y: 12 },
      { name: 'Posto', x: 31, y: 18 },
      { name: 'Joalheria', x: 15, y: 12 },
      { name: 'Floricultura', x: 19, y: 21 },
      { name: 'Pub', x: 12, y: 8 },
      { name: 'Supermercado', x: 23, y: 6 },
      { name: 'Churrascaria', x: 28, y: 2 },
    ]
  })
});
