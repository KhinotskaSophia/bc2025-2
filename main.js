const DATE = "202202";  
const { URL, URLSearchParams } = require("url");
const baseUrl = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/res");
baseUrl.search = new URLSearchParams({
  date: DATE,
  json: ""   
});
console.log("Сконструйований URL:", baseUrl.toString());
