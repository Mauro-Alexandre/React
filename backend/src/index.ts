import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';

const app: Express = express();
app.use(cors());
const port = 3000;

const contatos =
[
    { id: 1, nome: "Mauro", email: "mauro@teste.com"},
    { id: 2, nome: "Samuel", email: "samuel@teste.com"},
    { id: 3, nome: "Yan", email: "yane@teste.com"},
]

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/api/contatos', (req: Request, res: Response) => {
    res.json(contatos);
});

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});