const hello = (name) => {
    console.log("Hello" + name)
}


const topla = (a, b) => a + b; //fonksiyon

const cikar = (a, b) => a - b;
//export default topla; default olarak dışarı çıkarma  //dışarı aktarmak için her fonksiyonu ayrı ayrı dışarı aktarmak istiyosak her fonksiyonun başına export yazarız. 
//Bir yöntem daha ayrı ayrı başlarına export koymak yerine tek seferde yazabiliriz

export { hello, topla, cikar }

//fonksiyonda tek parametre varsa (name) gibi parantezsizde kullanabiliriz.

//sadece string birşey dışarı çıkarmak istersek fonksiyon olmayan:
export const text = 'Text';

//obje dışarı aktarmak istersek:
export const user = {
    name: 'İrem',
    surname: 'Akdoğan'
}

//array dışarı aktarmak istersek:
export const users = [{
    name: 'sakdnasj',
    surname: 'mkcsdslkc'
}, {
    name: 'lsdösvşdö',
    surname: 'öşvdvöldfv'
}]