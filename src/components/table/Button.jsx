import React from 'react'


const Button=(props)=>(
    <button className={props.estilo} onClick={props.event}>{props.children}</button>
);

export default Button;