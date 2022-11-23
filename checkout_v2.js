var styles=`
   
.poof {
background:#222;
display:flex;
border:none;
justify-content:center;
align-items:center;
position:relative;
cursor:pointer;
height:39px;
width:200px;
border-radius:7px;
color:#fff;
font-weight:600;
font-size:1.25px;

}


.poof_image {
max-height: 28px;
max-width: 28px;
margin-right: 6px;
}


.poof_text {
font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
font-size:14px;
font-weight:500;

}

.poof:hover{
opacity:.7;
}

.checkoutFrame
{
  position:absolute;
  top:0 !important;
  bottom:0 !important;
  left:0 !important;
  right:0 !important;
  z-index:-1;
}

`
var styleSheet=document.createElement("style")
styleSheet.type="text/css"
styleSheet.innerText=styles
document.head.appendChild(styleSheet)
var divElement=document.createElement("div");divElement.className="imagediv";divElement.innerHTML='<img class = poof_image src="https://www.poof.io/static/api/poof_checkout.svg">';var x=document.getElementById("poof");var divText=document.createElement("div");divText.className="poof_text";divText.innerHTML='Checkout';x.appendChild(divElement);x.appendChild(divText);const request=()=>{fetch("https://www.poof.io/api/v1/checkout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload),}).then((response)=>response.text()).then((data)=>{location.href=data;});}