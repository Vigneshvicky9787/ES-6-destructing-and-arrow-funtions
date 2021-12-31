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
    age: 20
}
console.log(obj.email) /* it is a normal declartion*/

let {email,age,password,Name} = obj /* it is destrucring declaration*/
// if change the order it will show the same result. because the obj name and the variable name is also same it checks him 
// order dosen't matter 
console.log(Name)
console.log(password)
console.log(email)