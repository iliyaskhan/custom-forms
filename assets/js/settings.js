(function( $, doc ) {
    "use strict";

    (function(){

        $(document).ready(function() {

            $(".forminator-select").select2({
                allowClear: false,
                minimumResultsForSearch: Infinity,
                containerCssClass: "forminator-select2",
                dropdownCssClass: "forminator-dropdown"
            });
            
        });

        $("#sp-settings-design").ready(function(){
            
            var $this = $(this),
                $radio = $this.find('input[type=radio][name=form-style]');

            $radio.change(function(){

                var $form = $('.forminator-custom-form'),
                    $select = $('.forminator-select');

                if (this.value === 'flat') {

                    $form.removeClass('forminator-design--bold');
                    $form.removeClass('forminator-design--material');
                    $form.addClass('forminator-design--flat');

                }

                if (this.value === 'bold') {

                    $form.removeClass('forminator-design--flat');
                    $form.removeClass('forminator-design--material');
                    $form.addClass('forminator-design--bold');

                }

                if (this.value === 'material') {

                    $form.removeClass('forminator-design--flat');
                    $form.removeClass('forminator-design--bold');
                    $form.addClass('forminator-design--material');
                    
                }

            });
            
        });

    }());

}( jQuery, document ));