inputEl=document.getElementById('input')
todosUL=document.getElementById('tods')

function loadTodos(){
    todos=JSON.parse.parse(localStorage.getItem('todos'))
    if(todos !=undefined){
        todos.array.forEach(todo => addTodo(todo.txt,todo.isCompleted
            ));
    }
}
inputEl.addEventlistener("keyup",function (event){
    if(event.code == 'Enter'){
        addTodo(inputEl.value,false)
    }
})
function addTodo(todoText,isCompleted){
    todoEl=document.createElement('li')
    todoEl.innerText=todoText
    if(isCompleted){
        todoEl.classList.add('completed')
    }
    todoEl.addEventlistener('click',(e)=>{
        clickedElement = e.target;
        clickedElement.classList.toggle('completed')
        updateLocalStorage()
        // updateLocalStorage()
    })
    todoEl.addEventlistener('click',(e)=>{
        clickedElemeent = e.target;
        clickedElement.remove
        updateLocalStorage()
        // updateLocalStorage()
    })
    todosUl.appendChild(todoEl)
    inputEl.value=''
    // updateLocalStorage()

}
