

 let joinButton= document.getElementById("addEmail");

	function myFun(){

		let addInput= document.getElementById("inputEmail");
		addInput.style.textTransform="upperCase";

}

function thX() {

    let show = document.getElementById("sjoin");
    show.className = "show";
    setTimeout(function () {
    show.className = show.className.replace("show", "");
    }, 2000);
}
