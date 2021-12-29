

function getData() {
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => 
    res.json()
).then(json => {
    for(let i = 0 ;  i < json.length; i++){
        console.log(json[i].body)
        var li = document.createElement("LI");
        var val = document.createTextNode(json[i].body)
        li.appendChild(val)
        document.getElementById("ulist").appendChild(li)
    }
}
    
)
}