import React, { useState } from 'react'
import styled from 'styled-components';

function ToDoInput({handleAdd}) {
  const [query, setQuery] = useState("");
  const [error,setError] = useState(false)

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(query === ""){
      setError(true);
      return;
    }
    handleAdd(query);
    setQuery("")
    setError(false);
  }

  return (
    <InputBox onSubmit={handleSubmit}> 
      <input value={query} onChange={handleChange}  placeholder={error ? "Please add something" :"Add something"}/>
      <button  ><i className="fas fa-plus "></i></button>
    </InputBox>
  )
}
export default ToDoInput;

const InputBox = styled.form`
  width:90%;
  margin:16px auto;
  display:flex;
  justify-content:space-between;
  align-items:center;
  border-radius:12px;
  overflow:hidden;
  border:1px solid black;
  background-color:white;
  input{
    width:86%;
    padding: 5px 14px;
    outline: none;
    font-size: 16px;
    border-radius:10px;
    border:none;
    color:#333;
  }
  button{
    width: 14%;
    padding: 5px 14px;
    border:none;
    border-radius:10px;
    color:teal;
  }
`