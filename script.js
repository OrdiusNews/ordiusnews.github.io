$(function() {
    $("*[import]").each(function() {
        if (!window.location.href.startsWith("file:///")) {
            var thisPassOn = this;

            $.ajax({
                url: $(this).attr("import"),
                error: function() {
                    $(thisPassOn).html("Could not load associated information.");
                }
            }).done(function(data) {
                $(thisPassOn).html(data);
            });
        } else {
            $(this).html("<em>Content will go here at run-time: " + $(this).attr("import") + "</em>");
        }
    });

    $("*[markdown]").each(function() {
        if (!window.location.href.startsWith("file:///")) {
            var thisPassOn = this;

            $.ajax({
                url: $(this).attr("markdown"),
                error: function() {
                    $(thisPassOn).html("Could not load associated information.");
                }
            }).done(function(data) {
                $(thisPassOn).html(new showdown.Converter().makeHtml(data));
            });
        } else {
            $(this).html("<em>Content will go here at run-time: " + $(this).attr("markdown") + "</em>");
        }
    });

    setInterval(function() {
        $("*[markdownrf]").each(function() {
            if (!window.location.href.startsWith("file:///")) {
                var thisPassOn = this;

                $.ajax({
                    url: $(this).attr("markdownrf"),
                    error: function() {
                        $(thisPassOn).html("Could not load associated information.");
                    }
                }).done(function(data) {
                    if ($(thisPassOn).html() != new showdown.Converter().makeHtml(data)) {
                        $(thisPassOn).html(new showdown.Converter().makeHtml(data));
                    }
                });
            } else {
                $(this).html("<em>Content will go here at run-time: " + $(this).attr("markdownrf") + "</em>");
            }
        });
    }, 1000);
});