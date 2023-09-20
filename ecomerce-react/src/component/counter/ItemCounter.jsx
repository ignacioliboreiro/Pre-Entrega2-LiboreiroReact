import { Link } from "react-router-dom"
import { useCounter } from "../Hook/useCounter"
import { useState } from "react"

const ItemCounter = ({inital, stock}) => {

    const{count, sumarCount, restarCount} = useCounter(inital , stock)


    const onAdd = (count) =>{
        alert("cantidad selecionada " + count)
    }

    return (

        <div>
        <center>
            <h2>Carrito</h2>
            <label>
                <strong>{ count }</strong>
            </label>
            <button onClick={sumarCount}> + 1</button>
            <button onClick={restarCount}> - 1</button>
            <button onClick={()=> onAdd (count)}> Agregar al carrito</button>
        </center>
        </div>
    )
}

export default ItemCounter