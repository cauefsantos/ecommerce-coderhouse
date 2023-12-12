import ItemCount from "./ItemCount"

const ItemListContainer = props => (
    <>
    <p>Olá, {props.greeting}! Bom te ver aqui!</p>
    <ItemCount initial='1' stock='10' />
    </>
)

export default ItemListContainer
