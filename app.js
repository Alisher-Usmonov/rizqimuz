const fs = require('fs')
const path = require('path')
const express = require('express')
const CookieParser = require("cookie-parser");
const morgan = require("morgan");
const app = express();
const authMiddleware = require('./middlewares/auth-middleware')
const mongo = require('./modules/mongo')

mongo();
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(CookieParser());
app.use(express.static(path.join(__dirname, 'public')))
app.use(authMiddleware)
app.use(morgan("tiny"))

const routesPath =  path.join(__dirname, 'routes')
fs.readdir(routesPath, (err, files) => {
    files.forEach(file => {
        const router = require(path.join(routesPath, file))
        app.use(router.route, router.router)
    })
})

module.exports = app