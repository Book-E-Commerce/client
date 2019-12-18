const convertToRupiah = (number) => {
  let rupiah = '';		
  let numberrev = number.toString().split('').reverse().join('');
  for(let i = 0; i < numberrev.length; i++) if(i%3 == 0) rupiah += numberrev.substr(i,3)+'.';
  return rupiah.split('',rupiah.length-1).reverse().join('')
}

export default convertToRupiah