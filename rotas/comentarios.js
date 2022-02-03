const express = require('express')
const router = express.Router()

router.get('/comentarios/:postid', (req, res) => {
  res.json({
    conteudo:  'Testando o blog',
    autor: 'desc'
  })
})

module.exports = router