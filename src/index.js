const form = document.querySelector('#create-task-form');
const taskUl = document.querySelector('#tasks');

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = e.target.user.value;
    const tasks = e.target['new-task-description'].value;
    const obj = { user, tasks };
    displayList(obj);
    form.reset();
  });
});

function displayList(params) {
  const span = document.createElement('span');
  const li = document.createElement('li');
  const delBtn = document.createElement('button');

  span.textContent = `${params.user} - ${params.tasks}`;
  delBtn.textContent = 'X';
  delBtn.addEventListener('click', handleDel);

  span.appendChild(delBtn);
  li.appendChild(span);
  taskUl.appendChild(li);

};

function handleDel(e) {
  e.stopPropagation();
  e.target.parentNode.parentNode.remove();
};

