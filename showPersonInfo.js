function showPersonInfo() {
  var person = document.getElementById("nameBox").value;
  var mark = parseInt(document.getElementById("markBox").value);
  var phone = document.getElementById("phoneBox").value;

  if (mark >= 90) {
    document.getElementById("content").innerHTML = `
      
      <h4>Hello ${person}, your Grade is A`;
  } else if (mark >= 85 && mark < 90) {
    document.getElementById("content").innerHTML = `
        
        <h4>Hello ${person}, your Grade is A-`;
  } else if (mark >= 80 && mark < 85) {
    document.getElementById("content").innerHTML = `
        
        <h4>Hello ${person}, your Grade is B+`;
  } else if (mark >= 75 && mark < 80) {
    document.getElementById("content").innerHTML = `
        
        <h4>Hello ${person}, your Grade is B`;
  } else if (mark >= 70 && mark < 75) {
    document.getElementById("content").innerHTML = `
        
        <h4>Hello ${person}, your Grade is B-`;
  } else if (mark >= 65 && mark < 70) {
    document.getElementById("content").innerHTML = `
        
        <h4>Hello ${person}, your Grade is C+`;
  } else if (mark >= 60 && mark < 65) {
    document.getElementById("content").innerHTML = `
        
        <h4>Hello ${person}, your Grade is C`;
  } else if (mark >= 55 && mark < 60) {
    document.getElementById("content").innerHTML = `
        
        <h4>Hello ${person}, your Grade is C-`;
  } else if (mark >= 50 && mark < 55) {
    document.getElementById("content").innerHTML = `
        
        <h4>Hello ${person}, your Grade is D+`;
  } else if (mark >= 45 && mark < 50) {
    document.getElementById("content").innerHTML = `
        
        <h4>Hello ${person}, your Grade is D`;
  } else {
    document.getElementById("content").innerHTML = `
      <h4> Sorry ${person}, You got F </h4>`;
  }

  document.getElementById("content").innerHTML = `
  <h4> Sorry ${phone}, You got F </h4>`;

}
