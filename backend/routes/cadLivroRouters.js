const express =require('express');
const CadLivroController = require('../controller/cadLivroController.js')
const jsPDF = require('jspdf');
const router =express.Router();
const cadLivroController = new CadLivroController();

router.get('/', cadLivroController.getALL)
router.get('/:codigoLivro', cadLivroController.getById)
router.delete('/:codigoLivro', cadLivroController.delete)
router.post('/', cadLivroController.create);
router.put('/:codigoLivro', cadLivroController.update);
router.post('/gerarPDF', cadLivroController.generatePDF);

module.exports= router;