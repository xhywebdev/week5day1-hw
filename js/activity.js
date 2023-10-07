$(document).ready(function () {
    $('td').not("td:first-child")
        .click(
            function () {
                if ($(this).css("background-color") == "rgba(0, 0, 0, 0)" && $(this).text() != "Not Available") {
                    $(this).css({ "background-color": "#9ed034" });
                    $(this).css({ "color": "white" });
                } else {
                    $(this).css({ "background-color": "rgba(0, 0, 0, 0)" });
                    $(this).css({ "color": "black" });
                }
            }
        )
        .mouseenter(function () {
            if ($(this).text() != "Not Available") {
                $(this).css({ "cursor": "pointer" });
            }
        })
});