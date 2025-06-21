import express from 'express'
import employeesRautes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'


const app = express()


app.use(express.json())
  app.use(indexRoutes)
  app.use('/api',employeesRautes)


  app.use ((req, res, next) => {
    res.status(404).json({
      message: 'endpoit not faund'
    })
  })

  export default app;