let submit = document.getElementById("button");
let result = document.getElementById("result");

submit.addEventListener("click", function () {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let res1 = +a / +b;
  let res2 = +a + +b;
  let res3 = res2 / +a;
  result.innerText = `${res1} & ${res3}`;
});
