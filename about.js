$(document).ready(function(){
    <!--Appends the VIP info one by one-->
    $.ajax({
        type: "get",
        url: "aboutVIP.json",
        dataType: "json",
        success: function(data) {
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("vip").append(
                        $("#name" + key.toString()).html(value.name) +
                        $("#department" + key.toString()).html(value.department) +
                        $("#desc" + key.toString()).html(value.desc) +
                        $("#image" + key.toString()).attr("src", value.image)
                    );
                });
            });
        }
    });
});