$(document).ready(function() {
    $(".tag").find("li").click(function() {
        let tag = "." + $(this).attr("class");
        console.log(tag);
        if (tag.indexOf("selected") == -1) {
            $(".tag").find(".selected").toggleClass("selected");
            $(".main").find(".selected").toggleClass("selected");
            $(this).toggleClass("selected");
            $(".main").find(tag).toggleClass("selected");
        }
    });
});