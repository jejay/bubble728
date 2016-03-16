function bubble728(txt, posX, posY, lat, lng) {
    var body = document.getElementsByTagName("body")[0];
    var bubble = document.createElement("div");
    bubble.setAttribute("style", "position: absolute; left: 0px; top:-100-px; z-index: 200;");
    var txtDiv = "<div style=\"font-size: 14px; font-weight: bold; color: white; background-color: darkorange; border-radius: 5px; padding: 10px;\">"+txt+"</div>";
    var tipDiv = "<div style=\""+(lng == 'w'? "text-align: right; " : "" )+"font-family: georgia; font-size: 32px; line-height: 32px; color: darkorange; padding: 0 12px; margin: -4px 0;\">"+(lat == 's'? "&#9650;" : "&#9660;")+"</div>";
    bubble.innerHTML = lat == 's'? tipDiv+txtDiv : txtDiv+tipDiv;
    body.appendChild(bubble);
    bubble.style.left = (lng == 'w'? 35+posX-bubble.offsetWidth : posX-20)+"px";
    bubble.style.top = (lat == 's'? posY : posY-bubble.offsetHeight)+"px";
    return {close: function(){ body.removeChild(bubble) }}
}