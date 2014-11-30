(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(Zepto);

$(document).ready(function() {
r = function() {
if($(window).width() >= 768) {
$('.img').attr('src', (window.devicePixelRatio > 1) ? 'images/logo_big-384.png' : 'images/logo_big-192.png');

$('.img-2').attr('src', (window.devicePixelRatio > 1) ? 'images/madewithsparkle-380.png' : 'images/madewithsparkle-190.png');
}
else if($(window).width() >= 320) {
$('.img').attr('src', (window.devicePixelRatio > 1) ? 'images/logo_big-294.png' : 'images/logo_big-147.png');

$('.img-2').attr('src', (window.devicePixelRatio > 1) ? 'images/madewithsparkle-126.png' : 'images/madewithsparkle-63.png');
}
};
$(window).resize(r);
r()
if(location.protocol === 'file:')
{
$("head").append($("<link rel='stylesheet' type='text/css' href='http://fonts.googleapis.com/css?family=Fira+Mono&subset=all'></link>"));
}
});