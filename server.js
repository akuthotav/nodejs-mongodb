const express = require("express");
const bp = require("body-parser");
const _ = require("underscore");
const middleware = require("./middleware.js");
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://admin:admin123@cluster0.c2r0jib.mongodb.net/CapOneDB?retryWrites=true&w=majority&appName=Cluster0";
const empCrud = require("./model/model");

var app = express();
app.use(express.static("public"));
app.use(bp.json());

uid = 1;
userdata = [];

app.use(middleware.logger);

app.get("/loadusers", middleware.requireAuth, async (req, res) => {
  const users = await empCrud.find();
  return res.send(users);
});

app.post("/adduser", (req, res) => {
  const data = req.body;
  const user = new empCrud(data);
  user.save().then(() => {
    res.send("user added successfully.");
  });
});

app.get("/loaduser/:id", async (req, res) => {
  const uid = req.params.id;
  const user = await empCrud.findById(uid);
  return res.send(user);
});

app.delete("/loaduser/:id", async (req, res) => {
  const uid = req.params.id;
  await empCrud.deleteOne({ _id: uid });
  return res.send(` ${uid} deleted successfully`);
});

const startServer = async () => {
  await mongoose.connect(uri);
  app.listen(4000, () => {
    console.log("listening on, server is listening");
  });
};

startServer();
