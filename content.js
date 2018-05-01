var adClickAll=document.createElement("script");
adClickAll.src=chrome.extension.getURL("adClickAll.js");
adClickAll.onload=function()
{
	this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(adClickAll);