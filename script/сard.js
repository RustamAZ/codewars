
// const mouthSize = (animal) => animal.toLowerCase() == "alligator" ? "small" : "wide";






// const delivery1 = [[15,17,2],[5,15,16],[6,2,11],[1,5,7],[5,2,6],[16,11,18],[5,2,4], 3];
// function deathStar(delivery) {
//     let iron=0;
//     let steel=0;
//     let chromium=0;
    
//     for (let i=0; i<delivery[7]; i++){
//       iron += delivery[i][0];
//       steel += delivery[i][1];
//       chromium += delivery[i][2];
//     }
    
//     if(iron >= 100 && steel >= 75 && chromium >= 50){
//       return `The station is completed!`;
//     }else{
//       return `The station is destroyed! It needed ${100-iron > 0 ? 100-iron : 0} iron, ${75-steel > 0 ? 75-steel : 0} steel and ${50-chromium > 0 ? 50-chromium : 0} chromium for completion.`;
//     }
//   }






// function closeCompare(a,b,margin = 0) {
//     if (a - b > margin) {
//         return 1;
//     } else if (a - b < 0) {
//         return -1;
//     } else {
//         return 0;
//     }
// }








// function DNA(string) {
//    const splitDNA = string.split('');
//    let newDNA = splitDNA.map(item => {
//         if (item === 'A') {
//             return 'T';
//         } else if (item === 'T') {
//             return 'A';
//         } else if (item === 'C') {
//             return 'G';
//         } else if (item === 'G') {
//             return 'C';
//         } else {
//             return 'Такого днк не существует!';
//         }
//    })
//    return newDNA.join('');
// }








// function numArr(n,x) {
//     var z = []
//     for (var i = 1; i <= n; i++) {
//         z.push(x* i);
//     }
//     return z
// }





// function arr1(string) {
//     let arr2 = string.split('').reverse();
//     return arr2;
// }





// function addArrays(array1, array2) {
//     if(array1.length != array2.length) throw new Error();
//     return array1.map((a,i) => array1[i] + array2[i]);
// }





// function NBAplayer(name, team, ppg) {
//     this.name = name;
//     this.team = team;
//     this.ppg = ppg;
// }
// let player1 = new NBAplayer('name1','team1', 15.5);
// let player2 = new NBAplayer('name2','team2', 14.8);
// function sumPPG(name1,name2) {
//     let sum = name1.ppg + name2.ppg;
//     return sum;
// }






// function FizzBuzz(num) {
//     let arr = []
//     for (let i = 1; i < num; i++) {
//         arr.push(i)
//     }
//     if ((num % 3 === 0) && (num % 5 === 0)) {
//         arr.push('FizzBuzz')
//     } else if (num % 5 === 0) {
//         arr.push('Buzz')
//     } else if (num % 3 === 0) {
//         arr.push('Fizz')
//     }
//     return arr
// }






// function year(year) {
//     if(year % 4 === 0 && year % 400 === 0 && year % 400 === 0) {
//         console.log('y')
//     } 
// }





// const bob = {
//     speed: 60,
//     reactionTime: 1000
// }
// const anna = {
//     speed: 60,
//     reactionTime: 1500
// }

// function drag(len, racer1) {
//     let raceTimeFirst = 0

//     setTimeout(() => {
//         const raceTimeF = setInterval(() => {
//             if (len > racer1.speed) {
//                 len -= racer1.speed
//                 raceTimeFirst++
//                 console.log(len);
//             } else {
//                 return raceTimeFirst
//             }
//             console.log(raceTimeFirst)
//         }, 1000);
        
//     }, racer1.reactionTime);







// console.log('Request data...')

// setTimeout(() => {
//     console.log('Preparing data...')

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data request', backendData)
//     }, 2000)
// }, 2000)







// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing data...')

//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }

//         resolve(backendData)
//     },2000)
// })

// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         })
//     })
// }).then(clientData => {
//     console.log('Data received', clientData)
//     clientData.fromPromise = true
//     return clientData
// }).then(data => {
//     console.log('modify', data)
// })
// .catch(err => {
//     console.error('Error: ', err)
// })
// .finally(() => {
//     console.log('Finally')
// })






