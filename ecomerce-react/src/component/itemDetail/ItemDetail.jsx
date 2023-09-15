import React from 'react'
import ItemCounter from '../counter/ItemCounter'

const ItemDetail = ({products}) => {
    const onAdd = (count) =>{
        alert("porducto selecionado ", count)
    }

    return (
        <div className='row'>
                <div className='col'>
                <img src={products. imagenUrl} alt="" />
                <ItemCounter inital={1} stock={3} onAdd={onAdd}/>
                </div>

            </div>
            )
}

            export default ItemDetail