const axios = require("axios");
const cheerio = require("cheerio");
const { response } = require("express");
const express = require("express");

const PORT = 3000;

const app = express();

const url = "http://pikado.hr/admin/divisions/table/29";

axios(url).then((response) => {
  const html = response.data;
  //console.log(html)
  const $ = cheerio.load(html);
  const titles = [];

  $("tr", html).each(function () {
    const title = $(this)
      .find("td")
      .text(function (index, currentcontent) {
        //console.log(index)
        console.log("index :", index, "content :", currentcontent);
        
      });
  });
  //titles.push(title)
  //console.log(titles)
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
