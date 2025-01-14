toggleElementVisibility(DOM.sidePanel, false);
toggleElementVisibility(DOM.addFieldButton, true);

const generator = {
  fields: generateFieldOverviewHTML,
  herds: generateHerdOverviewHTML,
  machines: generateMachineOverviewHTML,
};

export function renderOverview(obj, objType) {
  resetSidePanel();
  DOM.sidePanelHeading.innerText = "Przegląd";

  let html = generator[objType](obj);

  const todosLeft = obj.todos.filter((todo) => todo.status === "pending");

  const { income, expense } = obj.budget.reduce(
    (totals, entry) => {
      totals[entry.amount > 0 ? "income" : "expense"] += entry.amount;

      return totals;
    },
    { income: 0, expense: 0 }
  );

  html += `
    <div class="card-tile">
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
  
      <div class="card-tile">
        <div class="card-content">
  
        <div class="card-details">
          <i class="card-image fa-solid fa-list-check"></i>
          <p>Zadania do wykonania: <span>${todosLeft.length}</span></p>
        </div>
      </div>
      </div>
    `;

  DOM.overview.innerHTML = html;
}

function generateFieldOverviewHTML(field) {
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

function generateHerdOverviewHTML(herd) {
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

function generateMachineOverviewHTML(machine) {
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

function resetSidePanel() {
  const currentSection = document.querySelector(".side-panel .visible");
  currentSection.classList.remove("visible");

  const overview = document.querySelector(`.side-panel .overview`);
  overview.classList.add("visible");

  const currentMenuBtn = document.querySelector(".side-panel .active");
  currentMenuBtn.classList.remove("active");

  const overviewBtn = document.querySelectorAll(".side-panel .nav-item")[0];
  overviewBtn.classList.add("active");
}
