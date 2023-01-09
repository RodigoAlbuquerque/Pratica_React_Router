import React from "react";
import Header from "../../components/header";

export default function Vector(){
    const style = {
        width: '100vw',
        color:'white',
        display:'flex',
        justifyContent:'center'
        
    }
    return(
        <>
            <Header/>
            <h1 style={style}>VOCÊ ESTÁ NA PÁGINA VECTOR</h1>
        </> 
    );
}