let cl=console.log;

const accHeading=[...document.querySelectorAll(".accHeading")];

const onHeadingclick=(eve)=>{
	accHeading.forEach(h=>h.classList.remove("active"));
	
	eve.target.classList.add("active");
}

accHeading.forEach((heading)=>{
	heading.addEventListener("click",onHeadingclick);
})