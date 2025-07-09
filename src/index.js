// Importa a classe Koa do pacote koa
import Koa from 'koa';

// Cria uma nova instância da aplicação Koa
const app = new Koa();

// Define o middleware que será executado para cada requisição
app.use(async (ctx) => {
  ctx.body = 'Olá, Mundo com Yarn!';
});

// Define a porta em que o servidor irá escutar por requisições
const port = 3000;

// Inicia o servidor e exibe uma mensagem no console
app.listen(port, () => {
  console.log(`Servidor Koa (Yarn) rodando em http://localhost:${port}`);
});