async function extra(){
    return `
    <div class="more-body">
        <button id="btnclose" data-dismiss="modal" class="close">&times;</button>
        <div>
            <p>Account</p>
            <a href="signup.html">Open Broker Account</a>
        </div>
        <div><p>Support</p>
          <a href="index.html" data-target="#mainRow">FAQs</a> <br><br> 
          <a id="chat1" href="">Chat with us</a>   
      </div>
      <div>
          <p>Company</p>
          <a href="">Blog</a>
          <div id="career"><a href="">
              Careers
          </a>
          <button id="hiring">Hiring</button>
          </div>
      </div>
      <div id="made">
          <img src="https://www.smallcase.com/static/images/smallcase-ecosystem-page/smallcase-logo.svg"/>
          <p>Made with ♥︎ in India</p>
      </div>
    </div>
  `;
}

export default extra;