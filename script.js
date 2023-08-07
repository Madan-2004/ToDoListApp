var input = document.querySelector(".input input");
var button = document.querySelector(".input button");
var tasks = document.querySelector(".tasks ul");
var tasklist = document.querySelectorAll(".tasks ul li");

button.addEventListener("click", function(){
    if(input.value == ""){
        alert("Enter a Task!");
    }
    else{
        var li = document.createElement("li");
        li.innerHTML = input.value;
        tasks.appendChild(li);
        input.value="";
        var span = document.createElement("span");
        span.innerHTML = "&#10540;";
        li.appendChild(span);
        saveData();
    }
})

tasks.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data", tasks.innerHTML);
}

function showData(){
    tasks.innerHTML = localStorage.getItem("data");
}

showData();

