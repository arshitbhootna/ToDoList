document.addEventListener("DOMContentLoaded", showtask);

const inputbox = document.getElementById("input-box");
const list = document.getElementById("list-container");

function addTask() {
    if (inputbox.value.trim() === '') {
        inputbox.value = "Add some task";
        setTimeout(() => {
            inputbox.value = "";
        }, 2000);
    } else {
        let li = document.createElement("li");
        li.textContent = inputbox.value;
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
        list.appendChild(li);
        inputbox.value = "";
        savedata();
    }
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
});

function savedata() {
    localStorage.setItem("data", list.innerHTML);
}

function showtask() {
    list.innerHTML = localStorage.getItem("data") || "";
}
