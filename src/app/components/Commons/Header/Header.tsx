'use client'
import * as S from './styles'
import Logo from '../../Logo'
import ShopBadge from '../../ShopBadge'
import { useEffect ,useState } from 'react'

const Header = () => {
    const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  console.log(isMounted)
  

    return  (
         <>
            {!isMounted ? <></> : ( <S.Container>
                <Logo />
                <ShopBadge />
            </S.Container>)}
         </>
        ) 
}

export default Header