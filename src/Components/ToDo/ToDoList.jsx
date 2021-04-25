import React from 'react'
import ToDoListItem from './ToDoListItem';
import styled from 'styled-components'


function ToDoList({label,todos,handleToggle,handleDelete}) {


  return (
    <Container >
      {todos.map(item => <ToDoListItem key={item.id} {...item} handleToggle={handleToggle} handleDelete={handleDelete}/> )}
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
`