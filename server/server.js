import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";
const app = express();

app.use("^/$", (req, res) => {
  fs.readFile(path.resolve("./build/index.html"), "utf8", (err, data) => {
    //reading file from the build folder and convert it.
    if (err) {
      console.log(err);
      return res.status(500).send("Some error occured");
    }
    const html = ReactDOMServer.renderToString(
      //we need to provide our app component to convert React component to HTML format
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    );

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${html}</div>`) //now we need to replace the build index.html with the app component which we converted from the react component.
    );
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));
app.listen(3001, () => {
  console.log("App is launched");
});
