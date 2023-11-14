import { ProductProps } from '@/app/types/product.types'
import BoxIcon from '../Icons/BoxIcon'
import * as S from './styles'
import { addToCart } from '@/app/redux/slices/cartSlice'
import { useDispatch,useSelector } from 'react-redux'
const AddToCart = ({
    product 
}:{product:ProductProps}) => {

   const dispatch = useDispatch()

    const addCart = ()=>{
        dispatch(addToCart({...product,qty:1}))
    }
  
    return (
     
        <>
           <S.Button onClick={addCart} >
            <BoxIcon/> Comprar
        </S.Button>
        
        </>
    )
}


export default AddToCart