import express from "express"
const app = express()


app.get('/',(req, res ) => {
    res.json({
        message: "Ola Mundo Express!",
        seccess: "Tudo certo"
    
    
    })

})

app.listen(3000,() => {
    console.log('servidor on| rodando em http://localhost:3000')
})