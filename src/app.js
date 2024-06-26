import express from "express";
import connectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js"

const conexao = await connectaNaDatabase()

conexao.on("error", (erro) =>{
    console.log("erro de conexão", erro)
})

conexao.once("open", ()=>{
    console.log("Conexão com o banco feita com sucesso")
})

const app = express();
routes(app);

// app.use(express.json()) //Middleware 



// app.get("/", (req, res)=>{
//     res.status(200).send("Curso de Node.js")
// })

// app.get("/livros", async (req, res)=> {
//     const listaLivros = await livro.find({})
//     res.status(200).json(listaLivros)
// })

// app.post("/livros", (req, res)=>{
//     livros.push(req.body)
//     res.status(201).send("Livro cadastrado com sucesso")
// })

// app.get("/livros/:id", (req, res)=>{
//     const index = buscaLivro(req.params.id)
//     res.status(200).json(livros[index])
// })

// app.put("/livros/:id", (req, res) => {
//     const index = buscaLivro(req.params.id);
//     livros[index].titulo = req.body.titulo
//     res.status(200).json(livros);
// })

// app.delete("/livros/:id", (req, res) => {
//     const index = buscaLivro(req.params.id);
//     livros.splice(index, 1);
//     res.status(200).send("Livro removido com sucesso");
// });

//Todas as vezes que chega um objeto via body via requisição eles chegam como string
//201 registro criado

export default app;
