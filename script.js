const tasks = [
  {
    titulo: "Comprar comida para o gato",
    tipo: "Urgente",
  },
  {
    titulo: "Consertar Computador",
    tipo: "Prioritário",
  },
  {
    titulo: "Beber água",
    tipo: "Normal",
  },
];

function createCard(taskInfo, index) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const p = document.createElement("p");

  p.innerText = taskInfo.titulo;

  div.appendChild(span);
  div.appendChild(p);

  const button = document.createElement("button");

  button.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

  button.addEventListener('click', () => {
    tasks.splice(index, 1);
    renderElements(tasks);
    });

  li.appendChild(div);
  li.appendChild(button);  

  if (taskInfo.tipo == "Urgente"){
    span.classList.add("span-urgent")
}else if (taskInfo.tipo == "Prioritário"){
    span.classList.add("span-priority")
  }else if (taskInfo.tipo == "Normal"){
    span.classList.add("span-normal")
  }

  return li;
}

function renderElements(taskList) {
  const htmlList = document.querySelector(".tasks");
  htmlList.innerHTML = "";

  for (var count = 0; count < tasks.length; count++) {
  let card = createCard(taskList[count], count);
  htmlList.appendChild(card);
  }
}

renderElements(tasks);

const btnSubmit = document.querySelector("#btnSubmit");

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault(); // Previne o padrão do botão

  const title = document.getElementById("input_title")
  const priority = document.getElementById("input_priority")

  const newTask = {
    titulo: title.value,
    tipo: priority.value,  
  }

  tasks.push(newTask)

  renderElements(tasks);

  inputTitle.value = "";
  inputPriority.value = "Normal";
});
