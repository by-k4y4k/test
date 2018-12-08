let faker = require("faker");
faker.locale = "en_AU";

function fakeit(num) {
  console.log("=== \nOn Sale Today: \n===");
  for (var i = 0; i < num; i++) {
    // finance.amount gives random cent values, where commerce.price always
    // ended in .00
    console.log(faker.fake("{{commerce.productName}} -- ${{finance.amount}}"));
  }
}

fakeit(10);
