function getInput(e){
    console.log('typed', e)
    // let a = document.getElementsByTagName()
    document.getElementById("btn").addEventListener("click", () => {
        document.getElementById("demo").innerHTML = e.target.value;
    })
  
}

