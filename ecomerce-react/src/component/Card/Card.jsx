import React from 'react'

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
                    <button>
                        Comprar
                    </button>

                </div>
            </div>



        </>
    )
}

export default Card