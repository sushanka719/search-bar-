const input = document.getElementById("searchInput");
let DOMnames = document.getElementsByClassName("name")


input.addEventListener( "keyup" , function (event) {
    let username = event.target.value.toLowerCase();
   
    for(let i = 0; i< DOMnames.length; i++) {
        const currentname = DOMnames[i].textContent.toLowerCase()
        if(currentname.includes(username)) {
            DOMnames[i].style.display = "block"
        } else {
            DOMnames[i].style.display = "none"
        }
    }
})