// const sleep = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms)
//     })
// }

// sleep(2000).then(() => {
//     console.log('after 2 sec')
// })

// sleep(3000).then(() => {
//     console.log('after 3 sec')
// })

// Promise.all([sleep(2000), sleep(5000)])
// .then(() => {
//     console.log('after 7 sec')
// })






// class Person {
//     constructor(health, armor, damage) {
//         this.health = health
//         this.armor = armor
//         this.damage = damage
//     }

//     getDamage(who){
//         this.health <= 0 ?
//         this.die()
//         :this.health -= who.damage - this.armor
//         console.log(this.health)
//     }

//     die() {
//         console.log(`${this} is death`)
//     }    

// }

// const knight = new Person(500,30,50)

// const mob = new Person(300,15,50)

// const knightBody = document.querySelector('.knight')
// const mobBody = document.querySelector('.mob')
// console.log(knightBody,mobBody)

// knightBody.addEventListener('click', (e) => {
//     knight.getDamage(mob)
// })

// mobBody.addEventListener('click', (e) => {
//     mob.getDamage(knight)
// })







// function alphabetWar(string) {
//     let changeArr = bomb(string)

//     return splitOnTeam(changeArr)
// }

// function bomb(string) {
//     let changeArr = string.split('')

//     let bombIndex = changeArr.indexOf('*')

//     if(bombIndex === -1) {
//         return changeArr

//     } else {

//         while(bombIndex !== -1) {
//             let i = 1
//             let destroyItems = 3
//             while(changeArr[bombIndex+i] === '*' || changeArr[bombIndex+i+1] === '*'){
//                 destroyItems++
//                 i++
//             }

//             if(bombIndex === 0) {
//                 changeArr.splice(bombIndex - 0, destroyItems-1)
//             } else if(bombIndex === changeArr.length -1) {
//                 changeArr.splice(bombIndex - 1, destroyItems-1)
//             } else {
//                 changeArr.splice(bombIndex - 1, destroyItems)
//             }
//             console.log(changeArr)
//             bombIndex = changeArr.indexOf('*')
//         }
//         return changeArr
//     }
// }

// function splitOnTeam(changeArr) {
//     let leftSide = []

//     let rightSide = []

//     changeArr.map(item => {
//         if (item === 'm' || item === 'q' || item === 'd' || item === 'z') {
//             rightSide.push(item)
//         } else if (item === 'w' || item === 'p' || item === 'b' || item === 's') {
//             leftSide.push(item)
//         } else {
//             return
//         }
//     })
//     console.log(rightSide, leftSide)
//     let team1 = rightSide.map(item => {
//         switch(item) {
//             case 'm':
//                 return 4
//             break

//             case 'q':
//                 return 3
//             break

//             case 'd':
//                 return 2
//             break

//             case 'z': 
//                 return 1
//             break

//             default: return 0
//         }
//     })

//     let team2 = leftSide.map(item => {
//         switch(item) {
//             case 'w':
//                 return 4
//             break

//             case 'p':
//                 return 3
//             break

//             case 'b':
//                 return 2
//             break

//             case 's': 
//                 return 1
//             break

//             default: return 0
//         }
//     })
//     console.log(team1, team2)
//     return score(team1, team2)

// }

// function score(team1,team2) {
//     console.log(team2[0] > team1)
//     if(team1.length > 1) {
//         team1Score = team1.reduce((prev,next) => {
//             return prev + next
//         })
//     } else if(team1.length === 1) {
//         team1Score = team1[0]
//     } else {
//         team1Score = 0
//     }

//     if(team2.length > 1) {
//         team2Score = team2.reduce((prev,next) => {
//             return prev + next
//         })
//     } else if(team2.length === 1) {
//         team2Score = team2[0]
//     } else {
//         team2Score = 0
//     }

//     if (team1Score > team2Score) {
//         return "Right side wins!"
//     } else if(team1Score < team2Score) {
//         return "Left side wins!"
//     } else {
//         return "Let's fight again!"
//     }
// }






// let wishlist = [
//     {"name":"card game","size":"small","clatters":"no","weight":"light"},
//     {"name":"socks","size":"small","clatters":"no","weight":"light"},
//     {"name":"bobble hat","size":"small","clatters":"no","weight":"light"}
// ]

