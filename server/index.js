const express = require("express");
const app = express();

// app.get("/", async (req, res) => {
//   res.send("index1111ssss");
// }); //先定义返回一个index的字样



// 允许跨域
app.use(require("cors")());
//
app.use(express.json());

// 链接数据库
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog-admin", {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
});

const Article = mongoose.model(
  "Article",
  new mongoose.Schema({
    title: {
      type: String,
    },
    body: {
      type: String,
    },
    type: {
      type: String,
    },
  })
);

app.get("/", async (req, res) => res.send("restful page"));

// 查询所有文章
app.get("/article", async (req, res) => {
  const articles = await Article.find();
  res.send(articles);
});

// 文章详情
app.get("/article/:id/", async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.send(article);
});

// 修改文章
app.put("/editArt/:id/", async (req, res) => {
  const article = await Article.findByIdAndUpdate(req.params.id, req.body);
  res.send(article);
});

// 新增文章
app.post("/article", async (req, res) => {
  console.log(req.body);
  const articles = await Article.create(req.body);
  res.send(articles);
});

// 删除文章(接受参数)
app.delete("/article/:id", async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.send({
    status: true,
  });
});

app.listen(3001, () => console.log("http://localhost:3001/"));
