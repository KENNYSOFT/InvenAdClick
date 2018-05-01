var a=document.createElement("a");
a.setAttribute("href","javascript:adClickAll();");
a.innerHTML="광클";
var li=document.createElement("li");
li.className="storage";
li.appendChild(a);
document.getElementsByClassName("userMenu")[0].appendChild(li);
function adClick(href)
{
	console.log(href);
	var xhr=new XMLHttpRequest();
	xhr.open("GET",href,true);
	xhr.withCredentials=true;
	xhr.send();
}
function adClickAll()
{
	var iframes=document.getElementsByTagName("iframe");
	var cnt=0;
	for(var i=0;i<iframes.length;++i)
	{
		var as=(iframes[i].contentDocument||iframes[i].contentWindow.document).getElementsByTagName("a");
		for(var j=0;j<as.length;++j)
		{
			if(as[j].href.startsWith("http://adn.inven.co.kr/click?ads="))
			{
				adClick(as[j].href);
				cnt++;
			}
		}
	}
	var areas=document.getElementsByTagName("area");
	for(var i=0;i<areas.length;++i)
	{
		if(areas[i].href.startsWith("http://adn.inven.co.kr/click?ads="))
		{
			adClick(areas[i].href);
			cnt++;
		}
	}
	var topsky=document.getElementById("comAdTopSky").contentWindow._v_clickthru;
	if(topsky!==undefined)
	{
		adClick(topsky);
		cnt++;
	}
	alert("광고 "+cnt+"개 클릭 완료");
	//chrome.browserAction.setBadgeText({text:""+cnt});
}
//setTimeout(adClickAll,1000);