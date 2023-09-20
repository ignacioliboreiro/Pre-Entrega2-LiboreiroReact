import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({product}) => {
    return (
        <>
    <div  className="card w-25">
                    <div className="card-body">
                        <img className="w-100" src={product.imagenUrl} alt="" />
                    <p>Descripcion: {product.description}</p>
                    <p> precio: {product.price}</p>
                </div>

                <div className="card-compra">
                    <Link to={"/item/:id"}>
                    <button>
                        Comprar
                    </button>
                    </Link>

                </div>
            </div>



        </>
    )
}

export default Card