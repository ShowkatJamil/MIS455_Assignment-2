function showPersonInfo() {
  var person = document.getElementById("nameBox").value;
  var email = document.getElementById("emailBox").value;
  var phone = document.getElementById("phoneBox").value;


  
  document.getElementById("showBox").innerHTML = `
  Mr./Mrs ${person}, <br>
  Your email is: ${email}  <br>
  Your Phone Number is: ${phone}
  `;
}
