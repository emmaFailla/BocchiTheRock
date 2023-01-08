//Duracion de las canciones
//Guitar, Loneliness and Blue planet : 229s
//Distortion : 100s 
//If i could be a constellation : 258s
//Never forget : 223s
//RockNRoll : 271s
//Karakara 264s
//ThatBand 213s
//What is wrong with : 227s



const main = document.querySelector('#main')
const pic = document.querySelector('.cover__container')
const songName = document.querySelector('.songName')
const bar = document.querySelector('.bar')
const click = new Audio('sfx/click.mp3')
const album = document.querySelector('.albumPlaylist__container')

//Botones
const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const previous = document.querySelector('.previousSong')
const next= document.querySelector('.nextSong')
const gear = document.querySelector('.gear')
//Botones
let position = 0
let mainColor = ['#743449','#841033','#0f466e',"#ffd478",'#743449','#841033','#0f466e',"#ffd478"]
let mainPic = ['Covers/1.jpg','Covers/2.png','Covers/7.png','Covers/8.webp','Covers/5.png','Covers/3.png','Covers/6.png','Covers/4.png']
let names = ["Guitar, Lonelinesss and Blue Planet","Distortion!!","That band","Never forget","Rockn roll, Morning Lights Fall on You","If i could be a constellation","Karakara", "What is wrong with"]


//Canciones
let guitarLoneliness = new Audio("Temas/Guitar, Loneliness and Blue Planet.mp3")
let thatBand = new Audio("Temas/that-band.mp3")
let hitoriBocchi = new Audio("Temas/hitoribocchi-tokyo.mp3")
let seisyunComplex = new Audio("Temas/seisyun-complex.mp3")
let distortion = new Audio("Temas/distortion.mp3")
let constellation = new Audio("Temas/if i could be a constellation.mp3")
let neverForget = new Audio("Temas/never-forget.mp3")
let rocknRoll = new Audio("Temas/Rockn' Roll, Morning Light Falls on You.mp3")
let karakara = new Audio("Temas/karakara.mp3")
let whatsWrong = new Audio("Temas/What is wrong with.mp3")
//Canciones

gear.addEventListener('click',()=>{
    click.play()
    album.classList.toggle('albumOff')
    album.classList.toggle('albumOn')
})

function showSong(){
      //Foto de la cancion
      pic.style.backgroundImage = `url(${mainPic[position]})`
      //Nombre de la cancion
      songName.innerHTML = names[position]
      //Color del fondo
      main.style.backgroundColor = mainColor[position]
      //Que numero de cancion esta sonando
      console.log("Showing song number " + (position + 1))
}
//Funciones
showSong()
//Funcion siguiente
function siguiente(){
    console.log("Estoy funcionando")
    click.play()
    position += 1
    if(position > 7) return position = 7;
    else{
        //GuitarLonelinessReset
        guitarLoneliness.currentTime = 0;
        guitarLoneliness.pause();
        //DistortionReset
        distortion.currentTime = 0;
        distortion.pause();
        //ConstellationReset
        constellation.currentTime = 0;
        constellation.pause();
        //NeverForgetReset
        neverForget.currentTime= 0;
        neverForget.pause();
        //RockNRollReset
        rocknRoll.currentTime = 0;
        rocknRoll.pause();
        //KarakaraReset
        karakara.currentTime = 0;
        karakara.pause();
        //ThatBandReset
        thatBand.currentTime= 0;
        thatBand.pause();
        //WhatIsWrongWithReset
        whatsWrong.currentTime = 0;
        whatsWrong.pause();


        if(playPause == true){
            play.classList.toggle("on");
            play.classList.toggle("off");
            pause.classList.toggle("on");
            pause.classList.toggle("off");
            playPause = false
            //Retiramos la respectiva animacion de carga
            bar.classList.remove("guitarLonelinessCharge")
            bar.classList.remove("distortionCharge")
            bar.classList.remove("constellationCharge")
            bar.classList.remove("neverForgetCharge")
            bar.classList.remove("rockNRollCharge")
            bar.classList.remove("karakaraCharge")
            bar.classList.remove("thatBandCharge")
            bar.classList.remove("whatsWrongCharge")
            //Retiramos la respectiva animacion de carga
            return showSong();
        }
        else if(playPause == false){
            bar.classList.remove("guitarLonelinessCharge")
            bar.classList.remove("distortionCharge")
            bar.classList.remove("constellationCharge")
            bar.classList.remove("neverForgetCharge")
            bar.classList.remove("rockNRollCharge")
            bar.classList.remove("karakaraCharge")
            bar.classList.remove("thatBandCharge")
            bar.classList.remove("whatsWrongCharge")

            //Retiramos la respectiva animacion de carga
            return showSong()
        }
        //Volvemos la barra al 0% 
        
        showSong();
    } 
}
//Funcion siguiente

