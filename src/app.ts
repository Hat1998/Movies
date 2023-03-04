import express,{Application} from "express";
const app: Application = express();
import routes from './routes/movie.route'
app.use(express.json())


app.use('/movies', routes)




 app.listen(3003, ()=>{
    console.log('server is listening')
})