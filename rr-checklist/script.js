jQuery(document).ready(function($) {  
    $('.disabled').click(function () {
        $(this).each(function(){
            var classes = ['disabled','enabled','new','wish'];
            this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
        });
    });

    $( ".server" ).click(function() {
        $( ".japan, .global" ).toggle( "slow", function() {
        });
    });
});
