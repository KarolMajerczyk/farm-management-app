const generator = {
  fields: generateFieldOverview,
  herds: generateHerdSummary,
  machines: generateMachineSummary,
};

export function renderObjectSummary(type, obj) {
  document.querySelector(".side-panel").classList.add("visible");
  document.querySelector(".overview").classList.add("visible");
  document.querySelector(".side-panel h2").innerText = "Przegląd";

  let html = generator[type](obj);
  document.querySelector(".overview").innerHTML = html;
}

export function renderBudgetSummary(income, expense) {
  let html = "";

  html += `<div class="card-tile">
        <div class="card-content">
    
        <div class="card-header">
          <p class="card-title">Budżet</p>
        </div>
        <hr class="card-separator" />
        <div class="card-details">
          <i class="card-image fa-solid fa-plus"></i>
          <p>Przychody: <span>${income} zł</span></p>
        </div>
        <hr class="card-separator" />
        <div class="card-details">
          <i class="card-image fa-solid fa-minus"></i>
          <p>Wydatki: <span>${expense} zł</span></p>
        </div>
        <hr class="card-separator" />
        <div class="card-details">
          <i class="card-image fa-solid fa-plus-minus"></i>
          <p>Saldo: <span>${income + expense} zł</span></p>
        </div>
      </div>
      </div>
    `;

  document.querySelector(".overview").insertAdjacentHTML("beforeend", html);
}

export function renderTodosSummary(todosLeft) {
  let html = "";

  html += `<div class="card-tile">
        <div class="card-content">
  
        <div class="card-details">
          <i class="card-image fa-solid fa-list-check"></i>
          <p>Zadania do wykonania: <span>${todosLeft}</span></p>
        </div>
      </div>
      </div>
    `;

  document.querySelector(".overview").insertAdjacentHTML("beforeend", html);
}

function generateFieldOverview(field) {
  return `
    <div class="card-tile">
    <button>
          <i class="card-image fa-solid fa-pen"></i>
        </button>
        <div class="card-content">
  
        <div class="card-header">
          <p class="card-title">Informacje</p>
        </div>
         <hr class="card-separator" />
        <div class="card-details">
          <p class="card-image"><img src="./images/field.png"></p>
          <p>Nazwa pola: <span>${field.name}</span></p>
        </div>
        <hr class="card-separator" />
        <div class="card-details">
          <p class="card-image"><img src="${field.image}"></p>
          <p>Rodzaj uprawy: <span>${field.plant}</span></p>
        </div>
        <hr class="card-separator" />
        <div class="card-details">
          <i class="card-image fa-solid fa-circle-info"></i>
          <p>Gatunek: <span>${field.seed}</span></p>
        </div>
      </div>
      </div>
  
      <div class="card-tile">
        <div class="card-content">
  
        <div class="card-header">
          <p class="card-title">Dane o działce</p>
        </div>
        <hr class="card-separator" />
        <div class="card-details">
          <i class="card-image fa-solid fa-location-crosshairs"></i>
          <p>Numer działki: <span>${field.number}</span></p>
        </div>
        <hr class="card-separator" />
        <div class="card-details">
          <i class="card-image fa-solid fa-earth-europe"></i>
          <p>Miejscowość: <span>${field.region}</span></p>
        </div>
        <hr class="card-separator" />
        <div class="card-details">
          <i class="card-image fa-solid fa-expand"></i>
          <p>Rozmiar: <span>${field.area} ha</span></p>
        </div>
      </div>
      </div>
    `;
}

function generateHerdSummary(herd) {
  return `
    <div class="card-tile">
    <button>
          <i class="card-image fa-solid fa-pen"></i>
        </button>
        <div class="card-content">
  
      <div class="card-header">
        <p class="card-title">Informacje</p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-location-crosshairs"></i>
        <p>Nazwa stada: <span>${herd.name}</span></p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-earth-europe"></i>
        <p>Zwierzę: <span>${herd.animal}</span></p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-earth-europe"></i>
        <p>Gatunek: <span>${herd.species}</span></p>
      </div>
    </div>
    </div>
  
    <div class="card-tile">
        <div class="card-content">
  
      <div class="card-details">
        <img src="./images/count.png" />
        <p>Liczba sztuk: <span>${herd.animals.length}</span></p>
      </div>
    </div>
    </div>
  `;
}

function generateMachineSummary(machine) {
  return `
    <div class="card-tile">
    <button>
          <i class="card-image fa-solid fa-pen"></i>
        </button>
        <div class="card-content">
  
      <div class="card-header">
        <p class="card-title">Informacje</p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-location-crosshairs"></i>
        <p>Nazwa maszyny: <span>${machine.name}</span></p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-earth-europe"></i>
        <p>Typ maszyny: <span>${machine.type}</span></p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-earth-europe"></i>
        <p>Tablica rejestracyjna: <span>${machine.plate}</span></p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-expand"></i>
        <p>Motogodziny: <span>${machine.hoursUsed} ha</span></p>
      </div>
    </div>
    </div>
  
    <div class="card-tile">
        <div class="card-content">
  
      <div class="card-details">
        <img src="./images/count.png" />
        <p>Liczba plików: <span>${machine.files.length}</span></p>
      </div>
    </div>
    </div>
  `;
}

export function resetSidePanel() {
  document.querySelector(".side-panel .visible").classList.remove("visible");
  document.querySelector(`.side-panel .overview`).classList.add("visible");
  document.querySelector(".side-panel .active").classList.remove("active");
  document.querySelectorAll(".side-panel .nav-item")[0].classList.add("active");
}

export function hideSidePanel() {
  document.querySelector(".side-panel").classList.remove("visible");
}
