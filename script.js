//your JS code here. If required.
const submitHandler = ()=>{
	let inputs = document.getElementsByTagName("input");
	alert("First Name: " + inputs[0].value
		   + "\nLast Name: " + inputs[1].value
		   + "\nPhone Number: " + inputs[2].value
		   + "\nEmail ID: " + inputs[3].value);
}