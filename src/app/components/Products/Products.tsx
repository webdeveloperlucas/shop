'use client'
import * as S from './styles'
import ProductCard from '../Product/ProductCard';
import { useQuery } from '@tanstack/react-query';
import { getData } from '@/app/services/apiService';
import { ProductProps } from '@/app/types/product.types';



const Products = () => {

    const params = {
        page: 1,
        rows: 10,
        sortBy: 'id',
        orderBy: 'DESC',
      }

     const { data, isLoading, isError } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
          const  data = await getData('/products',params);
          return data.products;
        },
        retry: 3,
      });

      
    if(isLoading) {
        return (
            <S.Container>
                {[1,2,3,4,5,6,7,8,9,10,11,12].map((_,index)=>(<S.SkeletonContent key={index}/>))}
           </S.Container>
        )
    }

    if(isError) {
        return (
            <div>Error..</div>
        )
    }

    return (
        <S.Container>
            {data.map((product:any) => (
               <ProductCard product={product} key={product.id}/>
            ))}   
        </S.Container>
    )
}



export default Products