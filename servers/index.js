const express = require('express')
const app = express()
const port = 3000;
const jsonParser = require('body-parser').json;
app.get('/', (req, res) => res.send('Hello World!'))

app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','Content-Type,X-Requested-With');
  next();
})

app.post('/',jsonParser,(req,res)=>{
  res.send(req.body);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


