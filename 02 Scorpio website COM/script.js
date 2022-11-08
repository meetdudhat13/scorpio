let btn = document.getElementById("btn");

let span = document.getElementById("close");

let model = document.getElementsByClassName("image")[0];

btn.onclick = function(){
    model.style.display = "flex";
    model.style.color = "red";
    model.style.width = "1000px";
    span.style.display = "flex";
    
}

span.onclick = function(){
    model.style.display = "none";
    span.style.display = "none";
}