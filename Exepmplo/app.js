const express = require('express');
const app = express();
const PORT = 8081 // Porta padrão 

app.get('/hello/', (req, res) => {
   try {
      const { nome, idade } = req.query;


      if (nome == undefined || idade == undefined || isNaN(idade)) {
         return res.status(400).send(`dados obrigatorios não preenchidos`);
      }

      res.status(200).send(`Ola, ${nome} Você tem a ${idade} anos`)

   } catch (error) {

      console.error(`Erro: ${error}`)
      res.status(500).send(`erro interno do servidor!`)

   }

})

// ultima linha do codigo
app.listen(PORT, () => {
   console.log(`Servidor rodando em http://localhost:${PORT}`);
});
