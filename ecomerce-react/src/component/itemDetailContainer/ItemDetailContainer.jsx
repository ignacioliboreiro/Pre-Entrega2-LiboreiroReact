import React, { useEffect, useState } from 'react'
import ItemDetail from '../itemDetail/itemDetail'
import { mFetchOne } from '../../utils/MockFetch'

const ItemDetailContainer = () => {
//api manejo de estado 

const[products, setProduct] = useState({})
useEffect(() => {
    mFetchOne()
    .then (resp => console.log(resp))
    .catch(err =>console.log(err))
},[])
    return (
        <div>
            <ItemDetail products={products}/>
        </div>
    )
}

export default ItemDetailContainer