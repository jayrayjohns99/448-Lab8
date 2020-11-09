function validate() {
  var pass1 = document.getElementById("pass1");
  var pass2 = document.getElementById("pass2");

  if (pass1.value != pass2.value && pass1.value.length<8)
    alert("Passwords do not match. Password must be at least 8 characters long.");

  else if (pass1.value != pass2.value)
    alert("Passwords do not match.");

  else if (pass1.value.length<8)
    alert("Password needs to be at least 8 characters long.")

  else {
    alert("Passwords match!")
  }

  document.querySelector("#pass1").value = "";
  document.querySelector("#pass2").value = "";
}
