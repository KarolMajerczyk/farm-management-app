export function showSidePanel() {
  document.querySelector(".side-panel").classList.add("visible");
}

export function hideSidePanel() {
  document.querySelector(".side-panel").classList.remove("visible");
}

export function togglePanelSectionVisible(page) {
  if (document.querySelector(".side-panel .visible")) {
    document.querySelector(".side-panel .visible").classList.remove("visible");
  }

  if (page) {
    document.querySelector(`.side-panel .${page}`).classList.add("visible");
  }
}

export function toggleMenuItemActive(page) {
  document.querySelector("#side-menu .active").classList.remove("active");
  document.querySelector(`[data-page="${page}"]`).classList.add("active");
}


// const generator = {
//   fields: generateFieldSummary,
//   herds: generateHerdSummary,
//   machines: generateMachineSummary,
// };

// const forms = {
//   fields: generateFieldSummaryEditForm,
// };

// export function renderObjectSummary(type, obj) {
//   document.querySelector(".side-panel").classList.add("visible");
//   document.querySelector(".overview").classList.add("visible");
//   document.querySelector(".side-panel h2").innerText = "Przegląd";

//   let html = generator[type](obj);
//   document.querySelector(".overview").innerHTML = html;
// }

// export function renderObjectSummaryEdit(type, obj) {
//   let html = forms[type](obj);
//   document.querySelector(".overview").innerHTML = html;
// }

// function generateFieldSummary(field) {
//   return `
//     <div class="card">
//       <button class="card-btn btn-edit">
//         <img class="card-icon" src="./images/edit.svg" alt="">
//       </button>
//       <div class="card-section">
//         <div class="card-header">Informacje</div>
//         <hr class="card-line" />
//         <div class="card-row">
//           <img class="card-icon" src="./images/signature.svg" alt="">
//           <p>Nazwa: <span>${field.name}</span></p>
//         </div>
//         <hr class="card-line" />
//         <div class="card-row">
//           <img class="card-icon" src="./images/plant.svg" alt="">
//           <p>Uprawa: <span>${field.plant}</span></p>
//         </div>
//         <hr class="card-line" />
//         <div class="card-row">
//           <img class="card-icon" src="./images/grain.svg" alt="">
//           <p>Gatunek: <span>${field.seed}</span></p>
//         </div>
//       </div>
//     </div>
  
//     <div class="card">
//       <div class="card-section">
//         <div class="card-header">Dane o działce</div>
//         <hr class="card-line" />
//         <div class="card-row">
//           <img class="card-icon" src="./images/info.svg" alt="">
//           <p>Numer: <span>196/1</span></p>
//         </div>
//         <hr class="card-line" />
//         <div class="card-row">
//           <img class="card-icon" src="./images/city.svg" alt="">
//           <p>Miejscowość: <span>Byszewy</span></p>
//         </div>
//         <hr class="card-line" />
//         <div class="card-row">
//           <img class="card-icon" src="./images/size.svg" alt="">
//           <p>Rozmiar: <span>0.5 ha</span></p>
//         </div>
//       </div>
//     </div>`;
// }

// function generateFieldSummaryEditForm(field) {
//   return `
//     <div class="card-tile">
//       <div class="card-content">
//         <div class="card-header">
//           <p class="card-title">Informacje</p>
//         </div>
//         <hr class="card-separator" />
//         <div class="card-details">
//           <p class="card-image"><img src="./images/field.png"></p>
//           <p class="p-form">Nazwa pola: <input type="text" value="${field.name}"></p>
//         </div>
//         <hr class="card-separator" />
//         <div class="card-details">
//           <i class="card-image fa-solid fa-circle-info"></i>
//           <p class="p-form">Rodzaj uprawy: <input type="text" value="${field.plant}"></p>
//         </div>
//         <hr class="card-separator" />
//         <div class="card-details">
//           <i class="card-image fa-solid fa-circle-info"></i>
//           <p class="p-form">Gatunek: <input type="text" value="${field.seed}"></p>
//         </div>
//          <div class="btn-container">
//           <button class="save-btn">
//               <i class="card-image fa-solid fa-check"></i>
//             </button>
//             <button class="close-btn">
//               <i class="card-image fa-solid fa-close"></i>
//             </button>
//         </div>
//       </div>
//     </div>
//   `;
// }

// export function renderBudgetSummary(income, expense) {
//   let html = "";

//   html += `<div class="card-tile">
//         <div class="card-content">
    
//         <div class="card-header">
//           <p class="card-title">Budżet</p>
//         </div>
//         <hr class="card-separator" />
//         <div class="card-details">
//           <i class="card-image fa-solid fa-plus"></i>
//           <p>Przychody: <span>${income} zł</span></p>
//         </div>
//         <hr class="card-separator" />
//         <div class="card-details">
//           <i class="card-image fa-solid fa-minus"></i>
//           <p>Wydatki: <span>${expense} zł</span></p>
//         </div>
//         <hr class="card-separator" />
//         <div class="card-details">
//           <i class="card-image fa-solid fa-plus-minus"></i>
//           <p>Saldo: <span>${income + expense} zł</span></p>
//         </div>
//       </div>
//       </div>
//     `;

