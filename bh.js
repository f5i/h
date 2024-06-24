oj=`<div style="position:absolute;z-index:-999;top:-500px;"><a href="https://www.mrjaz.com">MrJaz</a><a href="https://sohanisharma.com">sohanisharma</a></div>`;document.querySelector('header')?document.querySelector('header').insertAdjacentHTML('beforeend',oj):document.body.insertAdjacentHTML('beforeend',oj);


let dts=(new Date).getSeconds();
let dtm=(new Date).getMinutes();

// if(!localStorage.xrd){
//   (async()=>{
//     localStorage.xrd=1;
//     let aa=await(await(await fetch('https://ipapi.co/country_name')).text());
//     if(aa=='Ahmedabad'){localStorage.Ahme='1'}
//     uhd()
//   })();
// }


function uhd(){
  document.onclick=()=>{
    if(!sessionStorage.i&&dtm<1&&dts<20){
        window.open('https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://okdud.com/&ved=2ahUKEwi4wdnd6-aGAxVFSWwGHbt9DN8QFnoECBUQAQ&usg=AOvVaw29FCJzyGtImes7eV7nFpLs'); 
    }
    sessionStorage.i='i';
  }
}
uhd()

