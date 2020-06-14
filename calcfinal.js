function equation(){
  let userequation = document.getElementById("userequation").value;
  while(userequation.includes("^")==true){
    userequation = userequation.replace("^", "**");
  }
  if(userequation.includes("pi")==true){
    userequation = userequation.split("pi").join("Math.PI");
  }
  if(userequation.includes("e")==true){
    userequation = userequation.split("e").join("Math.E");
  }
  console.log(userequation);

  let upperbound = Number(document.getElementById("upperbound").value);
  let lowerbound = Number(document.getElementById("lowerbound").value);
  let numofrect = Number(document.getElementById("numofrect").value);
  let xchange = (upperbound - lowerbound) / numofrect;
  console.log(upperbound, lowerbound, numofrect, xchange);

  if(document.getElementById("leftrightcenter").value == "left"){
    var area = 0;
    let xval = lowerbound;
    let height;
    let newuserequation;

    for(i=0; i<numofrect; i++){
      newuserequation=userequation.replace(/x/g, xval);
      xval += xchange;
      height = eval(newuserequation);
      area += height * xchange;
    }
  }else if(document.getElementById("leftrightcenter").value == "right"){
    var area = 0;
    let xval = lowerbound + xchange;
    let height;
    let newuserequation;

    for(i=0; i<numofrect; i++){
      newuserequation=userequation.replace(/x/g, xval);
      xval += xchange;
      height = eval(newuserequation);
      area += height*xchange;
    }
  }else if(document.getElementById("leftrightcenter").value == "midpoint"){
    var area = 0;
    let xval = lowerbound + (xchange / 2);
    let height;
    let newuserequation;

    for(i=0; i<numofrect; i++){
      newuserequation=userequation.replace(/x/g, xval);
      xval += xchange;
      height = eval(newuserequation);
      area += height*xchange;
    }
  }
  document.getElementById("output").innerHTML = area;
}
