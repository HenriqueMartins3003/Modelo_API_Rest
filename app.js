/* eslint-disable import/first */
/* eslint-disable import/no-extraneous-dependencies */
import dotEnv from 'dotenv';

dotEnv.config();
import './src/database';
import express from 'express';
import { resolve } from 'path';

import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import pictureRoutes from './src/routes/pictureRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos', alunoRoutes);
    this.app.use('/picture/', pictureRoutes);
  }
}
export default new App().app;
