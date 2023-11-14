'use client'
import { menuOpen } from '@/app/redux/slices/menuSlice'
import ShopIcon from '../Icons/ShopIcon'
import * as S from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { CartItem } from '@/app/types/cart.interface'

const ShopBadge = () => {
    const {cartItems} = useSelector((state:any)=>state?.cart)
    const {isOpen} = useSelector((state:any)=>state.menu)
    const dispatch = useDispatch()
    const menuHandle = () => {
        dispatch(menuOpen(isOpen))
    }
    return (
        <S.Container onClick={menuHandle}>
            <ShopIcon/>
            <S.Quantity>{cartItems.length > 0 ? (
                <>{cartItems.length}</>
            ):<>0</>}</S.Quantity>
        </S.Container>
    )
}

export default ShopBadge