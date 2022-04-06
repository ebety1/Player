class Player{
    constructor(){
        this.audio = document.getElementById('audio');
        this.play_pause = document.getElementById('play_pause');
        this.name = document.getElementById('name')

        //  matter variables

        this.isWork;
        this.counter = 0

        // click on play
        this.play_pause.addEventListener('click',()=>{
            this.play();
        });
        

        // click on next or back

        this.names = ['Adrar','Wahran','Bchar','Om-bawaghi'];
        this.sources = ['https://adrar.ice.infomaniak.ch/01.aac','https://oran.ice.infomaniak.ch/31.aac','https://bechar.ice.infomaniak.ch/08.aac','https://bechar.ice.infomaniak.ch/08.aac'];

        document.getElementById('next').addEventListener('click',()=>{
            if(this.counter < this.sources.length-1){
                this.counter ++
                this.isWork = false
            }else if(this.counter > 0){
                this.counter = 0
                
            }
            localStorage.setItem('Save',this.counter)
            this.next_back()
        })
        document.getElementById('back').addEventListener('click',()=>{
            if(this.counter < this.sources.length-1){
                this.counter --;
                this.isWork = false
            }else if(this.counter > 0){
                this.counter = this.sources.length-1
            }
            localStorage.setItem('Save',this.counter)
            this.next_back()
        })


        this.next_back()
        
    }

    // end  constructor
    
    next_back(){
        if(localStorage.getItem('Save') != null){
            this.counter = localStorage.getItem('Save')
        }
        this.audio.src = this.sources[this.counter]
        this.name.innerHTML = this.names[this.counter]
        this.play();

    }

    // play

    play(){
        if(this.isWork == false){
            this.audio.play();
            this.play_pause.src = 'img/pause.png';
            this.isWork = true;
        }else{
            this.audio.pause();
            this.play_pause.src = 'img/play.png'
            this.isWork = false
        }
        
    }
}
onload = new Player()