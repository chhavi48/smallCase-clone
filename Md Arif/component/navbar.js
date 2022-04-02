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
     <a href="whatchListAdd.html">
        <div>
            Watchlist
        </div>
     </a>
     
    </div>
    <div id="main">
        <a href="test.html">
            <div>For Bussiness</div>
        </a>
    
         <a id="moreclose" href="index.html" data-target="#more" data-toggle="modal">
            <div id="arrow">
                More
               
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