// let presents = [
//     {"size":"small","clatters":"no","weight":"light"},
//     {"size":"small","clatters":"no","weight":"light"}
// ]

// function checkGifts(wishlist, presents) {
//     let exitArr = [];
//     for (let i = 0; i < wishlist.length; i++) {
//         for(let k = 0; k < presents.length; k++) {
//             if(presents[k].size === wishlist[i].size && presents[k].clatters === wishlist[i].clatters && presents[k].weight === wishlist[i].weight && exitArr[i] !== wishlist[i].name) {
//                 exitArr.push(wishlist[i].name)
//             }
//         }
//     }
//     return exitArr
// }





// function needYears(p0, percent, aug, p) {
//     let n = 0
//     while(p > p0) {
//         p0 = p0 + (p0*(percent*0.01)) + aug
//         n++
//     }
//     return n
// }





// function createPhoneNumber(number) {
//     arr1 = number.slice(0, -7)
//     arr2 = number.slice(3, -4)
//     arr3 = number.slice(6)
//     return(`(${arr1.join('')}) ${arr2.join('')}-${arr3.join('')}`)
// }

// let num = [[1,2,4,3,4,5,6,4,5,6,7],[1,2,3,4,1,7,6,3,4,3,5],[1,2,3,4,2,6,3,4,6,3,2]] //                       ВЕРНУТЬСЯ КАК БУДЕТ ВЫШЕ РЕЙТИНГ




// function saveNumbers(numbers) {
//     let arr = []
//     for(let i = 0; i < numbers.length; i++) {
//         let n = 0
//         console.log(`i = ${i}`)
//         console.log(`n = ${n}`)
//         for(let k = 0; k < numbers[i].length; k++) {
//             console.log(`k = ${k}`)
//             console.log(`n = ${n}`)
//             if (numbers[i][k] === numbers[i+n][k]) {
//             arr.push(numbers[i][k])
//             }
//             if(i+n >= numbers.length) {
//                 n = numbers.length
//             }
//         }
//     }
//     return arr
// }







// function bankPlans(f0, p, c0, n, i) {
//     cn = c0 
//     f0 = f0 - cn + ((f0*p)/100)
//     if(f0 < 0) {
//         return false
//     }
//     for (let k = 1; k < n-1; k++) {
//         if (f0 <= 0 ) {
//             break
//         }
//         c0 = c0 + Math.trunc(((c0*i)/100))
//         f0 = f0 + Math.trunc(((f0*p)/100)) - c0
//     }
//     return f0 >= 0
// }




// function checkIp(str) {
//     let ipPathArr = str.split('.')

//     if(ipPathArr.length < 4 || ipPathArr.length > 4) {
//         return false
//     }
//     for(let i = 0; i < ipPathArr.length; i++) {
//         let w = /^\d+$/.test(`${ipPathArr[i]}`)
//         if(ipPathArr[i] < 0 || ipPathArr[i] > 255 || (+ipPathArr[i][0] + +ipPathArr[i] == +ipPathArr[i] && ipPathArr[i].length > 1) || !w){
//             return false
//         }
//     }
//     return true
// }


// function carOnRoad(string) {
//     let arr = string.split('n')
//     return arr.length - 1 > 15 ? 'Car Dead' : 'Woohoo!'
// }


// function changeLatters(string) {
//     let arr = string.split('').map((item) => {
//         if (item === 'a') {
//             return 'b'
//         } else if (item === 'b') {
//             return 'a'
//         } else {
//             return 'c'
//         }
//     })
//     return arr.join('')
// }





// function checkNumber(string) {
//     let arr = string.split('')
//     if(arr.length > 14 && arr[0] !== '(' && arr[4] !== ')' && arr[5] !== '' && arr[9] !== '-') {
//         return false
//     }else {
//         return true
//     }
// }







// function whoLikes(arr) {
//     console.log(arr)
//     if(arr.length == 0) {
//         return 'no one be likes this'
//     } else if (arr.length == 1) {
//         return `${arr[0]} likes this`
//     } else if (arr.length == 2) {
//         return `${arr[0]} and ${arr[1]} like this`
//     } else if (arr.length == 3) { 
//         return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
//     } else {
//         return `${arr[0]}, ${arr[1]} and ${arr.length - 2} other like this`
//     }
// }



