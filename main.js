function Showbtn(){
    document.getElementById("pass").type="text";
    document.getElementById("show").style.display="none";
    document.getElementById("hide").style.display="inline";
}
function Hidebtn(){
    document.getElementById("pass").type="password";
    document.getElementById("show").style.display="inline";
    document.getElementById("hide").style.display="none";
}

function show(){
    document.getElementById("pass1").type="text";
    document.getElementById("show1").style.display="none";
    document.getElementById("hide2").style.display="inline";
}
function hide(){
    document.getElementById("pass1").type="password";
    document.getElementById("show1").style.display="inline";
    document.getElementById("hide2").style.display="none";
}
function massage(){
    var pswd = document.getElementById('pass').value;
    var confrm =document.getElementById("pass1").value;

	if(pswd=="" || confrm==""){
		alert("please enter your password properly")
	} 
	else if(pswd==confrm){
		alert("Congratulation your match")
		
	} 
	else if(pswd!=confrm){
		alert("C your password did not match")
	} 
	else{
		alert("please enter your password properly")
	}
}

