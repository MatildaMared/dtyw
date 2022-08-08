export function addStylesWhenModalIsOpen() {
	const scrollY = window.scrollY;
	const body = document.body;
	body.style.position = "fixed";
	body.style.paddingRight = "15px";
	body.style.top = `-${scrollY}px`;
}

export function removeStylesWhenModalIsClosed() {
	const body = document.body;
	const scrollY = body.style.top;
	body.style.position = "";
	body.style.paddingRight = "0";
	body.style.top = "";
	window.scrollTo(0, parseInt(scrollY || "0") * -1);
}
