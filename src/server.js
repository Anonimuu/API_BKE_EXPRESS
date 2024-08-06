import express from "express"
const app = express()


app.post('/auth/signup',(req, res ) => {
    res.json({
        message: "Rota de post Auth/Signup",
    })
})
app.post('/auth/login',(req, res ) => {
    res.json({
        message: "Rota de post Auth/Login",
    })
})
app.post('/auth/logout',(req, res ) => {
    res.json({
        message: "Rota de post Auth/Logout",
    })
})
app.post('/accout',(req, res ) => {
    res.json({
        message: "Rota de post Accout",
    })
})
app.get('/accout',(req, res ) => {
    res.json({
        message: "Rota de post Account/List",
    })
})
app.get('/accout',(req, res ) => {
    res.json({
        message: "Rota de GET Account ID",
    })
})
app.put('/accout',(req, res ) => {
    res.json({
        message: "Rota de PUT Account",
    })
})
app.delete('/accout',(req, res ) => {
    res.json({
        message: "Rota de delete Account",
    })
})

app.listen(3000,() => {
    console.log('servidor on| rodando em http://localhost:3000')
})