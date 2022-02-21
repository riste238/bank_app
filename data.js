// let db = [
//     {
//         id: '1',
//         name : "John",
//         deposit: 1000,
//         cCard : "Master"
//     }, 
//      {
//         id: '2',
//         name : "Marco",
//         deposit: 2000,
//         cCard : "Visa"
//     }
// ];

let db = [];
if(localStorage.db){
    db = JSON.parse(localStorage.db);
}
