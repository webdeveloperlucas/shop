import Image from 'next/image'
import styles from './page.module.css'
import Products from '../components/Products'
import Cart from '../components/Cart'

export default function Home() {
  return (
    <>
      <Products/>
      <Cart/>
    </>
  )
}
