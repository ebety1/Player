class Color{
    constructor(){
        document.getElementById('color1').addEventListener('click',()=>{
            this.color_changer('color1')
        })
        document.getElementById('color2').addEventListener('click',()=>{
            this.color_changer('color2')
        })
        document.getElementById('color3').addEventListener('click',()=>{
            this.color_changer('color3')
        })
        if(localStorage.getItem('COLOR')){
            document.body.style.background = 'rgb(207, 83, 93)'
        }
    }
    color_changer(color){
        if(color == "color1"){
            document.body.style.background = 'rgb(207, 83, 93)'
        }else if(color == 'color2'){
             document.body.style.background = 'rgb(73, 189, 224)'
        }else if(color == 'color3'){
            document.body.style.background = 'rgb(22, 23, 24)'
        }
        localStorage.setItem('COLOR',color)
    }
    
}
onload = new Color()