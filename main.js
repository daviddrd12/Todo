//Selectores 
const contenidoTodo = document.querySelector(".contenido-todo");
const btnTodo = document.getElementById('btn-enviar')
const listaTodo = document.querySelector(".lista-todo");


// Evento de escucha
btnTodo.addEventListener('click', añadir);
listaTodo.addEventListener('click', borrar)

// crear
function añadir(a) {
    // para el resteo del form /*preguntar a jos */
    a.preventDefault();

    if (contenidoTodo.value.trim() === "") {
        
    }else {

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    
    //Crear Li
    const linea = document.createElement('li');
    linea.innerText =contenidoTodo.value;
    linea.classList.add('linea');
    todoDiv.appendChild(linea)


    // botton de borrar final y se añade al div de arriba

    const btnBorrar = document.createElement('button');
    btnBorrar.innerHTML='<img src="trash.svg">';
    btnBorrar.classList.add('btn-borrar');
    todoDiv.appendChild(btnBorrar);
    
    // añade todo
    listaTodo.appendChild(todoDiv);


    contenidoTodo.value="";
}
}


// Funcion para el boton de borrar la lista
function borrar(e) {
    const foco = e.target;
    if(foco.classList=='btn-borrar'){
        const todo =foco.parentElement;
        todo.classList.add('efecto');
        // para que se borre despues de ejecutar la transicion y no antes
        todo.addEventListener('transitionend', function(){
            todo.remove()
        })
     }
    
}