const arr: number[] = [55, 44, 55, 67, 67, 67, 67, 8, 8, 8, 8, 8, 65, 1, 2, 3, 3, 34, 5]

const jedinstveni = new Set (arr)
const bezDuplikata: number[] = Array.from(jedinstveni)

console.log(bezDuplikata)
console.log(bezDuplikata.length)

for (const broj of jedinstveni){
    let brojac = 0
    for (const el of arr){
        if (el === broj){
            brojac ++ 
        }
    }
    console.log(`${broj} se pojavljuje ${brojac} puta`)
}