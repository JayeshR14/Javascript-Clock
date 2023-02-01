const second = document.getElementById('second');
const minute = document.getElementById('minute');
const hour = document.getElementById('hour');
const timer = document.getElementById('time');
function render()
{

  let secondi = 0;
  let minutei = 0;
  let houri = 0;
  
  let newSeconds = () =>
  {
    const d = new Date();
    secondi =  d.getSeconds(); 
    minutei =  d.getMinutes(); 
    houri =  d.getHours(); 
    milisecondi = d.getMilliseconds();
  
    
  }
  setInterval(()=>{
    newSeconds(); 
    
    if(secondi < 10 && houri < 10 && minutei<10){
    timer.innerHTML = `0${houri} : 0${minutei} : 0${secondi}`;
    }
    else if(secondi<10)
    {
      timer.innerHTML = `${houri} : ${minutei} : 0${secondi}`;
    }
    else if(minutei<10)
    {
      timer.innerHTML = `${houri} : 0${minutei} : ${secondi}`;
    }
    else if(houri<10)
    {
      timer.innerHTML = `0${houri} : ${minutei} : ${secondi}`;
    }
    else if(secondi<10 && minutei < 10)
    {
      timer.innerHTML = `${houri} : 0${minutei} : 0${secondi}`;
    }
    else if(secondi<10 && houri<10)
    {
      timer.innerHTML = `0${houri} : ${minutei} : 0${secondi}`;
    }
    else if(houri<10 && minutei<10)
    {
      timer.innerHTML = `0${houri} : 0${minutei} : ${secondi}`;
    }
    else{
      timer.innerHTML = `${houri} : ${minutei} : ${secondi}`;
    }

    secondi = secondi * 6                   
    second.style.rotate = secondi +"deg";

    minutei = minutei * 6;
    minute.style.rotate = minutei + `deg`;

    houri = houri * 30;
    hour.style.rotate = houri + `deg`;
  },1000);
}
render()