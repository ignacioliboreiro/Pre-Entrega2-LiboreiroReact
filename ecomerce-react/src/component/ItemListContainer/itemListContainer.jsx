import { useEffect } from "react"
import mFetch from "../../utils/MockFetch"
import { useState } from "react"
import ItemList from "../ItemList/ItemList"


function ItemListContainer() {
    const[products, setProduct] = useState([])
    const[loading, setLoading] = useState(true)
useEffect(() =>{
    
        mFetch()
    .then ( res =>{
        return res
    })
    .then(respuesta => setProduct(respuesta))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
})


    return (
            <center> 
        <div>
            <h1>Bienvenidos a MaxGaming</h1>
            {loading ? 
                    <h2>Cargando....</h2> 
                : 
                <ItemList products={products}/>
            }
        </div>
                </center>
    )
}

export default ItemListContainer