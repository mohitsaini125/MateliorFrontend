import { useContext, useReducer, useState, createContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CartContext = createContext()

const initialState = {
  items : []
}

function cartReducer(state, action ) {
  switch(action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items : state.items.filter((item) => item.id !== action.payload)
      }
    case "CLEAR_CART":
      return {
        ...state,
        items : []
      }
    default:
      return state
  }
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      { children }
    </CartContext.Provider>
  )
}

function useCart() {
  return useContext(CartContext)
}

export default function HomePage() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  )
}

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        MATELIOR
      </Text>
      <Product />
      <Cart />
    </View>
  )
}

function Product() {
  const { dispatch } = useCart()
  const product = {
    id: 1,
    name: "black bracelet",
    price: 999
  }
  return(
    <View style={styles.productSection}>
      <Text style={styles.productName}>
        {product.name}
      </Text>
      <Text>
        ₹{product.price}
      </Text>
      <Button
        title="Add To Cart"
        onPress={()=> dispatch(
          {
            type: "ADD_TO_CART",
            payload: product
          }
        )}
      />
    </View>
  )
}

function Cart() {
  const { state, dispatch } = useCart()
  return (
    <View style={styles.cartSection}>
      <Text style={styles.cartHeading}>
        Cart
      </Text>
      <Text>
        Items in Cart: {state.items.length}
      </Text>
      {state.items.map((item)=>(
        <View key={item.id} style={styles.cartItem}>
          <Text>
            {item.name}
          </Text>
          <Text>
            ₹{item.price}
          </Text>
          <Button
            title="Remove"
            onPress={()=> dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
          />
        </View>
      ))}
      <Button title="Clear Cart" onPress={()=> dispatch({ type: "CLEAR_CART"})} />
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner : {
    flex: 1,
    padding: 30,
    marginTop: 40
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20
  },
  productSection: {
    marginBottom: 30
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold"
  }
})