const express = require('express')
const router = express.Router()

router.get('/postagens', (req, res) => {
  res.json({
    titulo: 'Meu primeiro post',
    conteudo:  'Testando o blog',
    autor: 'Matheus Borges'
  })
})
module.exports = router