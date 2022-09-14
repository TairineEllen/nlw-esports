import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true
        }
      }
    }
  });
  
  return res.json(games);;
});

app.post('/ads', (req, res) => {
  return res.status(201).json([]);
});

app.get('/games/:id/ads', (req, res) => {
  return res.json([
    { id: 1, name: 'Anúncio 1'},
    { id: 2, name: 'Anúncio 2'},
    { id: 3, name: 'Anúncio 3'},
  ]);
});

app.get('/ads/:id/discord', (req, res) => {
  return res.json([]);
});

app.listen(3000);
