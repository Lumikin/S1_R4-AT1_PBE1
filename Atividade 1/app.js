const express = require('express');
const app = express();
const PORT = 8081

app.get('/adicao/', (req, res) => { //Rota get de adicao
    try {
        const {num1, num2} = req.query;

        if (num1 == undefined || num2 == undefined || isNaN(num1, num2)){
            return res.status(400).send(`Numeros não estão definidos`)
        }
        res.status(200).send


    } catch (error) {
        
    }
 })

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});