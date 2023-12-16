const btn = document.getElementById('button')
const para = document.getElementById('iam')

btn.addEventListener("click", () => {
	// para.style.opacity == 0 ? para.style.opacity = 1 : para.style.opacity = 0
	para.style.opacity = 1 - para.style.opacity
})