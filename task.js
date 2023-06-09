console.log("Hello");

const taskContainer = document.querySelector(".task__container");
const globalStore = []; //array of obj
  console.log(taskContainer);

const generateNewCard = (taskData) => `
  <div class="row">
  <div class="col-sm-12 col-md-6 col-lg-4 id=${taskData.id}">
    <div class="table-cards">
      <div class="card">
      <div class="card-header d-flex justify-content-end ga">
        <button type="button" class="btn btn-success"><i class="fa-solid fa-pencil"></i></button>
        <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
      </div>
      <div class="card-body">
        <img class="card-img-top" src=${taskData.imageUrl} class="card-img-top" alt="...">
        <h5 class="card-title mt-3 fw-bolder text-primary">${taskData.taskTitle}</h5>
        <p class="card-text">${taskData.taskDescription}</p>
        <a href="#" class="btn btn-primary">${taskData.taskType}</a>
      </div>
    </div>
    </div>
  </div>
  </div>
  `;

//EVEN AFTER REFRESH IT WILL STAY
/*const loadInitialCardData = () => {
  const getCardData = localStorage.getItem("taskproj");

  const taskData = JSON.parse(getCardData); //reverse of stringify

  const {cards} = JSON.parse(getCardData);

  cards.map(cardObject =>{
    taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));

    //update globalStore
    globalStore.push(cardObject);
  })
}*/

const saveChanges = () => {
  const taskData = {
    id: `${Date.now()}`,  //${} to change dynamically //changes every second
    imageUrl: document.getElementById("imageurl"),  //not keep key and id same //.value so we get only the value instead of the array
    taskTitle: document.getElementById("tasktitle"),
    taskType: document.getElementById("tasktype"),
    taskDescription: document.getElementById("taskDescription")
  };



taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));

globalStore.push(taskData);
localStorage.setItem("taskproj",JSON.stringify({cards:globalStore})); //obj of obj into array of obj

};
