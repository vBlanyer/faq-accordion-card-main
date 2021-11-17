const dropListHeaders = document.querySelectorAll(".drop-list__header");
const dropListContents = document.querySelectorAll(".drop-list__content");

dropListHeaders.forEach(header => {
	header.addEventListener("click", ()=>{
		dropListContents.forEach(content => {
			if (!content.classList.contains("drop-list__content--close") && header.nextElementSibling.classList.contains("drop-list__content--close")) {
				content.classList.toggle("drop-list__content--close");
				content.previousElementSibling.firstElementChild.classList.remove("drop-list__tittle--dark");
			} 
		});
		header.firstElementChild.classList.toggle("drop-list__tittle--dark");
		header.nextElementSibling.classList.toggle("drop-list__content--close");
	});
});
