import React,{useState} from 'react'
import Header from './Components/Header/Header'
import TodoDone from './Components/Todo/TodoDone/TodoDone'
import TodoForm from './Components/Todo/TodoForm/TodoForm'
import TodoList from './Components/Todo/TodoList/TodoList'



function App() {
  const [todos,setTodos] = useState([])
  return (
    <div>
      <Header/>
      <TodoForm savetodo={(todoText) => {
                        const trimmedText = todoText
                     if(trimmedText.length > 0) {
                   setTodos([...todos,trimmedText])
               }
           }}/>
      <TodoList todos={todos}
           deleteTodo = {(todoIndex) => {
               const newTodos = todos.filter((_,index) => index !== todoIndex)
               setTodos(newTodos)}}
               />
      <TodoDone donetodo={(tododone) => {
        const text = tododone
        if(text.length > 0) {
          setTodos([...todos,text])
        }
      }}/>
    </div>
  )
}

export default App

