import { useState } from "react"
import '../styles/styles.css'

const ItemCount = ({stock, initial}) => {

    const [itemsAdded, setItemsAdded] = useState(initial)

    const addItem = () => {
        if (itemsAdded < stock) {
            setItemsAdded(prevItems => ++prevItems)
        }
    }

    const subtractItem = () => {
        if (itemsAdded > 0) {
            setItemsAdded(prevItems => --prevItems)
        }
    }
 
    return (
        <div class="countContainer">
            <span class="countContainer__button" onClick={subtractItem}>-</span>
            <span>{itemsAdded}</span>
            <span  class="countContainer__button"onClick={addItem}>+</span>
        </div>
    )
}

export default ItemCount
