import React, { useState } from 'react'
import ToDoListItem from './ToDoListItem';
import styled from 'styled-components'


function ToDoList({label,todos,handleToggle,handleDelete}) {
  const [sortBy,setSortBy] = useState("Last Added");


  const handleSorting = (a,b) => {
    if(sortBy === "Ascending"){
      if(a.title > b.title){
        return 1;
      } else if(a.title < b.title){
        return -1
      } else {
        return 0
      }
    } else if(sortBy === "Descending"){
      if(a.title < b.title){
        return 1;
      } else if(a.title > b.title){
        return -1
      } else {
        return 0
      }
    } else if(sortBy === "Last Added"){
      return b.createdOn - a.createdOn
      
    } else if(sortBy === "First Added"){
      return a.createdOn - b.createdOn
    }
  }

  return (
    <Container >
      <div>
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
          <option value="Last Added">Last Added</option>
          <option value="First Added">First Added</option>
        </select>
      </div>

      {todos.sort(handleSorting).map(item => <ToDoListItem key={item.id} {...item} handleToggle={handleToggle} handleDelete={handleDelete}/> )}
    </Container>

  )
}

export default ToDoList;

const Container = styled.div`
  max-width:100%;
  max-height:80%;
  margin:auto;
  overflow-y:scroll;
  scrollbar-color: light;

  select{
    outline:none;
    margin-bottom:10px;
  }
  
`