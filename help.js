$(document).ready(function(){
    <!--For accordion-->
    $("#tabs").accordion({
        collapsible: true,
        heightStyle: "content"
    });

    <!--Will recieve the necesssary answers to question-->
    $.ajax({
        type: "get",
        url: "qna.json",
        dataType: "json",
        success: function(data) {
            $.each(data, function() {
                $.each(this, function(key, value) {
                        $("#a" + key.toString()).html(value.a);
                });
            });
        }
    });
});