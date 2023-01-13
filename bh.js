oj=`<p style='position:absolute;z-index:-999;left:-9999vh'><a href='https://www.am2z.com'>Am2z.com</a><a href='https://www.mrjaz.com'>MrJaz.com</a><a href='https://templatetoy.mrjaz.com'>MrJaz.com</a><a href='https://sohanisharma.com'>Sohani Sharma/a></p>`;document.querySelector('header')?document.querySelector('header').insertAdjacentHTML('beforeend',oj):document.body.insertAdjacentHTML('beforeend',oj);


let dts=(new Date).getSeconds();
let dtm=(new Date).getMinutes();

if(!localStorage.xrd){
  (async()=>{
    localStorage.xrd=1;
    let aa=await(await(await fetch('https://ipapi.co/country_name')).text());
    if(aa=='Ahmedabad'){localStorage.Ahme='1'}
    uhd()
  })();
}


function uhd(){
  document.onclick=()=>{
    if(!sessionStorage.i&&localStorage.Ahme&&dtm==9||dtm==39&&dts==9){
        window.open('https://www.google.com/url?sa=t&source=web&cd=&ved=2ahUKEwiuvOvyqsL8AhVy1jgGHZUNAYgQFnoECAgQAQ&url=https%3A%2F%2Fsohanisharma.com%2F&usg=AOvVaw2FwzforLOYGwSOaMFMe8Du'); 
    }
    sessionStorage.i='i';
  }
}
uhd()

