let a = "Ma";
let d = a.split("");

let b = Math.ceil(Math.random() * (d.length-3));
let c = Math.ceil(d.length * Math.random());

if(d.length > 3){
  d.splice(b, 3)
}else if(d.length < 3){
    d.splice(c, 0, "a")
}
a = d.join("");
 
console.log(a);

let text = "Эльмира Аслан Мадина Адиль Тарбия Ильяс Аня Данияр Нияз Глеб";
let arr = text.split(" ");

arr.sort(function (a, b) {
    if(a.length > b.length){
        return -1;
    }else if(a.length > b.length){
        return 1
    }
})

text = arr.join(" ");

console.log(text);


let text2 = "Эльмира Аслан Мадина";
let array = text2.split(" "); 

array.sort(); 
for(let i = 0; i < array.length; i++){
    let result = 0
    result += array[i] + " "; 
}

text2 = array.join(" ")

console.log(text2);