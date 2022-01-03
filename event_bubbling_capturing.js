document.getElementById("parent").addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("parent")
})

document.getElementById("child").addEventListener("click", (e) => {
    e.stopPropagation();
        console.log("child")
})

document.getElementById("grandChild").addEventListener("click", (e) => {
    e.stopPropagation();
        console.log("grandChild");
})