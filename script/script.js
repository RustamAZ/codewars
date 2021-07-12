// function getTable(number) {
//     let table = '';

//     for (let i = 1; i <= 10; i++) {
//         table += `${i} * ${number} = ${i*number}${i < 10 ? '\n' : ''}`;
//     };

//     return table;
// };

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

