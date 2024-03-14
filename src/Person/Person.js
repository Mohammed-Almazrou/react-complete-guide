import React from "react";

const Person = (props) =>
{
return (
<div>
    <p>My name :{props.name} age IS:{props.age} {props.children}</p>
    <input type="text" onChange={props.Changenpm}  value={props.name} ></input>
  
</div>
)
};


export default Person;