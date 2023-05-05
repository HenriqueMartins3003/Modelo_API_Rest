import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Henrique',
      sobrenome: 'Martins',
      email: 'henrique_m@mail.com',
      idade: 20,
      peso: 40,
      altura: 300,
    });
    res.json({
      novoAluno,
    });
  }
}
export default new HomeController();
