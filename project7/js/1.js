
$(init)
let imgs;
let centerimg;
function init(){
    imgs = $(".m-img").children();
    imgs.bind("click",clickfunc);
    centerimg = $("#center");
    centerimg.hide();
}
function clickfunc(e){
    centerimg.attr("src",e.target.src).fadeIn();
    imgs.unbind().bind("click",back);
}
function back(){
    centerimg.fadeOut();
    imgs.unbind().bind("click",clickfunc);
}