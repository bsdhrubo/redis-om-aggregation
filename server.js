import 'dotenv/config'
import express from 'express' 
import { router as itemRouter } from './routers/item-router.js' 
const app = new express()
app.use(express.json())
 
app.use('/item', itemRouter)
 

/* start the server */
app.listen(8080)
