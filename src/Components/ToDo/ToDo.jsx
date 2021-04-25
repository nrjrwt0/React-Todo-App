import React, { useEffect, useState } from 'react'
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';
import {v4 as uuid} from 'uuid'
import { loadData, saveData } from '../Utils/localStorage';
import styled from 'styled-components'

function ToDo() {
  const [todos,setTodos] = useState([]);
  const [showCompletedTasks,setShowCompletedTasks] = useState(false)

  const handleAdd = (title) => {
    const payload = {
      id:uuid(),
      title,
      status: false,
      createdOn: Date.now()
    }
    setTodos([payload,...todos]);
    const localTodos = loadData('todos');
    localTodos ? saveData('todos',[payload,...localTodos]) : saveData('todos',[payload])
    
  }

  const handleToggle = (id) => {
    const updatedTodo =  todos.map(item => item.id === id ? {...item, status:!item.status} : item);
    setTodos(updatedTodo);
    saveData('todos',[...updatedTodo])
  }

  const handleDelete = (id) => {
    const updatedTodo = todos.filter(item => item.id !==id);
    setTodos(updatedTodo);
    saveData('todos',[...updatedTodo])
  }

  const completedTodo = todos.filter(item => item.status);
  const incompletedTodo = todos.filter(item => !item.status);

  useEffect(() => {
    const localTodos = loadData('todos');
    localTodos ? setTodos([...localTodos]) : setTodos([]);
  },[])

  return (
    <Container>
      <h2>Todo App</h2>
      <ToDoInput handleAdd={handleAdd}/>
      <button onClick={() => setShowCompletedTasks(!showCompletedTasks)}>{!showCompletedTasks ? "Completed Tasks" : "Incomplete Tasks"}</button>

      {!showCompletedTasks ? <ToDoList label="INCOMPLETE TODOS" handleToggle={handleToggle} handleDelete={handleDelete} todos={incompletedTodo}/> : <ToDoList label="COMPLETE TODOS" handleToggle={handleToggle} handleDelete={handleDelete} todos={completedTodo}/>}
    </Container>

  )
}
export default ToDo;


const Container = styled.div`
  width: 390px;
  height:560px;
  padding:10px 14px;
  z-index:100;
  background: #000000d0;
  color: white;

  border-radius:10px;
  position:relative;
  & > button{
    position:absolute;
    right:10px;
    top:46px;
    font-size:15px;
    border:none;
    text-decoration:underline;
    cursor: pointer;
    color:teal;
    background-color:transparent;
  }
  h2{
    text-align:center;
    margin:10px 0px 28px;
    color:tomato;
  }
` 