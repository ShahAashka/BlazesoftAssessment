import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";

const app = express()
const router = express.Router();

app.use("^/$", (req, res) => {
    fs.readFile(path.resolve('./build/index.html'), "utf-8", (err, data) => {
        if(err){
            console.log(err)
            return res.status(500).send('Some error')
        }
        const html = ReactDOMServer.renderToString(<App />)
        // console.log(html, 'aaaaa')
        return res.send(data.replace(
            '<div id="root"></div>', `<div id="root">${html}</div>`
            ))
    })
})

app.use(express.static(path.resolve(__dirname, "..", "build")))
app.use(router);
app.listen(3000, () => {
    console.log("App is launched")
})