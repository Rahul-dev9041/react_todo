import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './TodoList.css'
import TodoDone from '../TodoDone/TodoDone'


function TodoList({todos,deleteTodo}) {
    
    const [value,valueData] = useState({todo: []})
    
    useEffect( () => {
       fetchItems()
    })
    const fetchItems= async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
                  await new Promise((x) => setTimeout(x,1000))
       valueData(res.data.splice(0,4),todos)
    }
     
    function handleDelete(item) {
        axios
          .delete(`https://jsonplaceholder.typicode.com/todos/${item.id}`, item)
          .then(res => res.data);
      };
    return (
        <div className='container mt-6'>
            <div className="title">To-Do</div>
            {value.length > 0 ? (
                <div className="columns ">
               {value.map((item,index) => (
                   <div className='card has-background-light ml-6' key={item.id}>
                       <div className='has-text-weight-bold has-text-centered'>Task</div>
                     <div className='card-content has-text-weight-bold has-text-centered'>Title:{item.title}</div>
                     <label for='checkbox'>
                     <input className='' type="checkbox" defaultChecked={item.completed}/>
                     </label>
                     <i className='fas fa-trash-alt pulled'
                     onClick={{handleDelete}} 
                        aria-label='Delete'></i>
                   </div>              
               ))}
            </div>
            ): (
                <div>
                    Loading....
                </div>
            )}
            <div className="columns mt-6 is-multiline">
                <div className="column">
                {todos.map((todo,index) => (
                    <div className="card has-background-light ml-6">
                        <div className='center has-text-weight-bold'>Task</div>
                        <div className='has-text-weight-bold has-text-centered'>{todo}</div>
                        <input type="checkbox"/>
                        <i className='fas fa-trash-alt pulled' 
                        aria-label='Delete' 
                        onClick={() => {
                            deleteTodo(index)
                        }}></i>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default TodoList