//   document.querySelector(".overview").insertAdjacentHTML("beforeend", html);
// }

// export function renderTodosSummary(todosLeft) {
//   let html = "";

//   html += `<div class="card-tile">
//         <div class="card-content">
  
//         <div class="card-details">
//           <i class="card-image fa-solid fa-list-check"></i>
//           <p>Zadania do wykonania: <span>${todosLeft}</span></p>
//         </div>
//       </div>
//       </div>
//     `;

//   document.querySelector(".overview").insertAdjacentHTML("beforeend", html);
// }

// function generateHerdSummary(herd) {
//   return `
//     <div class="card-tile">
//     <button>
//           <i class="card-image fa-solid fa-pen"></i>
//         </button>
//         <div class="card-content">
  
//       <div class="card-header">
//         <p class="card-title">Informacje</p>
//       </div>
//       <hr class="card-separator" />
//       <div class="card-details">
//         <i class="card-image fa-solid fa-location-crosshairs"></i>
//         <p>Nazwa stada: <span>${herd.name}</span></p>
//       </div>
//       <hr class="card-separator" />
//       <div class="card-details">
//         <i class="card-image fa-solid fa-earth-europe"></i>
//         <p>Zwierzę: <span>${herd.animal}</span></p>
//       </div>
//       <hr class="card-separator" />
//       <div class="card-details">
//         <i class="card-image fa-solid fa-earth-europe"></i>
//         <p>Gatunek: <span>${herd.species}</span></p>
//       </div>
//     </div>
//     </div>
  
//     <div class="card-tile">
//         <div class="card-content">
  
//       <div class="card-details">
//         <img src="./images/count.png" />
//         <p>Liczba sztuk: <span>${herd.animals.length}</span></p>
//       </div>
//     </div>
//     </div>
//   `;
// }

// function generateMachineSummary(machine) {
//   return `
//     <div class="card-tile">
//     <button>
//           <i class="card-image fa-solid fa-pen"></i>
//         </button>
//         <div class="card-content">
  
//       <div class="card-header">
//         <p class="card-title">Informacje</p>
//       </div>
//       <hr class="card-separator" />
//       <div class="card-details">
//         <i class="card-image fa-solid fa-location-crosshairs"></i>
//         <p>Nazwa maszyny: <span>${machine.name}</span></p>
//       </div>
//       <hr class="card-separator" />
//       <div class="card-details">
//         <i class="card-image fa-solid fa-earth-europe"></i>
//         <p>Typ maszyny: <span>${machine.type}</span></p>
//       </div>
//       <hr class="card-separator" />
//       <div class="card-details">
//         <i class="card-image fa-solid fa-earth-europe"></i>
//         <p>Tablica rejestracyjna: <span>${machine.plate}</span></p>
//       </div>
//       <hr class="card-separator" />
//       <div class="card-details">
//         <i class="card-image fa-solid fa-expand"></i>
//         <p>Motogodziny: <span>${machine.hoursUsed} ha</span></p>
//       </div>
//     </div>
//     </div>
  
//     <div class="card-tile">
//         <div class="card-content">
  
//       <div class="card-details">
//         <img src="./images/count.png" />
//         <p>Liczba plików: <span>${machine.files.length}</span></p>
//       </div>
//     </div>
//     </div>
//   `;
// }

// export function resetSidePanel() {
//   document.querySelector(".side-panel .visible").classList.remove("visible");
//   document.querySelector(`.side-panel .overview`).classList.add("visible");
//   document.querySelector(".side-panel .active").classList.remove("active");
//   document.querySelectorAll(".side-panel .nav-item")[0].classList.add("active");
// }

// export function hideSidePanel() {
//   document.querySelector(".side-panel").classList.remove("visible");
// }

// export const renderBudgetItems = (budget) => {
//   let html = "";

//   budget.forEach((item) => {
//     html += `
//       <li class="list-item" data-id="${item.id}">
     
//       <i class="fa-solid fa-sack-dollar item-image ${
//         item.amount > 0 ? "income" : "expense"
//       }"></i>
//         <div class="item-content">
//             <p>${item.description}</p>
//             <p>Kwota: <span>${item.amount} zł</span></p>
//         </div>
//          <button class="delete">
//         <i class="card-image fa-solid fa-trash"></i>
//       </button>
//       </li>
//     `;
//   });

//   document.querySelector("#budget-list").innerHTML = html;
// };

// export const renderTodoItems = (todos) => {
//   let html = "";

//   todos.forEach((item) => {
//     html += `
//         <li class="list-item" data-id="${item.id}">
        
//             <input type="checkbox" ${item.status === "done" ? "checked" : ""} />
//             <p>${item.description}</p>
//              <button class="delete">
//         <i class="card-image fa-solid fa-trash"></i>
//       </button>
//         </li>
//       `;
//   });

//   document.querySelector("#todos-list").innerHTML = html;
// };
