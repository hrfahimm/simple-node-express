const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

const users = [
  {
    id: 0,
    name: "hasib",
    username: "Bret",
    email: "Sdfahime@april.biz",
  },
  {
    id: 2,
    name: "khan",
    username: "Bret",
    email: "sdjks@april.biz",
  },
  {
    id: 3,
    name: "fahim",
    username: "Bret",
    email: "rti@april.biz",
  },
  {
    id: 4,
    name: "Leanne  ",
    username: "Bret",
    email: "ywow@april.biz",
  },
  {
    id: 1,
    name: " Graham",
    username: "Bret",
    email: "uws@april.biz",
  },
];

app.get("/", (req, res) => {
  res.send("Hello second node  node !");
});

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) => user.name.toLowerCase().includes(search));
    res.send(searchResult);
  } else {
    res.send(users);
  }
});
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.lenght;
  users.push(newUser);
  console.log("hitting", req.body);
  //res.send(JSON.stringify(newUser));
  res.json(newUser)
});
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get("fruits/mangoes/fazli", (req, res) => {
  res.send("eammi");
});
app.get("fruits", (req, res) => {
  res.send(["mango", "orenge"]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
