//Seletores do dom
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('teskList');

// Função que cria um <li> com texto e botão "Remover"
function createTaskItem(Text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remover';
    deleteBtn.className = 'delete-Btn';
    deleteBtn.type = 'button';
    li.appendChild(span)
    li.appendChild(deleteBtn);
    return li;
}

