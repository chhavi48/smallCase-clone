

let obj1={};
let arr1=[];
function log(a,b,obj1,arr1){
    obj1={
        "Logo":`https://assets.smallcase.com/smallcase/assets/brokerLogo/small/${a}`,
        "name":b
    }
    arr1.push(obj1);
}
let nameA=["Zerodha","Kotak","5paisa","Angel One","Groww","HDFC","ICICIdirect","Upstox"]
let arr=["kotak.svg","fivepaisa.svg","angelbroking.svg","groww.svg","hdfc.svg","icici.svg","upstox.svg","kite.svg"]
for(let i=0; i<arr.length; i++){
log(arr[i],nameA[i],obj1,arr1);


}


appendlogin(arr1);
let parent=document.getElementById("logo");
function appendlogin(arr1,parent){
     arr1.forEach((el)=>{
        let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=el.Logo;
    img.style.width="30px";
    let p=document.createElement("p");
       p.innerText=el.name;
       div.append(img,p);

       parent.append(div);
     })
    let p1=document.createElement("p");
    p1.innerText="+6";
    let p2=document.createElement("p");
    p2.innerText="More";
    p2.style.marginTop="-10px";
    let div1=document.createElement("div");
    div1.append(p1,p2);
    div1.style.color="blue";
    parent.append(div1);
}


//,"aliceblue.svg","axis.svg","edelweiss.svg","iifl.svg","motilal.svg"
export {log , appendlogin};