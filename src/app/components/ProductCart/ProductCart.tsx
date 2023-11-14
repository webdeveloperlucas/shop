import Image from "next/image"
import * as S from "./styles"
import Quantity from "../Quantity"
import { useDispatch,useSelector } from 'react-redux'
import { X } from "lucide-react"
import { removeFromCart } from "@/app/redux/slices/cartSlice"
import { formatPrice } from "@/app/utils/format-price"
import { limitText } from "@/app/utils/limit-text"
const ProductCart = ({product}: any) => {
    const dispatch = useDispatch()
    const minusProduct = () => {
        dispatch(removeFromCart(product.id))
    }
    const { name, photo, price,qty} = product

   
    const limitedName: string = limitText(name, 30);
    const formatePrice =price * qty
    const formattedPrice = formatPrice(formatePrice);
    
    return (
        <S.Container>
            <S.Close onClick={minusProduct}>
                <X color="white" size={14}/>
            </S.Close>
            <S.Image>
                <Image
                    src={photo}
                    alt=""
                    width={60}
                    height={60}
                    sizes="100vw"
                    loading="lazy"
                />
            </S.Image>
            <S.Title>
            {limitedName}
            </S.Title>
           <S.PriceContainer>
           <S.Quantity>
                <Quantity product={product}/>
            </S.Quantity>
            <S.Price>
                {formattedPrice}
            </S.Price>
           </S.PriceContainer>
        </S.Container>
    )
}

export default ProductCart