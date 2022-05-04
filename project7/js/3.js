function addLi(number) {
    let n = number.toString();
    let li = '<li> <span class = "number">' +n + '</span> <span class = "blank"> </span> <span class = "del">Delete</span> </li>';
    $(".main>ui").append(li);
}

function Del(obj) {
    let li = obj.parent();
    li.nextAll().each(function() {
        let span = $(this).find(".number")
        let number = parseInt(span.text());
        span.html(number - 1);
    });
}

$(document).ready(function() {
    $(".main").on("click", ".del", function() {
        Del($(this));
        $(this).parent().remove();
    });

    $(".main").on("click", ".add", function() {
        let lastspan = $(".main").find("li").last().find(".number");
        let number = lastspan.length == 0 ? 0 : parseInt(lastspan.text());
        addLi(number + 1);
    });
});