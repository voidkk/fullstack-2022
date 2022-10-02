const { PORT } = require('./utils/config')
const app = require('express')()
const blogsRouter = require('./controllers/blogs')
const {connectToDatabase} = require('./utils/db')

app.use('/blogs',blogsRouter)

app.get('/',(req,res)=>{
  res.send('<h1>Blog App API</h1>')
})

const start = async()=>{
  await connectToDatabase()
  app.listen(PORT, () => {
    console.log(`服务器已启动……（端口：${PORT}）`)
  })
}

start()