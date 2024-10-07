const express =require("express");
const app= express();

require("dotenv").config();
require("./conn/conn"); 

//creating port
app.listen(process.env.PORT, () => {
  console.log(`server started at| ${process.env.PORT}`);
});

