import express from "express";

const app = express();
const PORT = 4000;


const Home = (req, res)=> {
    return res.end();
}
app.get("/", Home)
// app.get("/", ()=> console.log("SomeBody is trying to go home")); //<=이 구문에서는 무조건 함수 사용(함수.get)

const handleListening = ()=> console.log(`Server Listenting on port http://localhost:${PORT}`)

app.listen(PORT, handleListening);

