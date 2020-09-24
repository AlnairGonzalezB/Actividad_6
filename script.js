function changeImage(){
    foco = document.getElementById('foco');
    //alert(foco.src);
    if(foco.src.match('focoOff.png')){
        foco.src = "focoOn.png"
    }else{
        foco.src = "focoOff.png"
    }
}