function checkTri(a, b, c) {
  const points = [a, b, c];
  points.sort(function(a, b){return b-a});
  a = points[0];
  b = points[1];
  c = points[2];
    if (a > b + c) {
    return ""

  }else if (a === b && b === c) {
    return "Your language is ruby!"
  
    }else if (a === b || b === c || a === c) {
    return "Your language is C#!"
  
    }else if (a != b != c){
    return "Your language is JavaScript!" 
   };
  }
  window.addEventListener("load", function() {
    const form = document.getElementById("determine-triangle")
    document.querySelector("form").onsubmit = function(e) {
      e.preventDefault();
    let a = parseInt(document.querySelector("input#inputa").value);
    let b = parseInt(document.querySelector("input#inputb").value);
    let c = parseInt(document.querySelector("input#inputc").value);
    const result = checkTri(a, b, c);
    document.getElementById("output").innerText = result;
  
    }
  });