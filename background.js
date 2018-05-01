chrome.webRequest.onHeadersReceived.addListener
(
	function(details)
	{
		var headers=details.responseHeaders;
		headers.push({name:"Access-Control-Allow-Origin",value:"http://*.inven.co.kr"});
		headers.push({name:"Access-Control-Allow-Credentials",value:"true"});
		return{responseHeaders:headers};
	},
	{
		urls:["http://*.inven.co.kr/*"]
	},
	["blocking","responseHeaders"]
);
var clicks = 0;
function increment()
{
	chrome.browserAction.setBadgeText({text: (++clicks).toString()});
}
chrome.browserAction.onClicked.addListener(increment);