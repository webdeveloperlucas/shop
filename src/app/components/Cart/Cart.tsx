'use client'
import { X } from 'lucide-react'
import * as S from './styles'
import ProductCart from '../ProductCart'
import { useSelector, useDispatch } from 'react-redux'
import { formatPrice } from "@/app/utils/format-price"
import { menuOpen } from '@/app/redux/slices/menuSlice'
const Cart = () => {
    const {loading,cartItems,itemsPrice} = useSelector((state:any)=>state.cart)
    const {isOpen} = useSelector((state:any)=>state.menu)

  
    const priceTotal = formatPrice(itemsPrice)
    const dispatch = useDispatch()
    const menuHandle = () => {
     
        dispatch(menuOpen(isOpen))
    }
    return (
     <>
     {isOpen && (
          <S.Sidebar>
          <S.Close onClick={menuHandle}>
              <X color="white"/>
          </S.Close>
          <S.Container>
              <S.Header>
                  Carrinho <br/> de compras
                  
              </S.Header>
              <S.List>
                  {cartItems.map((product:any)=>(
                      <ProductCart product={product} key={product.id}/>
                  ))}
              </S.List>
              <S.Subtotal>
                 <h1>Total</h1>
                 <span>{priceTotal}</span>
              </S.Subtotal>
        
          </S.Container>
          <S.Button>
              FINALIZAR COMPRA
             </S.Button>
         </S.Sidebar> 
     )}
     </>
    )
}


export default Cart