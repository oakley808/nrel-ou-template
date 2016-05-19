$(document).ready(function(){

    // start off by hiding the panels
    $('.feedback-panel').each(function(){
        if( $(this).hasClass('hide') ) {
            $(this).hide().removeClass('hide');
        }
    });


    // Avoid `console` errors in browsers that lack a console.
    (function() {
        var method;
        var noop = function () {};
        var methods = [
            'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
            'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
            'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
            'timeStamp', 'trace', 'warn'
        ];
        var length  = methods.length;
        var console = (window.console = window.console || {});

        while (length--) {
            method = methods[length];

            // Only stub undefined methods.
            if (!console[method]) {
                console[method] = noop;
            }
        }
    }());


    /*
     * click handler
     * handle clicks on the form
     */
    $('#feedback .button-submit').on('click',function(){


        // set some hidden inputs on the form to pass to the handler
        var formname = $('#formName', $(this).parent() ).parent('form').attr('name');
        if (formname) {
          $('#buttonType').val( $(this).val() ); // this == the button pressed (y/n)
          $('#formName').val( formname );
          $('#url').val( document.location.href );
        }

        // prepare the data
        var formdata = $(this).parents('form');
        var $panel   = $(this).closest('.feedback-panel');

        // do the ajax post, then update the form
        submitData( formname, formdata, $panel );

        return false; // don't actually submit the form since we're ajaxing the data
    });


    /*
     * submitData()
     * post some data via ajax
     */
    var submitData = function(formname, formdata, $panel){

        var request = $.ajax({
            type: "POST"
          , data: formdata.serialize()
          , dataType: "json"
          , url:  "//" + location.host + "/server/feedback/dataservice.php"
        });


        request.always(function(a, textStatus, b) { // a and b are the same as in .done() or .fail() (depending on what happened)

            // hide the current panel
            $panel.hide().attr('aria-hidden','true');
        });


        request.done(function(result, textStatus, jqXHR) {
            var id;

            if( formname == 'feedback-primary-form' ) {
                id = result[0].id;
                $('#recordID').val(id);
            }

            // show the next panel
            $panel.next('.feedback-panel').fadeIn().attr('aria-hidden','false');

        });


        request.fail(function(jqXHR, textStatus, errorThrown) {

            // show the "oops" panel
            $('#feedback-fail').fadeIn().attr('aria-hidden','false');


            console.error("There was a problem with the post:\n\n %t", textStatus);
            console.warn( "Details\n" + errorThrown);

        });

    };
});