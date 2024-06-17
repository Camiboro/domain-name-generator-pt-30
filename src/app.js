var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];

var domainCombinations = [];

for (var p of pronoun) {
  for (var a of adj) {
    for (var n of noun) {
      domainCombinations.push(p + a + n + ".com");
    }
  }
}

for (var domain of domainCombinations) {
  console.log(domain);
}
