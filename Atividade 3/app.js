
const express = require('express');
const app = express();
const PORT = 8081

app.get('/operacao/:tipo/:num1/:num2/', (req, res) => {
    try {

        let resAdicao
        let resSubtracao

        const { tipo } = req.query.tipo;
        const { num1 } = req.query.num1;
        const { num2 } = req.query.num2;


        switch (tipo) {
            case soma:
                resAdicao = parseFloat(num1) + parseFloat(num2)
                res.status(200).send(`Ò resultado é ${resAdicao}`)
                break;

            default:
                break;
        }
    }catch (erro){

    }
    })

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});