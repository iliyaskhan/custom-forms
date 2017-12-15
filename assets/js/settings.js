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

        $(".forminator-custom-form").ready(function(){

            var $this = $(this),
                $input = $this.find('.forminator-input');

            $input.focus(function(e){

                $(this).parent('.forminator-field').addClass('forminator-is_active');
                e.stopPropagation();

            }).blur(function(e){
                
                $(this).parent('.forminator-field').removeClass('forminator-is_active');
                e.stopPropagation();
                
            });

            $input.change(function(e){
                
                if ( $(this) !== "" ) {
                    $(this).parent('.forminator-field').addClass( "forminator-is_filled" );
                } else {
                    $(this).parent('.forminator-field').removeClass( "forminator-is_filled" );
                }
                
                e.stopPropagation();

            });

        });

    }());

}( jQuery, document ));