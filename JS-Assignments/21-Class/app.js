// const goat = {
//     Name: 'Lionel Messi',
//     age: 36,
//     ballonDors: 8,
// }
// console.log(obj.age);

// const object = {
//     name: 'Shahzaib Ali',
//     email: 'shahzaibalijamro@gmail.com',
//     age: 18,
//     greetUser: function () {
//         return `Hello ${this.name}`
//     }
// }
// console.log(object.greetUser());
// delete object.name;
// object.firstName = 'Shahzaib';
// object.lastName = 'Ali';
// console.log(object);

// let username = document.querySelector('.input-name');
// let userEmail = document.querySelector('.input-email');
// let userAge = document.querySelector('.input-age');
// let userCity = document.querySelector('.input-city');
// let user;

// function getObject() {
//     user = {
//         name: username.value,
//         email: userEmail.value,
//         age: userAge.value,
//         city: userCity.value,
//     }
//     console.log(user);
// }


const players = {
    goatLevelPlayers: ['Messi', 'Ronaldo', 'Pele', 'Maradona'],
    elite: {
        top: ['Zidane', 'Xavi', 'Maldini', 'Iniesta', 'Modric', 'Kroos', 'KDB'],
        normal: {
            top: ['Beckham', 'Pogba', 'Schweinsteiger'],
            normal: {
                extra: {
                    level: [1,2,3,4,5,6,7,8,9],
                    low: {
                        level: {
                            op: [1,2,3,4,10]
                        }
                    }
                }
            }
        },
    high: {
        top:["Delio Onnis","Bernard Lacombe","Jean-Pierre Papin","Roger Courtois","Hervé Revelli",  "Thadée Cisowski","Carlos Bianchi","Zlatan Ibrahimović","Dominique Rocheteau","Didier Drogba","Edinson Cavani","Sonny Anderson","Pauleta","Josip Skoblar","George Weah",],
        }
    },
    failed: [{failedTop: [{no1: 'Neymar',no2: 'Ronaldinho',no3: 'Hazard',},
            {failedNot: [{no1: 'Messi',no2: 'Ronaldo',}]}]
    }]
}
console.log(players.failed[0]);
console.log(players.failed[0].failedTop[1]);
console.log(players.failed[0].failedTop[1].failedNot[0].no2);