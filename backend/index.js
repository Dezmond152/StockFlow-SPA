import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { orders, products } from './data/mockData.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

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

app.get('/api/products', (req, res) => {
  res.json(products);
});


app.delete('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id, 10);
  
  const productIndex = products.findIndex(p => p.id === productId);
  
  if (productIndex === -1) {
    return res.status(404).json({ message: "Продукт не найден" });
  }

  products.splice(productIndex, 1);

  res.json({ id: productId, message: "Продукт успешно удален" });
});


io.on('connection', (socket) => {
  const emitCount = () => {
    io.emit('sessionCount', io.engine.clientsCount);
  };

  emitCount();

  socket.on('disconnect', () => {
    setTimeout(() => {
      emitCount();
    }, 1000);
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`=============================================`);
  console.log(`  Backend modular and running on port ${PORT} `);
  console.log(`  URL продуктов: http://localhost:${PORT}/api/products `);
  console.log(`  URL ордеров:   http://localhost:${PORT}/api/orders   `);
  console.log(`=============================================`);
});