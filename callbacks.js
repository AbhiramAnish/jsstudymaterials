// async wait>>promise chain>>callback hell

//synchronus and async(paralell execution)

// console.log("one");
// console.log("two");
// function hello(){
//     console.log("hello");
// }

// setTimeout(hello,2000)  //2 sec

// console.log("three");
// console.log("four");

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }

// setTimeout(()=>calculator(1,2,sum),2000); // calculator(1, 2, sum) is being executed immediately and its return value (which is undefined since calculator does not return anything) is passed to setTimeout. Therefore, setTimeout is effectively being called as setTimeout(undefined, 4000) 
                                            //  To correctly delay the execution of the calculator function, you should pass a function reference to setTimeout

// callback hell is a situation in which we have *nested* callbacks also called pyramid of doom

// function getData(dataId,getNextData){
//    setTimeout(()=>{
//     console.log("data-",dataId);
//     if(getNextData){
//         getNextData();
//        }
//    },2000)
// }

// // callback hell

// getData(1, ()=>{
//     console.log("Getting data 2-----");
//     getData(2,()=>{
//         console.log("Getting data 3-----");
//         getData(3,()=>{
//             console.log("Getting data 4-----");
//             getData(4);
//             });
//         });
//     });
// getData(2);
// getData(3);

// promises are used for eventual completion of tasks,it is a solution to callback hell
// 3 states pending,resolved,rejected

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     // resolve(123);
//     reject("I am a rejected promise");
// })

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     console.log("data-",dataId);
//     if(getNextData){
//         getNextData();
//        }
//        resolve("sucess");
//    },2000)
// });
// }

// to use promises there are two methods then() and catch()


// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{ // always return
//     console.log("I am a promise");
//     resolve(123);
//     // reject("network error");
//     })
// }

// let promise =getPromise();
// promise.then((res)=>{ // res is automatically called same as with err
//     console.log("resolved",res);
// })
// promise.catch((err)=>{
//     console.log("rejected",err);
// })

// promise chaining

// function syncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("sucess");
//         },3000);
//     });
// }

// function syncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("sucess");
//         },3000);
//     });
// }

// let p1 = syncFunc1();
// console.log("fetching data-----")
// p1.then((res)=>{
//     let p2 = syncFunc2();
//     console.log("fetching data-----");
//     p2.then((res)=>{
//     console.log(res);
//     })
// })

// 

// async-Await

// async function always returns a promise and await pauses the execution of its surrounding async funtions until the promise is settled
// await is used inside async funtions only

// function api(val){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data ",val);
//             resolve();
//         },2000)
       
//     })
// }
// async function getWeatherData(){
//     await api(1);
//     await api(2);
// }

// async function hello(){
//     console.log("Hello");
// }

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     console.log("data-",dataId);
//        resolve("sucess");
//    },2000)
// });
// };

// async function start(){
//     console.log("Fetching data 1-----");
//     await getData(1);
//     console.log("Fetching data 2-----");
//     await getData(2);
//     console.log("Fetching data 3-----");
//     await getData(3);
// }

// IIFE - Immediately Invoked Function Expression is a function that is called immediately as soon as it is defined
// example    it can be called only one time
/*syntax - (function(){
               ------- 
            })();  */

function getData(dataId){
    return new Promise((resolve,reject)=>{
   setTimeout(()=>{
    console.log("data-",dataId);
       resolve("sucess");
   },2000)
});
};

(async function(){
    console.log("Fetching data 1-----");
    await getData(1);
    console.log("Fetching data 2-----");
    await getData(2);
    console.log("Fetching data 3-----");
    await getData(3);
})();