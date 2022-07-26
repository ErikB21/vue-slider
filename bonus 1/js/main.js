const travel = new Vue({//applico una casa Vue da collegare con il tag prescelto
    el: '#travel',
    data: {
        slide: 0,//il mio contatore che mi servirà da riferimento per manipolare il DOM
        images: [
            {
                url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
                title: 'Svezia',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
            },
        
            {
                url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
                title: 'Perù',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
            },
        
            {
                url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
                title: 'Chile',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
            },
            {
                url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
                title: 'Argentina',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
            },
            {
                url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
                title: 'Colombia',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
            },
        ],
        //definisco delle chiavi utili a impostare un setInterval sià per la foto principale, sia per le foto sotto
        //in modo che al cambiare della foto principale, cambi anche quella sotto.
        timer: null,
        currentIndex: 0
    },

    //richiamo il mio setInterval
    mounted: function() {
        this.startSlide();
    },

    methods:{ 

        setSlide(indice){
            this.slide = indice;
        },
        //funzione che mi permette di impostare un timer alle mie slide
        startSlide: function() {
            this.timer = setInterval(this.next, 4000);
        },
        
        //gestisco i pulsanti per scorrere in avanti o indietro il carosello
        next(){
            if(this.slide == (this.images.length - 1)){
                this.slide = 0;
            }else{
                this.slide++;
            }
        },

        prev(){
            if(this.slide == 0){
                this.slide = this.images.length - 1;
            }else{
                this.slide--;
            }
        }
    }
});