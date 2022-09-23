const tasks = [
  //   {
  //     id: 1234,
  //     taskName: "Data Structure and Algorithm",
  //     description: "I will learn about stack, queue and 5 questions",
  //     date: "09/09/2022",
  //   },
  //   {
  //     id: 1235,
  //     taskName: "Gym",
  //     description: "Chest Exercise",
  //     date: "09/09/2022",
  //   },
  //   {
  //     id: 1236,
  //     taskName: "Study",
  //     description: "History",
  //     date: "09/09/2022",
  //   },
];

const randomIdGen = function () {
  let id = "";
  for (let i = 0; i < 4; i++) {
    id += String(Math.trunc(Math.random() * 4) + 1);
  }
  return Number(id);
};
//Necessary Element selection
const taskNameInput = document.querySelector("#task");
const descriptionInput = document.querySelector("#description");
const btntask = document.querySelector(".btn-task");
const cards = document.querySelector(".cards");
const rightSectionHead = document.querySelector(".right-section-head");
const taskMenu = document.querySelector(".task-menu");
const para = document.querySelector(".hero-p");

const dateFormate = function () {
  const date = new Date();
  const day = `${date.getDate()}`.padStart(2, 0);
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = `${date.getFullYear()}`;
  return `${day}/${month}/${year}`;
};

const date = new Date();
const options = {
  day: "numeric",
  month: "long",
  year: "numeric",
};
para.textContent = Intl.DateTimeFormat("en-IN", options).format(date);

dateFormate();
const UIupdate = function (tasks) {
  if (tasks.length === 0) {
    rightSectionHead.classList.remove("hidden");
    taskMenu.classList.add("hidden");
  } else {
    taskMenu.classList.remove("hidden");
    rightSectionHead.classList.add("hidden");
    cards.innerHTML = "";
    tasks.forEach((task) => {
      const htmlcard = `
    <div
        class="card flex justify-between gap-2 px-4 py-6 text-white bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded"
              >
                <div class="innercard flex flex-1 flex-col gap-2">
                  <h1 class="text-xl sm:text-2xl font-bold">
                    ${task.taskName}
                  </h1>
                  <p class="text-sm sm:text-base">
                  ${task.description}
                  </p>
                </div>
                <div class="flex flex-col justify-between items-end gap-4">
                  <ion-icon class="w-6 h-6" name="star-outline"></ion-icon>
                  <ion-icon class="w-6 h-6 hidden" name="star"></ion-icon>
                  <div class="flex items-center gap-4">
                    <p><span>${task.date}</span></p>
                    <ion-icon
                      class="delete w-6 h-6"
                      name="trash-bin-outline"
                      onclick ="deletetask(${task.id})"
                      id='${task.id}'
                    ></ion-icon>
                  </div>
                </div>
              </div>
    `;

      cards.insertAdjacentHTML("afterbegin", htmlcard);
    });
  }
};

btntask.addEventListener("click", function (e) {
  e.preventDefault();
  const taskName = taskNameInput.value;
  const description = descriptionInput.value;

  taskNameInput.value = descriptionInput.value = "";

  if (taskName != "" && description != "") {
    console.log(taskName, description);
    const newTask = {};
    newTask.id = randomIdGen();
    newTask.taskName = taskName;
    newTask.description = description;
    newTask.date = dateFormate();
    tasks.push(newTask);
    UIupdate(tasks);
  }
});

function deletetask(id) {
  const index = tasks.findIndex((task) => task.id === id);
  console.log(index);
  tasks.splice(index, 1);
  console.log(tasks);
  UIupdate(tasks);
}

UIupdate(tasks);
