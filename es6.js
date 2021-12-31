console.log('hello')

// ------ array destructuring ------

let arr =[1, 2 ,3 ];

const [one, two, three, four] = arr;

console.log(two)

console.log(four)

console.log('------------------------------')

// ------ funtion destructuring -------

function getScores( ){
   return [10, 20];
}
 let [x, y, z] = getScores();

 console.log(x)
 console.log(y)
 console.log(z)

//  ------------------------------------------


const obj = {
    Name: 'vignesh',
    email: 'vicky5760rr@gmail.com',
    age: 20,
    password: 'hello'
}
console.log(obj.email) /* it is a normal declartion*/

const {email,age,password = "",Name} = obj /* it is destrucring declaration*/
// if change the order it will show the same result. because the obj name and the variable name is also same it checks him 
// order dosen't matter 
console.log(Name)
console.log(password)
console.log(email)


//-------------- desructrucring arrow functions------------

// function demoFunction(a,b){/* It's a normal traditonal funtion declaration */
//     return a+b
// }
// console.log(demoFunction(10,20))


let demoFunction = (x,y) => {/* This arrow funtion automatically have return value */
     return x+y
}
console.log(demoFunction(10,20))


// objects

const counter = {
    count: 2,
    next: () => {/* to fix this error use funtion or use object name */
  return ++(this.count);/*this keyword  work in arrow function refer to window */
}
}

console.log(counter.next());
console.log(counter.next());