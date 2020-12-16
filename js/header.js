const navBar = $('.top-header ul.nav-bar');
const topHeader = $('.top-header');
const regForm = $('#reg-form-container');





function dropdownContentShow() {
    console.log("make a fn to slide down dropdown-content when clicking the dropdown-btn in mobile mode");
}


$('document').ready(function() {
    console.log(document.lastModified);
    console.log(document.URL);
    console.log(document.body);
    console.log(document.inputEncoding);

    var dropdownContent = $('.top-header .dropdown .dropdown-content');
    //console.log(dropdownContent);

    if (window.innerWidth <= 425) {
        console.log('yeah');
        dropdownContent.removeClass('wide');
        dropdownContent.addClass('short');
    } else {
        dropdownContent.removeClass('short');
        dropdownContent.addClass('wide');
    }


    /*--- .top-header -----*/
    var topHeaderOffsetTop = topHeader.offset().top;

    $(window).scroll(function() {
        //console.log("scrolling" + window.pageYOffset + " " + topHeaderOffsetTop);
        if (window.pageYOffset > topHeaderOffsetTop) {
            //console.log("gone down");
            topHeader.addClass("sticky");
        } else {
            topHeader.removeClass("sticky");
        }
    });


    $(window).resize(function() {
        if (window.innerWidth <= 425) {
            dropdownContent.removeClass('wide');
            dropdownContent.addClass('short');
        } else {
            dropdownContentk.addClass('wide');
            dropdownContent.addClass('wide');

            /*------------------ navBar ---------------------------*/
            if (navBar.css("display") === "none") {
                navBar.show();
            }
        }
    });

    /*---- a.menu-btn ----*/

    $('.top-header a.menu-btn').click(function() {
        if (window.innerWidth <= 425) {
            //alert('djf');
            if (navBar.css("display") === "none") {
                //console.log("navBar display none to block");
                navBar.show();
            } else {
                //console.log("navBar display block to none");
                navBar.hide();
            }
        }
    });




    /*--------- #reg-form-container ---------*/
    $('.top-bar .direct-links #reg-link').click(function() {
        if (regForm.css("display") === "none") {
            regForm.show();
        }
    });
    $('#reg-form-container #closeRegForm-btn a').click(function() {
        if (regForm.css("display") === "block") {
            regForm.hide();
        }
    });
});