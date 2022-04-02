const navbar=()=>{
    return `<div id="container">
    <div >
        <a href="index.html">
            <div id="home">
                <img src="https://www.smallcase.com/static/svgs/logo-full.svg"/>
            </div>
        </a>
     <a href="">
        <div>
            Discover
        </div>
     </a>
     <a href="">
        <div>
            Watchlist
        </div>
     </a>
     
    </div>
    <div id="main">
        <a href="">
            <div>For Bussiness</div>
        </a>
    
         <a id="moreclose" href="index.html" data-target="#more" data-toggle="modal">
            <div id="arrow">
                More
               <img src="https://cdn-icons.flaticon.com/png/512/2985/premium/2985150.png?token=exp=1648536135~hmac=f65c2cd62eac62ac4c984d312b7e5bc5"/>    
            </div>
        </a>
      
      <div>
      <a id="loginA" href="index.html" data-target="#logincontain" data-toggle="modal"> <button id="login" >Login</button></a>
      </div>
    </div>
</div>
`
}

export default navbar;

