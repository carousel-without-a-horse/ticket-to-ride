import { startServer } from './app'

const port = Number(process.env.SERVER_PORT) || 3000

startServer().then(app => {
  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  })
})
