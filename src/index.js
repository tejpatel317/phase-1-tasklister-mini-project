document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    let userInput = (e.target.querySelector("#new-task-description").value)
    buildTodos(userInput)
    form.reset()
  });
});

function buildTodos(userInput) {
  let li = document.createElement("li")
  let btn = document.createElement("button")
  btn.addEventListener('click', handleDelete)
  li.textContent = `${userInput} `
  btn.textContent = "X"
  li.appendChild(btn)
  let userPriority = document.querySelector("select").value;
  if (userPriority === "Red") {
    li.style.color = "Red"
  }
  else if (userPriority === "Orange") {
    li.style.color = "Orange"
  }
  else if (userPriority === "Green") {
    li.style.color = "Green"
  }
  document.querySelector("#tasks").appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove();
}
