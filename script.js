const form = document.querySelector("form");
const arrayTask = [];
const list = document.querySelector("ul");

function addTask(e) {
  e.preventDefault();
  const valueInput = form[0].value;

  inject(valueInput);
}

function inject(val) {
  list.innerHTML = `
    <li>
    <p>${val}</p>
    <div>
      <button class="done">Done</button>
      <button class="delete">Delete</button>
    </div>
  </li>`;
}

form.addEventListener("submit", addTask);
