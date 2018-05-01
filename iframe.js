var domain=document.createElement("script");
domain.src=chrome.extension.getURL("domain.js");
domain.onload=function()
{
	this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(domain);