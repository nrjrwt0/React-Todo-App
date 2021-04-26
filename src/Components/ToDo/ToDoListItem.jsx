import React from 'react'
import styled from 'styled-components'

function ToDoListItem({title,status,id,handleToggle,handleDelete}) {
    return(
      <Tasks >
        {status ? <p style={{textDecoration:"line-through"}}>{title}</p> : <p>{title}</p>}
        <div >
          <button  onClick={() => handleToggle(id)}>{!status ? <i className="far fa-check-circle fa-lg" ></i> : <i className="fas fa-check-circle fa-lg"></i>}</button>
          <button onClick={() => handleDelete(id)}><i className="fas fa-trash fa-lg"></i></button>
        </div>
      </Tasks>
    )
}

export default ToDoListItem;

const Tasks = styled.div`
  max-width:100%;
  display:flex;
  justify-content:space-between;
  border:1px solid teal;
  margin:4px 0px;
  padding:2px 6px;
  p{
    font-size:15px;
    flex:8;
  }
  div{
    display:flex;
    flex:1;
    justify-content:space-between;
    align-items:center;
  }

  button{
    border:none;
    background-color:transparent;
    padding:5px;
    margin:0px 3px;
    height:25px;

    i{
      color:tomato;;
    }
  }
`