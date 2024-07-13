



const map1 = new Map();


map1.set(25,"Tuncay");
map1.set(42,"Enes")
map1.set(252,"Tuncay2");
map1.set(22,"Atilla")


// for(let [key,value] of map1){
//     console.log(key,value);
// }



// const keys = Array.from(map1.keys());

// keys.forEach (key => {
//     console.log(key,map1.get(key));
// })



//maptan array'e çevirme

const arrayeCevrilen = Array.from(map1);
console.log(arrayeCevrilen);




