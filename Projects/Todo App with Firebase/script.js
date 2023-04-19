import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js'
import { getDatabase, ref, push, onValue, remove } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js'

const firebaseConfig = {
    databaseURL : 'https://todo-list-66b92-default-rtdb.asia-southeast1.firebasedatabase.app/'
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
// my todo database ref
const todoDatabaseRef = ref(database, 'todoList')


// data binding
const itemInputEl = document.getElementById('itemInput')
const btnSubmitEl = document.getElementById('btnSubmit')
const listItemsEl = document.getElementById('listItems')


// add Event listener
btnSubmitEl.addEventListener('click', ()=>{
    const newTodoValue = itemInputEl.value
    // TODO validate input value
    if(!newTodoValue) return
    
    push(todoDatabaseRef, newTodoValue)
    
    clearInputFieldEl()

})

onValue(todoDatabaseRef, (snapshot)=>{
    if(snapshot.exists()){
        const arrayOftodoItems = Object.entries(snapshot.val())
        clearListItemEl()

        arrayOftodoItems.forEach(todoItem=>{
            pushItemsToTodoList(todoItem)
        })
    }else{
        listItemsEl.innerHTML = 'no item in this list....'
    }
})

function pushItemsToTodoList([todoKey, todoValue]){
    const li =document.createElement('li')
    li.innerText = todoValue
    li.addEventListener('dblclick', ()=>{
        const locationOfItemInDB = ref(database, `todoList/${todoKey}`)
        remove(locationOfItemInDB)
    })

    listItemsEl.append(li)
}


function clearInputFieldEl(){
    itemInputEl.value = ''
}

function clearListItemEl(){
    listItemsEl.innerHTML = ''
}