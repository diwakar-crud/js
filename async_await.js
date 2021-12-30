// async function getData() {
//     var y = await "hello"
//     console.log(y);
// }

// async function myDisplay() {
//     let myPromise = new Promise(function(resolve) {
//       setTimeout(function() {resolve("I love You !!");}, 3000);
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
//   }

async function myDisplay(){
    let myPromise = new Promise((resolve) => {
        // setTimeout(() => {
            resolve("I am here");
            // console.log(resolve("I am here"), "resolve");
        // }, 3000);
        })
        console.log(myPromise)
        document.getElementById("demo").innerHTML = await myPromise
}

// function fetchApi()
// {
//     let resp = fetch('https://api.spacexdata.com/v4/launches');
//     // let respData = resp.then( () => {})
//     console.log(resp.status);
//     console.log(resp.statusTexts)
// }

url = 'https://api.spacexdata.com/v4/launches';
// fetchApi()

// let resp = fetch('https://api.spacexdata.com/v4/launches');
//     // let respData = resp.then( () => {})
//     console.log(resp.status);
//     console.log(resp.statusTexts)



 /* status code can be accessed by 2 ways. one using 
 async function and deprecating json and getting status code*/

 /* json response status code*/
let resp = fetch(url);
// let response = resp.then(response => 
//     response.json().then(a=>
//     {
//         // console.log(response.status,response.statusText)
//         console.log(a[0])
//         for ( i of a)
//         {
//             console.log(i.date_local, i.name, i.failures,i.details)
//         }
//     }))


   
/*aysnc function code */
async function fetchText() {
    let response = await fetch(url);

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        let data = await response.text();
        console.log(data);
        // handle data
    }
}

fetchText();
  

console.log("test1");
// getData();
myDisplay();
console.log("test2");