window.onload=function()
{
	document.getElementById("title").innerHTML=chrome.runtime.getManifest().name+"&nbsp;v"+chrome.runtime.getManifest().version;
};