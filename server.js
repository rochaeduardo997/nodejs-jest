const cors = require("cors"); //required for tests with jest and axios
const express = require("express");
const app = express();

const routes = require("./routes/routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", routes);

app.listen(3000, (error) => {
  if(error){
    console.trace(error);
  }else{
    console.log("Running on 3000");
  }
})