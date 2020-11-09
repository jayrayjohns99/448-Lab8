function change() {

  var text1 = document.getElementById("1R");
  var text2 = document.getElementById("1G");
  var text3 = document.getElementById("1B");
  var text4 = document.getElementById("1W");
  var code1="#" + text1.value.toString(2) + text2.value.toString(2) + text3.value.toString(2);

  var text12 = document.getElementById("2R");
  var text22 = document.getElementById("2G");
  var text32 = document.getElementById("2B");
  var code2="#" + text12.value.toString(2) + text22.value.toString(2) + text32.value.toString(2);

  var code3=text4.value.toString(2)

  alert("Border Color Code: " + code1 + ". Body Color Code: " + code2 + ". Border Width: " + code3 + ".");
  document.body.style.backgroundColor = code2;
  document.body.style.borderColor = code1;
  document.body.style.borderWidth = code3;

  document.querySelector("#1R").value = "";
  document.querySelector("#1G").value = "";
  document.querySelector("#1B").value = "";
  document.querySelector("#2R").value = "";
  document.querySelector("#2G").value = "";
  document.querySelector("#2B").value = "";

}