// function duplicate(string) {
//     let counterDuplicate = new Set()
//     let arr = string.toLowerCase().split('')
//     for (let i = 0; i < arr.length; i++) {
//         for (let k = 0; k < arr.length; k++) {
//             if (arr[i] === arr[k] && i !== k) {
//                 counterDuplicate.add(arr[i])
//             }
//         }
//     }

//     return counterDuplicate.size
// }



// let a = {
//     name: 'Petr',
//     age: 25,
    
//     getAge() {
//         console.log(this.age)
//     }
// }

// let b = Object(a)
// b.age = 28
// b.getAge()

// function getName() {
//     console.log(this.name) 
// }

// a.f = getName
// a.f()




// let values = ['Hare', 'Kristina', 'Hare', 'Kristina', 'Kristina', 'Kristina', 'Hare', 'Hare', ':-0']

// function toSet() {
//     return set = new Set(values)
// }

// let salaries = {
//     'Rustam': 60000,
//     'Semen': 45000,
//     'Ilnur': 150000
// }

// function sumSalaries(salaries) {
//     let arr = Object.values(salaries)
//     let sum = 0
//     for(item of arr) {
//         if (item) {
//             sum += item 
//         } else {
//             return 0
//         }
//     }
//     return sum
// }



// function seller(arr) {
//     let arr25 = []
//     let arr50 = []
//     if (arr[0] >= 50) {
//         return 'NO'
//     }
//     for (let i = 0; i < arr.length; i++) {
//         console.log('был тут')
//         if (arr[i] === 25) {
//             arr25.push[arr[i]]
//         }
//         if (arr[i] === 50 && arr.indexOf() !== -1) {
//             console.log('был тут')
//             arr25.pop()
//             arr50.push(arr[i])
//         } else {
//             return 'NO'
//         }
//     }
//     return 'YES'
// }





// const vaporwave = string => {
//     let arr = string.split('')
//     let newArr = []
//     for (let i = 0; i < arr.length; i ++) {
//         if (arr[i] === ' ') {
//             arr[i] = ''
//         } else if (arr.indexOf(arr[i]) === 0) {
//             arr[i] = `${arr[i].toUpperCase()} `
//         } else if (i === (arr.length - 2)) {
//             arr[i] = ` ${arr[i].toUpperCase()}`
//         } else {
//             arr[i] = ` ${arr[i].toUpperCase()} `
//         }
//         newArr.push(arr[i])
//     }
//     return newArr.join('')
// }







// const findNum = num => {
//     let newNum = toString(num)
//     log(newNum)

// }










// let calculator = {
//     a: null,
//     b: null,
//     sum() {
//          return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b
//     }
// }

// calculator.a = 10
// calculator.b = 15








// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this
//     },
//     down() {
//       this.step--;
//       return this
//     },
//     showStep: function() {
//       alert( this.step );
//       return this
//     }
//   };






// function Calculator() {
//   this.sum = function(a,b) {
//     return a + b
//   }
//   this.mult = function(a,b) {
//     return a * b
//   }
// }

// let a = new Calculator()






// function Accumulater(value) {
//   this.value = value
//   this.read = function() {
//     return this.value += +prompt()
//   }
// }

// let accumulator = new Accumulater(1)

// let users1 = {
//     1: 'Rustam',
//     2: 'Ilnur',
//     3: 'Semen',
//     4: 'Sanya',
//     5: 'Inessa',
// }


