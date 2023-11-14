import Image from 'next/image'
import * as S from './styles'
import AddToCart from '../AddToCart/AddToCart'
import { formatPrice } from '@/app/utils/format-price'
import { limitText } from '@/app/utils/limit-text'
import { ProductProps } from '@/app/types/product.types'

const ProductCard = ({
  product
}:{product:ProductProps}) => {
    const {description,name,price,photo } =product
    const limitedText: string = limitText(description, 50);
    const limitedName: string = limitText(name, 30);
    const formattedPrice = formatPrice(price);
    return (    
        <S.Container>
            <S.Card>
            <S.Image>
                <Image
                    src={photo}
                    width={150}
                    height={150}
                    alt="lorem"
                />
            </S.Image>
                <S.Content>
                    <S.Title>{limitedName}</S.Title>
                    <S.Badge>{formattedPrice}</S.Badge>
                </S.Content>
                <S.Content>
                  <S.Paragraph>{limitedText}</S.Paragraph>
                </S.Content>
               
            </S.Card>
            <AddToCart product={product}/>
        </S.Container>        
    )
}

export default ProductCard