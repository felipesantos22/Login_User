import mongoose from "mongoose";
import app from "./app";

mongoose.connect('mongodb://root:password@localhost/login?authSource=admin').then(() => {
    app.listen(3000, () => console.log("App rodando na porta 3000"))
}).catch(() => {
    console.log("Erro de conexão.")
})
    
