import Card from "../Card/Card"


const ItemList = ({products}) => {
    return (
        <>
        {
            products.map(product => <Card key={product.id} product={product} />
            )
            }
        </>
    )
}

export default ItemList