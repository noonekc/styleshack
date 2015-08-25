jQuery(function($){
    var CSS_OPENED_CLASS = ("opened");

    $('.filters ul.filter_controls > .mi').each(function() {
        var $con = $(this);
        var $trigger = $con.find('.filter_label');
        var $content = $con.find('.t2_menu');
        var $form = $con.parents('form');

        var CSS_OPENED_CLASS = 'opened';

        $trigger.on('click', function(evt) {
            $content.toggleClass(CSS_OPENED_CLASS);
        });

        $content.on('change', 'input[type=checkbox]', function(evt) {
            $form.submit();
        });

        $content.on('change', 'input[type=radio]', function(evt) {
            $form.submit();
        });
    });

    $('.sort-by').each(function(){
        var $trigger = $(this);
        var $active = $trigger.find(".active-filters > .tag");
        var $content = $trigger.find('.t2_menu');
        var $form = $trigger.parents('form');

        if ($active.length > 0) {
            $trigger.toggleClass(CSS_OPENED_CLASS);
            $content.toggleClass(CSS_OPENED_CLASS);
        }

        $trigger.on('click', function() {
            $trigger.toggleClass(CSS_OPENED_CLASS);
            $content.toggleClass(CSS_OPENED_CLASS);
        });

        $content.on('change', 'input[type=radio]', function(evt) {
            $form.submit();
        });
    });

});