// Выполняя сквозной перенос итоговых значений объекта/массива, можно соединить выражения деструктурирующего присваивания в цепочку:
let o = {a:1, b:2, c:3},
    p=[4,5,6],
    a,b,c,x,y,z;

({a}={b,c}=o);
[x,y]=[z]=p;
console.log(a,b,c);//1 2 3
console.log(x,y,z);//4 5 4
