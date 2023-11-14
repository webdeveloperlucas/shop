// utils.ts

export const formatPrice = (price: string | number): string => {
    const parsedPrice = typeof price === 'string' ? parseFloat(price) : price;
  
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(parsedPrice);
  };
  