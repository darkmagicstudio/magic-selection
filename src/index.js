let obj = document.querySelectorAll("[data-selection]");
obj.forEach((item) => {
  const sc = item.dataset.selectionColor;
  const stc = item.dataset.selectionTextColor;
  let style = document.createElement("style");
  style.textContent = `
/* Mouse Selection */
::selection {
	  background: ${sc};
		color: ${stc};
}
::-moz-selection { /* Code for Firefox Browsers Runing Not Running Version 62 or Higher */
  background: ${sc};
  color: ${stc};
}
`;
  document.head.appendChild(style);
});
