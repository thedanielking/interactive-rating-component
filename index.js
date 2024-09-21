const formElement = document.querySelector("form");




function submit(){
    const container1 = document.querySelector(".container");

    const container2 = document.querySelector(".container_2");

    formElement.addEventListener("submit", e=>{
        e.preventDefault();
    
        container1.classList.add("hide");
        container2.classList.remove("hide");
 
    })
    
}


    const ratingNumber = document.querySelectorAll(".rating");

    const spanNumber = document.getElementById("ratingNum");

    ratingNumber.forEach(item =>
    item.addEventListener("click", e=>{
        spanNumber.textContent = item.textContent;

        submit();
    })
    )












