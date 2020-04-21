const addform= document.querySelector(".add");
const list= document.querySelector('.todos');
const search= document.querySelector('.search input');

const generatetodo=(todo)=>{
   const html=`
   <li class="list-group-item d-flex justify-content-between align-items-center">
   <span>${todo}</span>
   <i class="far fa-trash-alt delete"></i>
   </li>`;

   list.innerHTML +=html;
};

addform.addEventListener('submit',e=>{
    e.preventDefault();
    const todo=addform.add.value.trim(); //to remove the spaces
    //console.log(todo);
    if(todo.length){
    generatetodo(todo);
    addform.reset();
    }
});

list.addEventListener('click', e=>{
    if(e.target.classList.contains('delete'))
    {
        e.target.parentElement.remove();
    }
});

const filtertodo= (term) => {
    Array.from(list.children)
     .filter((todo) => !todo.textContent.includes(term))
     .forEach((todo) => todo.classList.add('filtered'));

     Array.from(list.children)
     .filter((todo) => todo.textContent.includes(term))
     .forEach((todo) => todo.classList.remove('filtered'));

    };

    search.addEventListener('keyup',() =>{
    const term=search.value.trim();
    filtertodo(term);
});