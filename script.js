let outputScreen = document.getElementById("result");
function display(num){
  outputScreen.value+=num;
}
function erase(){
  outputScreen.value="";
  one.innerText ="";
  two.innerText ="";
  three.innerText="";
}
function del(){
  outputScreen.value = outputScreen.value.slice(0,-1);
}
function addition(one, two){
  return Number(one) + Number(two);
}
function subtract(one, three){
  return Number(one) - Number(three);
}
function multiplication(one, two){
  return Number(one) * Number(two);
}
function division(one, three){
  return Number(one) / Number(three);
}
function modulus(one, three){
  return Number(one) % Number(three);
}
function click(){
  one.innerText = outputScreen.value.slice(0,-1);
  two.innerText = outputScreen.value.slice(-1);
  outputScreen.value= "";
}
let button = document.querySelectorAll('.button');
var one = document.getElementById("1");
var two = document.getElementById("2");
var add = document.getElementById("add");
var three = document.getElementById("3");

Array.from(button).forEach(button => {
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML =="+"){
      click()
    }else if(e.target.innerHTML =="-"){
      click()
    }else if(e.target.innerHTML == "x"){
      click()
    }else if(e.target.innerHTML == "/"){
      click()
    }else if(e.target.innerHTML == "%"){
      click()
    }
    if(e.target.innerHTML == "="){
      try{
        three.innerText = outputScreen.value;
        if(two.innerText=="+"){
          outputScreen.value = addition(one.innerText,three.innerText)
        }else if(two.innerText=="-"){
          outputScreen.value = subtract(one.innerText,three.innerText)
        }else if(two.innerText=="*"){
          outputScreen.value = multiplication(one.innerText,three.innerText)
        }else if(two.innerText=="/"){
          outputScreen.value = division(one.innerText,three.innerText)
        }else if(two.innerText=="%"){
          outputScreen.value = modulus(one.innerText,three.innerText)
        }
      }
      catch(err){
        alert("only numbers are allowed")
      }
    }else if(e.target.innerHTML== "%"){

    }


  })
})