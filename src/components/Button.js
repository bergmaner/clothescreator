import React from "react"
import styled from "styled-components"
const CoreButton = styled.div`
  width: 240px;
`
const ButtonLink = styled.div`
  border: 2px solid black;
  color: black;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction:row-reverse;
  margin: 5px auto 0;
  padding: 3px 15px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 0.08em;
  border-radius: 5px;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  :after {
    content: "";
    position: absolute;
    height: 0%;
    left: 50%;
    top: 50%;
    width: 150%;
    z-index: -1;
    -webkit-transition: all 0.75s ease 0s;
    -moz-transition: all 0.75s ease 0s;
    -o-transition: all 0.75s ease 0s;
    transition: all 0.75s ease 0s;
    background: black;
    -moz-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    -ms-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    transform: translateX(-50%) translateY(-50%) rotate(-25deg);
  }
  :hover {
    color: #fff;
    text-shadow: none;
    cursor: pointer;
  }
  :hover:after,
  :visited:hover:after {
    height: 450%;
  }
`
const Button = ({icon, text}) => {
  return (
    <CoreButton>
      <ButtonLink>{ icon }<div>{text}</div></ButtonLink>
    </CoreButton>
  )
}
export default Button
