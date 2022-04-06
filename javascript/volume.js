class Volum{
    constructor(){
        this.audio = document.getElementById('audio')
        this.audio.volume = 50/100
        this.range_volume = document.getElementById('range_volume')
        this.range_volume.addEventListener('change',()=>{
            this.audio.volume = this.range_volume.value/100
        })
        this.range_speed = document.getElementById('range_speed');
        this.range_speed.playbackRate = 1;
        this.range_speed.addEventListener('change',()=>{
            this.audio.playbackRate = this.range_speed.value/100
        })

    }
}
onload = new Volum()