const express = require ('express')
const app = express()
const port = 3000
app.set('view engine','ejs')
app.set('views',__dirname + '/views')



app.use(express.static(__dirname + "/public" ))
app.use(express.static(__dirname + "/"))

app.get('/',(req,res)=>{
    res.render("index",{
        
    })
})
app.get('/contactanos',(req,res)=>{
    res.render("contactanos",{
        titulo : "Contáctanos"

    })
})
app.get('/habilidades',(req,res)=>{
    res.render("habilidades",{
        titulo : "Habilidades"

    })
})
app.get('/datosp',(req,res)=>{
    res.render("datosp",{
        titulo : "Datos Personales"

    })
})

app.get('/template/header',(req,res)=>{
    res.render("header",{
        titulo: "CV Digital"
    })
})
app.get('/template/cabecera',(req,res)=>{
    res.render("cabecera",{
        tutulow: ""
    })
})
app.use((req,res,next)=>{
    res.status(404).render("404",{
        titulo : "Página no encontrada, favor de revisar tu URL"
    })
})




app.listen(port,()=>{
    console.log('Servidor OK, en el puerto',port)
})