// let users2 = {
//     1: 'Rustam',
//     2: 'Ilnur',
//     3: 'Semen',
//     login: {
//         1: 'Ernie',
//         2: 'A1R',
//         login: {
//             1: 'Ernie',
//             2: 'A1R',
//             3: 'Polic',
//             4: 'Zven4ik',
//             5: 'Nessi',
//             login: {
//                 1: 'Ernie',
//                 2: 'A1R',
//                 login: {
//                     1: 'Ernie',
//                     2: 'A1R',
//                     3: 'Polic',
//                     4: 'Zven4ik',
//                     5: 'Nessi',
//                     login: {
//                         1: 'Ernie',
//                         2: 'A1R',
//                         3: 'Polic',
//                         4: 'Zven4ik',
//                         5: 'Nessi',
//                         login: {
//                             1: 'Ernie',
//                             2: 'A1R',
//                             3: 'Polic',
//                             4: 'Zven4ik',
//                             5: 'Nessi',
//                             login: {
//                                 1: 'Ernie',
//                                 2: 'A1R',
//                                 3: 'Polic',
//                                 4: 'Zven4ik',
//                                 5: 'Nessi',
//                             },
//                         },
//                     },
//                     login: {
//                         1: 'Ernie',
//                         2: 'A1R',
//                         3: 'Polic',
//                         4: 'Zven4ik',
//                         5: 'Nessi',
//                         login: {
//                             1: 'Ernie',
//                             2: 'A1R',
//                             3: 'Polic',
//                             4: 'Zven4ik',
//                             5: 'Nessi',
//                         },
//                     },
//                 },
//                 3: 'Polic',
//                 4: 'Zven4ik',
//                 5: 'Nessi',
//                 login: {
//                     1: 'Ernie',
//                     2: 'A1R',
//                     3: 'Polic',
//                     4: 'Zven4ik',
//                     5: 'Nessi',
//                 },
//             },
//         },
//         3: 'Polic',
//         4: 'Zven4ik',
//         5: 'Nessi',
//         login: {
//             1: 'Ernie',
//             2: 'A1R',
//             login: {
//                 1: 'Ernie',
//                 2: 'A1R',
//                 3: 'Polic',
//                 4: 'Zven4ik',
//                 5: 'Nessi',
//                 login: {
//                     1: 'Ernie',
//                     2: 'A1R',
//                     3: 'Polic',
//                     4: 'Zven4ik',
//                     5: 'Nessi',
//                     login: {
//                         1: 'Ernie',
//                         2: 'A1R',
//                         3: 'Polic',
//                         4: 'Zven4ik',
//                         5: 'Nessi',
//                     },
//                 },
//             },
//             3: 'Polic',
//             4: 'Zven4ik',
//             5: 'Nessi',
//             login: {
//                 1: 'Ernie',
//                 2: 'A1R',
//                 3: 'Polic',
//                 4: 'Zven4ik',
//                 5: 'Nessi',
//             },
//         },
//     },
//     4: 'Sanya',
//     5: 'Inessa',
// }

// let users3 = [
//     {
//         array: [1,2,3,4,5],
//         1: 'Rustam',
//         2: 'Ilnur',
//         3: 'Semen',
//         4: 'Sanya',
//         5: 'Inessa',
//         login: {
//             1: 'Ernie',
//             2: 'A1R',
//             3: 'Polic',
//             4: 'Zven4ik',
//             5: 'Nessi',
//         },
//     }
// ]

// const ul = document.querySelector('ul')

