const express = require('express')
const app = express()

app.use(express.static('src'))

app.get('/', (req, res) => {
  res.send('App - Intro Star Wars')
})
app.listen(3000, () => console.log('Aplicação executando na porta 3000!'))