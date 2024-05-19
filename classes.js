// const student = {
//     fullname : "AbhiramAnish",
//     marks : 97,
//     printmarks() {
//         console.log("marks = ",this.marks); //this keyword refers/access to an object.!
//     }
// };

// prototype is an object called autumatically! (inherited to new objects);

// setting a prototype

// const employee={
//     calcrate(){
//         console.log(`the salary hike is 10%`);
//     }
// };

// const arjun ={
//     name : "Arjun TP",
//     salary : 45250,
//     calcrate(){
//         console.log(`the salary hike is 20%`);  // object>>prototypes
//     }
// };

// arjun.__proto__ = employee; // to set prototype 

// classes

// class ToyotaCar{
//     constructor(brand){
//         console.log(`Creating new object`);
//         this.brand=brand;
//         console.log(`new car added called ${brand}`);
//     }
//     start(){
//         console.log(`start`);
//     }
//     stop(){
//         console.log(`stop`);
//     }
// }

// let fortuner= new ToyotaCar("fortuner"); // object= new class    .... new invokes a constructor automatically
// // fortuner.SetBrand(`fortuner`);
// let lexus= new ToyotaCar("lexus");

// inheritance

// class Parent{
//     hello(){
//         console.log(`hello from parent`);
//     }
// }

// class child extends Parent{
//     hello(){
//         console.log(`hello from child`);
//     }
// }

// let obj = new child;   // important to make an obj to call or use a class


// class person{
//     constructor(branch){
//         this.branch=branch;
//     }
//     eat(){
//         console.log("eating");
//     }
//     sleep(){
//         console.log(`sleeping`);
//     }
// }

// class engineer extends person{
//     constructor(branch){
//         super(branch); // to invoke parent constructor
//         this.branch=branch;
//         console.log(`from ${branch}`);
//     }
//     work(){
//         console.log(`working on softwares`);
//     }
// }

// let abhiram = new engineer('Cse');

// super keyword is used to access parent methods


// practice 1
// let data ="Private"
//     class user{
//         constructor(name,email){
//             this.name=name;
//             this.email=email;
//             console.log(`name: ${name} \n email: ${email}`);
//         }
//         viewData(){
//            console.log(`data is ${data}`);
//         }
//     }


//     let student1 = new user('Abhiram',`abhiramanish2016@gamil.com`);
//     let student2 = new user('Abhirami',`abhiramianish2006@gamil.com`);

    // practice 2

    // class admin extends user{
    //     constructor(name,email){
    //         super(name,email);
    //     }

    //     editData(){
    //         data="Visible to all"
    //     }
    // }

    // let admin1 = new admin('Abhraham',`abhraham2006@gamil.com`);

//    error handling  try-catch
/* let a =10,b=5;

try{ 
    console.log(a/c);
}
catch(err){
    console.log(err);
} */