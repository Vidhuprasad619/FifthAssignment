
let i=0;
let newImage = document.getElementById("imageFrame");

function image(){
    i +=1;
    if(i===1){
        newImage.src = "images/11268502654_f28f05966c_m.jpg";
    }
    if(i===2){
        newImage.src = "images/45336904_1aef569b30_n.jpg";
    }
    if(i===3){
        newImage.src = "images/5384592886_80a512e2c9.jpg";
        i=0;
    }
}