//nextSong
next.addEventListener('click', siguiente)

//previousSong
previous.addEventListener('click',()=>{
    console.log("Estoy funcionando")
    click.play()
    position -= 1
    if(position < 0) return position = 0;

    else{
        guitarLoneliness.currentTime = 0;
        guitarLoneliness.pause();
        //DistortionReset
        distortion.currentTime = 0;
        distortion.pause();
        //ConstellationReset
        constellation.currentTime = 0;
        constellation.pause();
        //NeverForgetReset
        neverForget.currentTime= 0;
        neverForget.pause();
        //RockNRollReset
        rocknRoll.currentTime = 0;
        rocknRoll.pause();
        //KarakaraReset
        karakara.currentTime = 0;
        karakara.pause();
        //ThatBandReset
        thatBand.currentTime= 0;
        thatBand.pause();
        //WhatIsWrongWithReset
        whatsWrong.currentTime = 0;
        whatsWrong.pause();

        if(playPause == true){
            play.classList.toggle("on");
            play.classList.toggle("off");
            pause.classList.toggle("on");
            pause.classList.toggle("off");
            playPause = false
            //Retiramos la respectiva animacion de carga
            bar.classList.remove("guitarLonelinessCharge")
            bar.classList.remove("distortionCharge")
            bar.classList.remove("constellationCharge")
            bar.classList.remove("neverForgetCharge")
            bar.classList.remove("rockNRollCharge")
            bar.classList.remove("karakaraCharge")
            bar.classList.remove("thatBandCharge")
            bar.classList.remove("whatsWrongCharge")
            //Retiramos la respectiva animacion de carga
            return showSong();
        }
        else if(playPause == false){
            //Retiramos la respectiva animacion de carga
            bar.classList.remove("guitarLonelinessCharge")
            bar.classList.remove("distortionCharge")
            bar.classList.remove("constellationCharge")
            bar.classList.remove("neverForgetCharge")
            bar.classList.remove("rockNRollCharge")
            bar.classList.remove("karakaraCharge")
            bar.classList.remove("thatBandCharge")
            bar.classList.remove("whatsWrongCharge")
            //Retiramos la respectiva animacion de carga
            return showSong()
        }
        

        showSong();
    }   

   
})

//Cancion depende de la posicion

let playPause = false;

