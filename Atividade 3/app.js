
const express = require('express');
const app = express();
const PORT = 8081

app.get('/operacao/:tipo/', (req, res) => {
try {
    
    
    //     const { num1, num2 } = req.query;
    //     let resultado = parseFloat(num1) + parseFloat(num2) //Soma
    //     if (num1 == undefined || num2 == undefined || isNaN(num1, num2)) {
    //         return res.status(400).send(`Os numeros não estao sendo reconhecidos!`)
    //     }


    //     res.status(200).send(`A adição é ${resultado}`)


    // } catch (erro) {
    //     console.error(`O erro: ${erro}`)
    //     res.status(500).send(`Erro interno do servidor`)
    // }


})

// app.get('/operacao/:subtracao/', (req, res) => {
// try {
//         const { num1, num2 } = req.query;
//         let resultado = parseFloat(num1) - parseFloat(num2) //Subtracao
//         if (num1 == undefined || num2 == undefined || isNaN(num1, num2)) {
//             return res.status(400).send(`Os numeros não estao sendo reconhecidos!`)
//         }


//         res.status(200).send(`A subtração é ${resultado}`)


//     } catch (erro) {
//         console.error(`O erro: ${erro}`)
//         res.status(500).send(`Erro interno do servidor!`)
//     }


// })

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});