export const formatCardNumber = (cardNumber: string) => cardNumber.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1-');
