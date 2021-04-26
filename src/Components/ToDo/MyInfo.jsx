import React from 'react'
import styled from 'styled-components'

const MyInfo = () => {
  return(
    <Info>
      Designed & developed by <span>Neeraj Rawat</span>
      <a href="https://github.com/nrjrwt0" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/nrjrwt/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
    </Info>
  )
}
export {MyInfo}

const Info = styled.div`
  background: #000000d0;
  padding:10px 12px;
  text-align:center;
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  border-top: 2px solid teal;
  padding: 8px 0px;
  font-size: 15px;
  span {
    font-weight: bold;
  }
  a {
    color: white;
    margin: 0px 6px;
  }
`