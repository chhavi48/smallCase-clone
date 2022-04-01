function login(){
    return `<button id="btnlogin" >x</button>
    <div id="containerL">
    
    <div id="list1">
        
      <div id="befor">
          <div>

          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <h3>How does this work?</h3>
      </div>
      <div >
          <ul>
              <li>
                  <img src="https://connect.smallca.se/assets/img/broker-login.svg" />
                  <div>
                    <h4>Broker Login</h4>
                    <div>Order is placed after you login with your broker and confirm it.</div>
                  </div>
                  
              </li><br>
              <li>
                <img src="https://connect.smallca.se/assets/img/funds.svg" />
                <div>
                    <h4>Funds for the order</h4>
                    <div>Funds for the order are used from your trading account.</div>
                </div>
                
            </li><br>
            <li>
                <img src="https://connect.smallca.se/assets/img/sucess.svg" />
                <div>
                    <h4>Transaction Success</h4>
                    <div>Stocks are credited to/ debited from your demat account.</div>
                </div>
                
            </li>
          </ul>
      </div>
      <div id="after">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
    </div>
    <div id="list2">
        <div id="trade">
            <img src="	https://assets.smallcase.com/images/gateway/partners/smallcase-website.png"/>
            <div>
               <p>Trade, track and manage investments on</p>
               <h1>  <span>smallcase</span></h1>
            </div>
            
        </div>
        <div>
            <h3>Login with your broker</h3>
        </div>
        <div id="logo">
            
        </div>
        <div>
            <div class="div1"></div>
            <div class="div2">Don’t have a broker account?</div>
            <div class="div1"></div>
        </div>
        <button onclick="window.location.href='signup.html'">Open an account online</button>
    </div>
</div>`;
}

export default login;