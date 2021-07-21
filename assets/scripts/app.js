var li = document.querySelectorAll("li");
var plus = document.querySelectorAll(".plus","");
var times = document.querySelector(".times");
var result = -1;

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function ()  {
    if(result == -1){
      result = i;
      tog(this);
    }else{
      if(result == i){
        tog(this);
      }else {
      tog(li[result]);
      result = i;
      tog(this)
      }   
    }
  });
  
}

function tog(kilo) {
  kilo.querySelector("p").classList.toggle("inc");
    // ×  
    if(kilo.querySelector(".plus").innerHTML == "×"){
      kilo.querySelector(".plus").innerHTML = "+";
    }else{
      kilo.querySelector(".plus").innerHTML = "×";
    }
}
