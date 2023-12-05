import React, { useState } from 'react';
import './App.css'
function App() {

  const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [display, SetDisplay] = useState([])
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-12 uploadbox">
                    <p>“One of the secrets of getting more done is to make a TO-DO List every day, keep it visible, and use it as a guide to action as you go through the day.”<br /> — Jean de La Fontaine</p>
                    <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" placeholder='Enter things to do' /><br />
                    <button onClick={() => {
                        if (todo !== '') {
                            setTodos([...todos, { id: Date.now(), text: todo, status: false }])
                            setTodo('')
                        }
                    }} className='btn'>Add</button>
                </div>


                <div className="row">
                    <div className="col-md-6 todolist table1">
                        <table>
                            <thead>
                                <tr>
                                <td className='slnum'></td>
                                    <td>ToDo Item</td>
                                    <td>action</td>
                                </tr>
                            </thead>
                            {todos.map((obj,index) => {
                                return (
                                    <tbody key={obj.id}>
                                        <tr>
                                            <td className='slnum'>{index+1}</td>
                                            <td>{obj.text}</td>
                                            <td>
                                                <button onClick={(e) => {
                                                    setTodos(todos.filter(obj2 => {
                                                        if (obj2.id === obj.id) {
                                                            obj2.status = e.target.value
                                                        }
                                                        return obj2
                                                    }))
                                                }} className='btn' value={obj.status} >Done</button>
                                                <button onClick={() => {
                                                    SetDisplay([...display, obj])
                                                    
                                                    setTodos((prevTodos) =>
                                                        prevTodos.filter((obj3) => obj3 !== obj)
                                                    );
                                                }} className='btn del'>Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })}
                        </table>

                    </div>
                    <div className="col-md-3 todolist table2">
                        <table>
                            <thead>
                                <tr>
                                    <td className='slnum'></td>
                                    <td>Completed ToDo Item</td>
                                    
                                </tr>
                            </thead>
                            {todos.map((obj,index) => {
                                if (obj.status) {
                                    return (
                                        <tbody>
                                            <tr>
                                                <td className='slnum'>{index+1}</td>
                                                <td>{obj.text}</td>
                                                
                                            </tr>
                                        </tbody>
                                    )
                                }
                                return null
                            })}


                        </table>
                    </div>
                    <div className="col-md-3 todolist table3">
                        <table>
                            <thead>
                                <tr>
                                <td className='slnum'></td>
                                    <td>Removed ToDo Item</td>
                                    
                                </tr>
                            </thead>
                            {display.map((obj,index)=>{
                                return(
                                    <tbody>
                                <tr>
                                    <td className='slnum'>{index+1}</td>
                                    <td>{obj.text}</td>
                                    
                                </tr>
                            </tbody>
                                )
                                
                            })}
                            

                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default App;