'use client'

import * as S from './styles'

import { useEffect ,useState } from 'react'
const Footer = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
    return (
      <>
       {!isMounted ? <></> : ( <S.Container>
        <S.Span>MKS sistemas © Todos os direitos reservados</S.Span>
    </S.Container>)}
      </>
    )
}

export default Footer