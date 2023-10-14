const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const listContainer2 = document.getElementById("list-container2");

let arr = [];


function addTask(){
    if(inputBox.value === ''){
        alert("You must Enter something");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        saveTask();
    }
    inputBox.value="";
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        if(e.target.classList.contains("checked")){
            arr.push(e.target.innerHTML);
            console.log(arr);
            console.log(e.target.value);
            let li = document.createElement("li");
            li.innerHTML = e.target.innerHTML;
            listContainer2.appendChild(li);
            saveTask2();
        }
        
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveTask();
},false);

const saveTask = () =>{
    localStorage.setItem("data",listContainer.innerHTML);
}

const saveTask2 = () =>{
    localStorage.setItem("data2",listContainer2.innerHTML);
}

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}

const showTask2 = () => {
    listContainer2.innerHTML = localStorage.getItem("data2");
    
}

showTask();
showTask2();



























