//Funcion de reproducir
function reproducir(){
    click.play()
    if (playPause == false){
        play.classList.toggle("on");
        play.classList.toggle("off");
        pause.classList.toggle("on");
        pause.classList.toggle("off");
        playPause = true;

        //Reproduccion de canciones
        //GuitarLoneliness
        if(position == 0){
            bar.classList.add('guitarLonelinessCharge')
            //Al darle de nuevo al play cancelamos el pause de la animacion
            bar.classList.remove('pausedAnimation')
            guitarLoneliness.play()
            let guitarLonelinessCount =   setInterval(()=>{
                console.log(guitarLoneliness.currentTime.toFixed(0))
                if(guitarLoneliness.currentTime.toFixed(0) == 229){
                    siguiente()
                    setTimeout(()=>{
                        clearInterval(guitarLonelinessCount)
                             reproducir()
                         },500) 
                }
            },1000)

            
            
        }
        //Distortion
        else if(position == 1){
            bar.classList.add('distortionCharge')
            //Al darle de nuevo al play cancelamos el pause de la animacion
            bar.classList.remove('pausedAnimation')
            distortion.play()
            //reproduccion automatica al finalizar
            let distortionCount =   setInterval(()=>{
                console.log(distortion.currentTime.toFixed(0))
                if(distortion.currentTime.toFixed(0) == 100){
                    siguiente()
                    setTimeout(()=>{
                        clearInterval(distortionCount)
                             reproducir()
                         },500) 
                }
            },1000)
            
            
        }
        //ThatBand
        else if(position == 2){
                bar.classList.add('thatBandCharge')
                //Al darle de nuevo al play cancelamos el pause de la animacion
                bar.classList.remove('pausedAnimation')
                thatBand.play()
                //reproduccion automatica al finalizar
                let thatBandCount =   setInterval(()=>{
                    console.log(thatBand.currentTime.toFixed(0))
                    if(thatBand.currentTime.toFixed(0) == 213){
                        siguiente()
                        setTimeout(()=>{
                            clearInterval(thatBandCount)
                                reproducir()
                            },500) 
                    }
                },1000)  
        }
        //Never Forget
        else if(position == 3){
            bar.classList.add('neverForgetCharge')
            //Al darle de nuevo al play cancelamos el pause de la animacion
            bar.classList.remove('pausedAnimation')
            neverForget.play() 
            //reproduccion automatica al finalizar
            let neverForgetCount =   setInterval(()=>{
                console.log(neverForget.currentTime.toFixed(0))
                if(neverForget.currentTime.toFixed(0) == 223){
                    siguiente()
                    setTimeout(()=>{
                        clearInterval(neverForgetCount)
                             reproducir()
                         },500) 
                }
            },1000)
             
        }
        //RockNRoll
        else if(position == 4){
                bar.classList.add('rockNRollCharge')
                //Al darle de nuevo al play cancelamos el pause de la animacion
                bar.classList.remove('pausedAnimation')
                rocknRoll.play()
                //reproduccion automatica al finalizar
                let rocknRollCount =   setInterval(()=>{
                    console.log(rocknRoll.currentTime.toFixed(0))
                    if(rocknRoll.currentTime.toFixed(0) == 271){
                        siguiente()
                        setTimeout(()=>{
                            clearInterval(rocknRollCount)
                                reproducir()
                            },500) 
                    }
                },1000)  
        }
        //Constellation
        else if(position == 5){
            bar.classList.add('constellationCharge')
            //Al darle de nuevo al play cancelamos el pause de la animacion
            bar.classList.remove('pausedAnimation')
            constellation.play() 
            //reproduccion automatica al finalizar
            let constellationCount =   setInterval(()=>{
                console.log(constellation.currentTime.toFixed(0))
                if(constellation.currentTime.toFixed(0) == 258){
                    siguiente()
                    setTimeout(()=>{
                        clearInterval(constellationCount)
                             reproducir()
                         },500) 
                }
            },1000) 
        }
        //Karakara
        else if(position == 6){
            bar.classList.add('karakaraCharge')
            //Al darle de nuevo al play cancelamos el pause de la animacion
            bar.classList.remove('pausedAnimation')
            karakara.play()
            //reproduccion automatica al finalizar
            let karakaraCount =   setInterval(()=>{
                console.log(karakara.currentTime.toFixed(0))
                if(karakara.currentTime.toFixed(0) == 264){
                    siguiente()
                    setTimeout(()=>{
                        clearInterval(karakaraCount)
                             reproducir()
                         },500) 
                }
            },1000)  
        }
        //WhatsWrong
        else if(position == 7){
            bar.classList.add('whatsWrongCharge')
            //Al darle de nuevo al play cancelamos el pause de la animacion
            bar.classList.remove('pausedAnimation')
            whatsWrong.play()  
        }
        

    }
}
//Funcion de reproducir

//Play
play.addEventListener('click',reproducir)
//Funcion de pausar
function pausa(){
    click.play()
    if (playPause == true){
        play.classList.toggle("on");
        play.classList.toggle("off");
        pause.classList.toggle("on");
        pause.classList.toggle("off");
        playPause = false;
        //Pause de todas las canciones
        bar.classList.add('pausedAnimation')
        guitarLoneliness.pause()
        distortion.pause()
        constellation.pause()
        thatBand.pause()
        karakara.pause()
        rocknRoll.pause()
        whatsWrong.pause()
        neverForget.pause()
    }
}
//Funcion de pausar

pause.addEventListener('click', pausa)



document.querySelector('.firstSong').addEventListener('click',()=>{
    pausa()
    bar.classList.remove("guitarLonelinessCharge")
            bar.classList.remove("distortionCharge")
            bar.classList.remove("constellationCharge")
            bar.classList.remove("neverForgetCharge")
            bar.classList.remove("rockNRollCharge")
            bar.classList.remove("karakaraCharge")
            bar.classList.remove("thatBandCharge")
            bar.classList.remove("whatsWrongCharge")
    position = 0 
    showSong()
    setTimeout(()=>{     
      reproducir()  
      },500)

})

