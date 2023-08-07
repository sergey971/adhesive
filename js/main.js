const colDescs = document.querySelectorAll(".questions__col__desc");
const colBtns = document.querySelectorAll(".questions__col__btn");

function closeColDesc() {
    colDescs.forEach((colDesc)=>{
        colDesc.classList.add("none");
    })
}

closeColDesc(); 

colBtns.forEach(function (item, index) {
    item.addEventListener("click", function(){
        colDescs.forEach((element)=>{
            element.classList.add("none");
        })
        colDescs[index].classList.toggle('none');
    })
})
