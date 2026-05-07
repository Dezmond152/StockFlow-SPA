import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { orders, products } from './data/mockData.js';

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "http://localhost:5173" }
});

app.get('/api/orders', (req, res) => {
  const result = orders.map(order => ({
    ...order,
    products: products.filter(p => p.order === order.id)
  }));
  res.json(result);
});

app.get('/api/products', (req, res) => res.json(products));


let activeSessions = 0;
io.on('connection', (socket) => {
  activeSessions++;
  io.emit('sessionCount', activeSessions);
  
  socket.on('disconnect', () => {
    activeSessions--;
    io.emit('sessionCount', activeSessions);
  });
});

server.listen(3001, () => console.log('Backend modular and running!'));