let submit = document.getElementById("button");
let result = document.getElementById("result");

submit.addEventListener("click", function () {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let res1 = a / b;
  let res2 = (a + b) / a;
  result.innerText = `${res1} & ${res2}`;
});
