var productArr = [
    {
        picture  : "https://assets.smallcase.com/images/smallcases/160/SCTR_0006.png",
        name : "IT Tracker",
        description : "Companies to efficiently track and invest in the IT sector",
        minAmt :   80831 ,
        cagr : 27.34,
        votality : "Med. Votality",
        id  : 1 ,
        image:["/chart/1Y.png",
            "./chart/Screenshot 2022-03-31 114629.png",

        ]
    }

    // {
    //     picture  : "https://assets.smallcase.com/images/smallcases/160/SCNM_0014.png",
    //     name : "Digital Inclusion",
    //     description : "Companies spearheading and benefitting from the digital revolution in India",
    //     minAmt :   17432 ,
    //     cagr : 16.45,
    //     votality : "High Votality",
    //     id  : 2
    // }
]

    let firstDiv = document.getElementById('companyName')
    productArr.forEach((elem)=>{
        console.log(elem)
        let div = document.createElement('div')
        div.setAttribute("class","miniDiv")

        let imageDiv =  document.createElement('div')
        let image = document.createElement('img')
        image.src=elem.picture
        image.setAttribute("class","imageBox")
        imageDiv.append(image)

        let details = document.createElement('div')
        let name = document.createElement('h3')
        name.innerHTML=elem.name
        name.setAttribute('class','nameBox')
        let des = document.createElement('p')
        des.innerHTML = elem.description;
        des.setAttribute('class','desc')
        details.setAttribute('class','details')

        let rightBox = document.createElement('div')
        let head=document.createElement('div')
        head.innerText="6Y CAGR"
        head.setAttribute('class','heading')
        let val = document.createElement('div')
        val.innerHTML=elem.cagr + "%" ;
        val.setAttribute("class","greenPercentage")
        rightBox.append(head,val)

        let btn = document.createElement('button')
        btn.innerHTML=elem.votality;
        btn.setAttribute('class','votalityBtn')


        



        details.append(name,des)

        div.append(imageDiv,details,rightBox,btn)
        firstDiv.append(div)

        let amount = document.getElementById("amt");

        let price = document.createElement("p")
        price.innerHTML="₹"+" " +elem.minAmt;
        price.setAttribute('class','pri')

        amount.append(price) 
        

        
    })

    //showing differnet chart
    function button1(){
        let chart = document.getElementById('chart')
        chart.innerHTML=null;
        let image = document.createElement('img')
        image.src="./chart/Screenshot 2022-03-31 114629.png";
        chart.append(image);
    }


    function button2(){
        let chart = document.getElementById('chart')
        chart.innerHTML=null;
        let image = document.createElement('img')
        image.src="./chart/1Y.png";
        chart.append(image);
    }

    function button3(){
        let chart = document.getElementById('chart')
        chart.innerHTML=null;
        let image = document.createElement('img')
        image.src="./chart/3Y.png";
        chart.append(image);
    }

    function button4(){
        let chart = document.getElementById('chart')
        chart.innerHTML=null;
        let image = document.createElement('img')
        image.src="./chart/5Y.png";
        chart.append(image);
    }

    function button5(){
        let chart = document.getElementById('chart')
        chart.innerHTML=null;
        let image = document.createElement('img')
        image.src="./chart/LIVE.png";
        chart.append(image);
    }

    function button6(){
        let chart = document.getElementById('chart')
        chart.innerHTML=null;
        let image = document.createElement('img')
        image.src="./chart/MAX.png";
        chart.append(image);
    }

    function button7(){
        let chart = document.getElementById('chart')
        chart.innerHTML=null;
        let image = document.createElement('img')
        image.src="./chart/SIP.png";
        chart.append(image);
        
    }





    
    
        
    