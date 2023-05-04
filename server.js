import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`Servidor escutando na porta:${port}`);
  console.log(`CRTL + clique em http://localhost:${port}`);
});
