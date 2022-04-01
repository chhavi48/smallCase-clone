// let data = [
//     {"img":"https://www.smallcase.com/static/pngs/awi_landing/back.png"}
// , {"img":"https://www.smallcase.com/static/pngs/brand-value/back.png"}
// ]

//localStorage.setItem("imageData",JSON.stringify(data));
const append=(data,slid)=>{
    let i=1;
    let divImage1=document.createElement("div");
    divImage1.setAttribute("id","divImage1");
    slide.innerHTML=null;
    //slid.style.backgroundImage="none";
     slid.style.backgroundImage=`url(${data[0].img})`;
     let image=document.createElement("img");
     image.src=data[0].couple;
     divImage1.append(image);
     
     slid.append(image);
   setInterval(()=>{

        if(i==data.length){
            i=0;
          
        }
        
        slide.innerHTML=null;
     //slid.style.backgroundImage="none";     
     slid.style.backgroundImage=`url(${data[i].img})`;
     //slid.style.backgroundImage=`url(${data[i].couple})`;
     let image=document.createElement("img");
     image.src=data[i].couple;
     
     divImage1.append(image);
     slid.append(image);
     i++;
    },3000);
}

export default append;