require("dotenv").config();

var client = new require("node-rest-client").Client;
var client = new Client();

var fs = require("fs");
var https = require("https");
var path = require("path");

var express = require("express");
var app = express();

var accessToken = null;

var ssl = {
  key: fs.readFileSync("ssl/key.pem"),
  cert: fs.readFileSync("ssl/cert.pem")
};

var httpsServer = https.createServer(ssl, app);

httpsServer.listen(8888, () => {
  console.log("Server running on port 8888.");
});

app.get("/", (req, resp, next) => {
  console.log(req.url)
  resp.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/dashboard", (req, resp, next) => {
  console.log(req.url)
  resp.sendFile(path.join(__dirname + "/widgets/dashboard.html"));
});

app.get("/dashboard-hotel", (req, resp, next) => {
  console.log(req.url)
  resp.sendFile(path.join(__dirname + "/widgets/dashboard-hotel.html"));
});

app.get("/callback", (req, resp, next) => {
  console.log(req.url);
  var code = req.query.code;

  var args = {
    data: {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: "authorization_code",
      code: code,
      redirect_uri: "https://localhost:8888/callback"
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };

  client.post("https://identity.apaleo.com/connect/token", args, (data, response) => {
    accessToken = data.access_token;
    console.log(accessToken);

    var args = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + accessToken
      },
      parameters: {
        propertyId: "MUC",
        unitGroupId: "MUC-WLN"
      }
    };

    //client.get("https://api.apaleo.com/inventory/v1/properties", args, (data, response) => {
    //client.get("https://api.apaleo.com/inventory/v1/properties/MUC", args, (data, response) => {
    client.get("https://api.apaleo.com/inventory/v1/units", args, (data, response) => {
      console.log(response.statusCode);
      resp.json(data);
    });
  });
});
