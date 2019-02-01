function getURLParameter(name) {
    return decodeURIComponent((new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null;
}

$(function() {
    if (getURLParameter("path") == null) {
        window.location.href = "404.html";
    } else {
        $(".articleContent").attr("markdownrf", getURLParameter("path"));
    }
});