// function getLiFromObj() {
//     let users = {
//         1: 'Rustam',
//         2: 'Ilnur',
//         3: 'Semen',
//         login: {
//             1: 'Ernie',
//             2: 'A1R',
//             login: {
//                 1: 'Ernie',
//                 2: 'A1R',
//                 3: 'Polic',
//                 4: 'Zven4ik',
//                 5: 'Nessi',
//                 login: {
//                     1: 'Ernie',
//                     2: 'A1R',
//                     login: {
//                         1: 'Ernie',
//                         2: 'A1R',
//                         3: 'Polic',
//                         4: 'Zven4ik',
//                         5: 'Nessi',
//                         login: {
//                             1: 'Ernie',
//                             2: 'A1R',
//                             3: 'Polic',
//                             4: 'Zven4ik',
//                             5: 'Nessi',
//                             login: {
//                                 1: 'Ernie',
//                                 2: 'A1R',
//                                 3: 'Polic',
//                                 4: 'Zven4ik',
//                                 5: 'Nessi',
//                                 login: {
//                                     1: 'Ernie',
//                                     2: 'A1R',
//                                     3: 'Polic',
//                                     4: 'Zven4ik',
//                                     5: 'Nessi',
//                                 },
//                             },
//                         },
//                         login: {
//                             1: 'Ernie',
//                             2: 'A1R',
//                             3: 'Polic',
//                             4: 'Zven4ik',
//                             5: 'Nessi',
//                             login: {
//                                 1: 'Ernie',
//                                 2: 'A1R',
//                                 3: 'Polic',
//                                 4: 'Zven4ik',
//                                 5: 'Nessi',
//                             },
//                         },
//                     },
//                     3: 'Polic',
//                     4: 'Zven4ik',
//                     5: 'Nessi',
//                     login: {
//                         1: 'Ernie',
//                         2: 'A1R',
//                         3: 'Polic',
//                         4: 'Zven4ik',
//                         5: 'Nessi',
//                     },
//                 },
//             },
//             3: 'Polic',
//             4: 'Zven4ik',
//             5: 'Nessi',
//             login: {
//                 1: 'Ernie',
//                 2: 'A1R',
//                 login: {
//                     1: 'Ernie',
//                     2: 'A1R',
//                     3: 'Polic',
//                     4: 'Zven4ik',
//                     5: 'Nessi',
//                     login: {
//                         1: 'Ernie',
//                         2: 'A1R',
//                         3: 'Polic',
//                         4: 'Zven4ik',
//                         5: 'Nessi',
//                         login: {
//                             1: 'Ernie',
//                             2: 'A1R',
//                             3: 'Polic',
//                             4: 'Zven4ik',
//                             5: 'Nessi',
//                         },
//                     },
//                 },
//                 3: 'Polic',
//                 4: 'Zven4ik',
//                 5: 'Nessi',
//                 login: {
//                     1: 'Ernie',
//                     2: 'A1R',
//                     3: 'Polic',
//                     4: 'Zven4ik',
//                     5: 'Nessi',
//                 },
//             },
//         },
//         4: 'Sanya',
//         5: 'Inessa',
//     }

//     let arr = Array.from(Object.values(users))

//     for (item of arr) {
//         if(typeof item !== 'object') {
//             const li = document.createElement('li')

//             ul.append(li)

//             li.innerText = `${item}`
//         } else {
//             getLiFromObj(item)
//         }
//     }
// }




// class Pizza {
//     constructor(size, diameter, price) {
//         this.size = size
//         this.diameter = diameter
//         this.price = price
//     }
// }

// let pizza1 = new Pizza('small', 15, 10),
//     pizza2 = new Pizza('large', 35, 15),
//     pizza3 = new Pizza('medium', 25, 25),
//     pizza4 = new Pizza('small', 15, 1),
//     pizza5 = new Pizza('small', 15, 8),
//     pizza6 = new Pizza('large', 45, 45)
//     array = [pizza1,pizza2,pizza3,pizza4,pizza5,pizza6]

// let PizzaCalc = (array) => {
//     let largest
//     array.map((item) => {
//         item.squareOnPrice = item.price / (Math.PI * (item.diameter/2)**2)
//     })
//     let priceArr = []
//     for (let i = 0; i< array.length; i++) {
//         priceArr.push(array[i].squareOnPrice)
//     }
//     for (let k = 0; k< array.length; k++) { 
//         if (array[k].squareOnPrice = Math.max.apply(Math, priceArr)) {
//             largest = array[k]
//         }
//     }
//     return largest
// }
// console.log(PizzaCalc(array))

// const $btn = document.querySelector('.btn-add')
// const $btnDel = document.querySelector('.btn-del')
// const $ul = document.querySelector('ul')

// let clickCounter = 0
// function getData() {
//     fetch('https://jsonplaceholder.typicode.com/comments/')
//   .then(response => response.json())
//   .then(json => console.log(json))

// }

// function getLiWithData(json) {
//     if (clickCounter < json.length){
//         for (let i = 0; i < json.length; i++) {
//             if (i === clickCounter) {
//                 const $li = document.createElement('li')
//                 $ul.append($li)
//                 $li.innerText = `${json[i].address}`
//             }
//         }
//         clickCounter++
//     }
// }
// function removeLi() {
//     if(clickCounter !== 0) {
//         $ul.removeChild($ul.lastChild)
//         clickCounter--
//     }
// }

// $btn.addEventListener('click', () => getData())
// $btnDel.addEventListener('click', () => removeLi())