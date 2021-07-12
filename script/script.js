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



