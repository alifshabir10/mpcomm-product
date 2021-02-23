import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'

import models from './models/IndexModel';
import routes from './routes/IndexRoute';
import devBundle from './devBundle'

const CURRENT_WORKING_DIR = process.cwd()
const app = express()

//comment script dibawah before building for production
devBundle.compile(app)

// parse body params and attache them to req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
// secure apps by setting various HTTP headers
app.use(compress())
// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// #middleware
app.use(async (req, res, next) => {
  req.context = { models };
  next();
});

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))



// Routes 
app.use('/api/brand', routes.brand);
app.use('/api/category', routes.category);
app.use('/api/categoryImg', routes.categoryImg);
app.use('/api/condition', routes.condition);
app.use('/api/account', routes.brand);
app.use('/api/product', routes.category);
app.use('/api/productImages', routes.categoryImg);
app.use('/api/productVariant', routes.condition);
app.use('/api/status', routes.condition);

/// Catch unauthorised errors
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ "error": err.name + ": " + err.message })
  } else if (err) {
    res.status(400).json({ "error": err.name + ": " + err.message })
    console.log(err)
  }
})

export default app
