/*

*/
$(document).ready(function(e) {
						   
	 /* Form validate */
        validator = $("#requestForm").validate({
        rules: {
            	
            name:{ 
			required: true,
			lettersonly: true,maxlength:20 }, 			
            lastname: {
				 required: true,
                lettersonly: true,maxlength:20
            },                        
            phone: {
                required: true
            },
             msg:{ 
			required: true,		
			maxlength: 1000
			}     

        },
        messages: {
             name: {required:"Please enter your name",	
			lettersonly :"Please enter valid name.(Letters and spaces Only )",
			maxlength:"Please enter maximum 20 character"
			},
			lastname: {required:"Please enter your last name",	
			lettersonly :"Please enter valid last name.(Letters and spaces Only )",
			maxlength:"Please enter maximum 20 character"
			},
            email: {
                required: "Please enter an email address",
                email: "Please enter a valid email address"
            },
            phone: "Please enter a valid phone number",	
            msg: {required:"Please enter your Message" ,
			maxlength:"Please enter maximum 1000 character"
			}
        }
		
    });		
	$("#name").val('');
	$("#lastname").val('');
	$("#phone").val('');
	$("#msg").val('');

    /*Mobile menu*/
    $('.headerSec .mid').after(function() {
        return $('<div id="dedicated-mobile"><a class="trigger" href="#">Navigation<span></span></a></div>');
    });
    $('.menuBox ul').clone().attr('id', 'dedicated-mobilemenu').removeAttr('class').hide().appendTo('#dedicated-mobile');
    $('#dedicated-mobile a.trigger').addClass('close');
    $('#dedicated-mobile a.trigger').click(function(e) {
        e.preventDefault();
        $this = $(this);
        if ($this.hasClass('close')) {
            $this.removeClass('close').addClass('open');
            $this.parent().find('#dedicated-mobilemenu').slideDown();
        } else {
            $this.removeClass('open').addClass('close');
            $this.parent().find('#dedicated-mobilemenu').slideUp();
        }
    });
   
	 
    $(document).on("scroll", onScroll);
    //smoothscroll
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");
 
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function() {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('.headerSec').addClass("sticky");
        } else {
            $('.headerSec').removeClass("sticky");
        }
		
		if ($(this).scrollTop() > 300) {
            $('#toplink').addClass("show");
        } else {
            $('#toplink').removeClass("show");
        }
    });
	    $('#toplink').click(function(){
    $('html, body').animate({scrollTop:0}, 'slow');
    });
		
    
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop()+50;
    $('#dedicated-mobile a.trigger').removeClass('open').addClass('close');
    $('#dedicated-mobile ul#dedicated-mobilemenu').slideUp();
    $('.menuBox a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menuBox a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
	
}