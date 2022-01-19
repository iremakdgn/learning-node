/*setTimeout(() => {
        console.log("Merhaba")

    }, 2000)  Bu fonksiyonun yaptığı şey vereceğiniz parametredeki 
    süre çalıştıktan sonra 1 kere çalışıyor olması mesela 2 sn sonra şu fonk çalışsın gibi*/

/*setInterval(() => {
        console.log("Merhaba ben her saniye çalışacağım")
    }, 1000) //verilen parametredeki her periyotta çalışr*/

// const sayHello = (cb) => {
//     cb();
// }

// sayHello(() => {
//     console.log("Hello")
// });

//fetch: herhangi bir veri kaynağına bağlanıp veri çekebiilir.


import fetch from 'node-fetch';
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => (data.json())
//         .then((users) => {

//             console.log("users yüklendi", users)
//             fetch("https://jsonplaceholder.typicode.com/posts/1").then((data) => (data.json()))
//                 .then((posts) => console.log("Post yüklendi", posts));
//         })); //önce users ı sonra posts u görmek için içiçe yazdık


// fetch("https://jsonplaceholder.typicode.com/posts/2").then((data) => (data.json()))
//     .then((posts) => console.log("Post yüklendi", posts)); // böyle dışında yazarsak buunu onlardan önce falan başlatabilir


//şimdi bu fetchler iç içe karmaşık oldu pek bir çok fetch yazmaya kalkışırsak kolay yöntemi:

// async function getData() {

//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
//     console.log("users", users);

//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
//     console.log("post1", post1);

//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();
//     console.log("post2", post2);

// }

// getData();

//axios kullanımı
import axios from 'axios';

// (async() => {

//     const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");
//     console.log("users", users);

//     const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");
//     console.log("post1", post1);

//     const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2");
//     console.log("post2", post2);

// })();

//promise

const getComments = (number) => {
    return new Promise(async(resolve, reject) => {

        const { data } = await axios("https://jsonplaceholder.typicode.com/users");

        resolve(data)

    })
}
getComments().then((data) => console.log(data))
    .catch((e) => console.log(e))