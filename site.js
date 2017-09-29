$("#button-1").on('click', show_one);
$("#button-2").on('click', show_two);
$("#button-3").on('click', show_three);

function show_three() {
    $("#button-2").removeClass("paper-raised");
    $("#button-2").addClass("paper-raise");
    $("#button-1").removeClass("paper-raised");
    $("#button-1").addClass("paper-raise");

    $("#button-3").removeClass("paper-raise");
    $("#button-3").addClass("paper-raised");

    $(".skills").fadeOut("slow");
    $(".education").fadeOut("slow");
    setTimeout(
        function () {
            $('.bar-container>*').removeClass('slide-it');
        }, 400);
    setTimeout(
        function () {
            $(".experience").fadeIn("slow");
        }, 600);
}

function show_one() {
    $("#button-2").removeClass("paper-raised");
    $("#button-2").addClass("paper-raise");
    $("#button-3").removeClass("paper-raised");
    $("#button-3").addClass("paper-raise");

    $("#button-1").removeClass("paper-raise");
    $("#button-1").addClass("paper-raised");

    $(".education").fadeOut("slow");
    $(".experience").fadeOut("slow");
    setTimeout(
        function () {
            $(".skills").fadeIn("slow");
        }, 600);
    $('.bar-container>*').addClass('slide-it');
}

function show_two() {
    $("#button-1").removeClass("paper-raised");
    $("#button-1").addClass("paper-raise");
    $("#button-3").removeClass("paper-raised");
    $("#button-3").addClass("paper-raise");

    $("#button-2").removeClass("paper-raise");
    $("#button-2").addClass("paper-raised");

    $(".experience").fadeOut("slow");
    $(".skills").fadeOut("slow");
    setTimeout(
        function () {
            $('.bar-container>*').removeClass('slide-it');
        }, 400);
    setTimeout(
        function () {
            $(".education").fadeIn("slow");
        }, 600);
}

$('.btn').click(function (e) {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        e.preventDefault();
        $(this).addClass('active');
    }
    filter();
})

function filter() {
    $('tr').addClass('hidden');

    var button1 = ($("#program-button"));

    if (button1.hasClass('active')) {
        $('.programming').each(function (i, obj) {
            $(this).removeClass('hidden');
        });
    }
    var button2 = ($("#math-button"));
    if (button2.hasClass('active')) {
        $('.mathematics').each(function (i, obj) {
            $(this).removeClass('hidden');
        });
    }
    var button3 = ($("#humanity-button"));
    if (button3.hasClass('active')) {
        $('.humanities').each(function (i, obj) {
            $(this).removeClass('hidden');
        });
    }
    if (!button1.hasClass('active') && !button2.hasClass('active') && !button3.hasClass('active')) {
        $('tr').each(function (i, obj) {
            $(this).removeClass('hidden');
        });
    }
}

$(document).ready(function () {
    var
        images = "#gallery > img" // image selector
        , interval = 6000           // milliseconds between transitions
        , index = 0                 // starting index
        , count = $(images).length  // image count
        // the transition loop
        , handle = setInterval(function () {
            // fade out the current image
            $(images + ":eq(" + index + ")").fadeOut(4000);
            // get the next index, or cycle back to 0
            if (++index === count) index = 0;
            // fade in the next image
            $(images + ":eq(" + index + ")").fadeIn(4000);
        }
            , interval
        )
        , stop = function () {
            clearInterval(handle);
        };
});

$(function () {

    // Initially hide toggleable content
    $("td[colspan=1]").find("p").hide();

    // Click handler on entire table
    $("table").click(function (event) {

        // No bubbling up
        event.stopPropagation();

        var $target = $(event.target);

        // Open and close the appropriate thing
        if ($target.closest("td").attr("colspan") > 1) {
            $target.slideUp();
        } else {
            $target.closest("tr").next().find("p").slideToggle();
        }
    });
});
// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
// $(window).on("load resize ", function () {
//     var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
//     $('.tbl-header').css({ 'padding-right': scrollWidth });
// }).resize();
