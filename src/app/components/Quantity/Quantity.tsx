import { addToCart, decreateQuantity } from '@/app/redux/slices/cartSlice'
import * as S from './styles'
import { Plus, Minus } from 'lucide-react'
import { useDispatch,useSelector } from 'react-redux'
const Quantity = ({product}:any) => {
    const { qty } = product
    const dispatch = useDispatch()
    const minusProduct = () => {
        dispatch(decreateQuantity(product.id))
    }
    const plusProduct = () => {
        dispatch(addToCart({...product,qty:1}))
    }
    return (
       <S.Container>
        <S.Label>Qtd:</S.Label>
        <S.Control>
            <S.InputMinus onClick={minusProduct}><Minus size={12} /></S.InputMinus>
            <S.Number>{qty}</S.Number>
            <S.InputMinus onClick={plusProduct}><Plus  size={12}/></S.InputMinus>
        </S.Control>
       </S.Container>
    )
}

export default Quantity