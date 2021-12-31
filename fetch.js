// function getData() {
//     fetch('https://jsonplaceholder.typicode.com/posts').then(res => 
//     res.json()
// ).then(json => {
//     for(let i = 0 ;  i < json.length; i++){
//         console.log(json[i].body)
//         var li = document.createElement("LI");
//         var val = document.createTextNode("hello")
//         li.appendChild(val)
//         document.
//         document.getElementById("ulist").innerHTML = ''
//     }
// }
    
// )
// }

// let a = document.getElementById("demo").getElementsByTagName("P")
// console.log(a[0].innerHTML);

// a[0].style.backgroundColor = 'blue'



// function getData(){
//     let b = document.getElementsByClassName("para");
//     b[0].style.backgroundColor= 'red';
//     a[0].innerHTML="red test"
//     let c = document.getElementById("span").childElementCount
//     console.log(c)

//     // let newli = document.createElement("LI")
//     // let vari = document.createTextNode("hello I am Text")
//     // newli.appendChild(vari)
//     // document.getElementById("ulist").appendChild(newli)

//     let d = document.getElementById("myList")
//     console.log(d);
//     if(d.hasChildNodes()){
//         d.removeChild(d.childNodes[0])
//     }

// }

function changeColor(){
    let e = document.getElementsByTagName("H1")[0]
    let atb = document.createAttribute("class");
    atb.value='red'
    e.setAttributeNode(atb)
    // console.log(e);
}

