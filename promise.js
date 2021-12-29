function getData(){
    let newData = new Promise((resolve, reject) => {
        let a = 4;
    
        if(a > 5){
            resolve("Ok")
        } else {
            reject("less than 5")
        }
    }).then( 
    (resolve) => {console.log(resolve)
    localStorage.setItem("resolve", resolve)
    },
    (reject) => {console.log(reject)
        sessionStorage.setItem("reject", reject)
    }
    )
}

function getTernary(){
    // let booleanValue = [];
    console.log(booleanValue[0]);
    booleanValue && booleanValue.length
    
    // booleanValue.length > 1 ? console.log("true") && booleanValue[0].a : console.log("false");
}

function getLocal(){
    console.log(sessionStorage.getItem('reject'));

}