document.querySelector('.secondSong').addEventListener('click',()=>{
    pausa()
    bar.classList.remove("guitarLonelinessCharge")
            bar.classList.remove("distortionCharge")
            bar.classList.remove("constellationCharge")
            bar.classList.remove("neverForgetCharge")
            bar.classList.remove("rockNRollCharge")
            bar.classList.remove("karakaraCharge")
            bar.classList.remove("thatBandCharge")
            bar.classList.remove("whatsWrongCharge")
    position = 1
    showSong()
    setTimeout(()=>{
      reproducir()  
      },500)

})

document.querySelector('.thirdSong').addEventListener('click',()=>{
    pausa()
    bar.classList.remove("guitarLonelinessCharge")
            bar.classList.remove("distortionCharge")
            bar.classList.remove("constellationCharge")
            bar.classList.remove("neverForgetCharge")
            bar.classList.remove("rockNRollCharge")
            bar.classList.remove("karakaraCharge")
            bar.classList.remove("thatBandCharge")
            bar.classList.remove("whatsWrongCharge")
    position = 2
    showSong()
    setTimeout(()=>{
      reproducir()  
      },500)

})
document.querySelector('.fourthSong').addEventListener('click',()=>{
    pausa()
    bar.classList.remove("guitarLonelinessCharge")
            bar.classList.remove("distortionCharge")
            bar.classList.remove("constellationCharge")
            bar.classList.remove("neverForgetCharge")
            bar.classList.remove("rockNRollCharge")
            bar.classList.remove("karakaraCharge")
            bar.classList.remove("thatBandCharge")
            bar.classList.remove("whatsWrongCharge")
    position = 3
    showSong()
    setTimeout(()=>{
      reproducir()  
      },500)

})
document.querySelector('.fifthSong').addEventListener('click',()=>{
    pausa()
    bar.classList.remove("guitarLonelinessCharge")
            bar.classList.remove("distortionCharge")
            bar.classList.remove("constellationCharge")
            bar.classList.remove("neverForgetCharge")
            bar.classList.remove("rockNRollCharge")
            bar.classList.remove("karakaraCharge")
            bar.classList.remove("thatBandCharge")
            bar.classList.remove("whatsWrongCharge")
    position = 4
    showSong()
    setTimeout(()=>{
      reproducir()  
      },500)

})
document.querySelector('.sixthSong').addEventListener('click',()=>{
    pausa()
    bar.classList.remove("guitarLonelinessCharge")
            bar.classList.remove("distortionCharge")
            bar.classList.remove("constellationCharge")
            bar.classList.remove("neverForgetCharge")
            bar.classList.remove("rockNRollCharge")
            bar.classList.remove("karakaraCharge")
            bar.classList.remove("thatBandCharge")
            bar.classList.remove("whatsWrongCharge")
    position = 5
    showSong()
    setTimeout(()=>{
      reproducir()  
      },500)

})
document.querySelector('.sevenSong').addEventListener('click',()=>{
    pausa()
    bar.classList.remove("guitarLonelinessCharge")
            bar.classList.remove("distortionCharge")
            bar.classList.remove("constellationCharge")
            bar.classList.remove("neverForgetCharge")
            bar.classList.remove("rockNRollCharge")
            bar.classList.remove("karakaraCharge")
            bar.classList.remove("thatBandCharge")
            bar.classList.remove("whatsWrongCharge")
    position = 6
    showSong()
    setTimeout(()=>{
    reproducir()  
    },500)
    

})
document.querySelector('.eightSong').addEventListener('click',()=>{
    pausa()
    bar.classList.remove("guitarLonelinessCharge")
            bar.classList.remove("distortionCharge")
            bar.classList.remove("constellationCharge")
            bar.classList.remove("neverForgetCharge")
            bar.classList.remove("rockNRollCharge")
            bar.classList.remove("karakaraCharge")
            bar.classList.remove("thatBandCharge")
            bar.classList.remove("whatsWrongCharge")
    position = 7
    showSong()
    setTimeout(()=>{
      reproducir()  
      },500)

})