function redirect(e,t) {
    $("#content").load(e);
    $('.navbutton').removeClass('active');
    $(t).addClass('active');
}