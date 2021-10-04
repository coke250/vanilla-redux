import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// 액션 타입 정의
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
    console.log(action);
    switch (action.type) {
        case ADD_TODO:
            return [...state, { text: action.text, id: Date.now() }];
        case DELETE_TODO:
            return [];
        default:
            return state;
    }
};

const store = createStore(reducer);

const addToDo = (text) => {
    store.dispatch({ type: ADD_TODO, text });
};

const deleteToDo = (e) => {
  console.log(e.target.parentNode);
}

const paintTodos = () => {
    const toDos = store.getState();
    ul.innerHTML = "";
    toDos.forEach((toDo) => {
        const li = document.createElement("li");
        const btn = document.createElement('button');
        btn.innerText='DEL';
        btn.addEventListener('click', deleteToDo)
        li.id = toDo.id;
        li.innerText = toDo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    });
};

store.subscribe(paintTodos);

const onSubmit = (e) => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    addToDo(toDo);
};

form.addEventListener("submit", onSubmit);
