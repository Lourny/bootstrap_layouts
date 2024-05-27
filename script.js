function rtcFuc(n){
    return n==1 ? 1 : n* rtcfunc(n-1);
}
  

function test(a,b,...args){
console.log(a);
console.log(b);
console.log("the args parameters here");
for(let i=0;i<args.length;i++){
    console.log(args[i]);
}
}

test(1,2,3,4,5,6,7,8,"test");

function test2(...args){
for( let i=0;i<args.length;i++){
    console.log(`the value of index ${i} == ${args[i]}`)
}
console.log(args);
}
a=[1,2,3,4,5,6,"hello mother fucker",7,"test"];
test2(...a);
function parent(firstname,lastname){
    console.log(`${firstname} ${lastname}`);
}

parent("masoud", "jalili");

function counter(){
    let counter=0;
    return{
        increase:function(){
            return counter++;
        },
        decrease:function(){
            return counter--;
        },
        getValue:function(){
            return counter;
        }
    }

}
let counter1=counter();
counter1.increase();
counter1.increase();
counter1.increase();
counter1.increase();
counter1.increase();
counter1.increase();
counter1.increase();
counter1.decrease();
counter1.decrease();
counter1.decrease();
counter1.decrease();
counter1.decrease();

let counter2=counter();
console.log(counter1.getValue());
counter2.increase();
counter2.increase();
counter2.increase();
counter2.increase();
counter2.increase();
counter2.increase();
counter2.increase();
counter2.increase();
counter2.increase();
counter2.increase();
counter2.increase();
counter2.increase();
counter2.increase();
counter2.increase();
counter2.increase();
counter2.increase();
+
console.log(counter2.getValue());