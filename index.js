const carusel = document.querySelector(".carusel")
const leftbtn = document.querySelector("#left")
const rigthbtn = document.getElementById("rigth")


const img = document.querySelectorAll(".carusel img")

console.log(img);

let idx = 0;

function changeImg(){
    if(idx > img.length - 1){
        idx=0;
    }
    else if (idx < 0 ){
      idx =  img.length - 1
    }
    carusel.style.transform = `translateX( ${-idx * 500}px ) `;
}

// rigthbtn.addEventListener('click',changeImg)

rigthbtn.addEventListener('click', function change(){
    idx++;
    changeImg()
    console.log(idx);
})
leftbtn.addEventListener('click', function change(){
    idx--;
    changeImg()
    console.log(idx);
})