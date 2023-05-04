// eslint-disable-next-line no-unused-vars, import/no-extraneous-dependencies
import express from 'express';
import homeRoutes from './src/Routes/homeRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
  }
}
export default new App().app;
