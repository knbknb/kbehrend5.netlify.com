$(function(){
        var data = $.ajax({
                "url": "/don-deLillo--great-jones-street--fragments.txt",
                "type": "text"})
                .done(function() {
                $( "#motto" ).text("New text");
        });
});
