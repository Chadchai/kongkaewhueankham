const express = require('express');
const app = express();

app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
  
  app.set('view engine', 'ejs');
  app.use(express.static('public/'));

  app.use(express.static(__dirname + '/js'));

   //สร้างตัวแปร PORT ขึ้นมารับค่า port ในกรณีที่เราได้กำหนดไว้ใน environment ของเครื่อง
//แต่ถ้าไม่ได้กำหนดไว้ เราจะใช้ค่า 8080 แทน
const PORT = process.env.PORT || 5000;
 

const {index} = require(".");
app.get('/',index);


app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
     });
  //ทำการ export app ที่เราสร้างขึ้น เพื่อให้สามารถนำไปใช้งานใน project อื่นๆ 
  //เปรียบเสมือนเป็น module ตัวนึง


  module.exports = app
  
  