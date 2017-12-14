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

        /* $("#field-text-settings").ready(function(){

            var $this = $(this);

            var $required = $this.find('input[type=radio][name=text-required]'),
                $main = $this.find('input[type=radio][name=text-main-label]'),
                $field = $this.find('input[type=radio][name=text-field-label]'),
                $placeholder = $this.find('input[type=radio][name=text-field-placeholder]'),
                $description = $this.find('input[type=radio][name=text-field-description]'),
                $limit = $this.find('input[type=radio][name=text-field-limit]');

            var $form = $("#forminator-module-text"),
                $formField = $form.find('.forminator-field'),
                $fieldMain = $formField.find('.forminator-field--main'),
                $fieldLabel = $formField.find('.forminator-field--label');

            var $icon = '<div class="forminator-icon" aria-hidden="true"><span class="wpdui-icon wpdui-icon-asterisk"></span></div>';

            var $icon_full = '<div class="forminator-field--label">' +
                '<div class="forminator-icon" aria-hidden="true">' +
                    '<span class="wpdui-icon wpdui-icon-asterisk"></span>' +
                '</div>' +
            '</div>';

            $required.change(function(e){

                if (this.value === 'true') {
                    if ( $formField.find('.forminator-field--main:first-child').length ) {
                        $formField.find('.forminator-field--main:first-child').append( $icon );
                    }
                    if ( $formField.find('.forminator-field--label:first-child').length ) {
                        $formField.find('.forminator-field--label:first-child').append( $icon );
                    }
                    if ( ! $fieldMain.length && ! $fieldLabel.length ) {
                        $formField.prepend( $icon_full );
                    }
                }

                if (this.value === 'false') {
                    if ( $fieldMain.length && $fieldMain.find('label').length ) {
                        $fieldMain.find('.forminator-icon').remove();
                    }
                    if ( $fieldMain.length && ! $fieldMain.find('label').length ) {
                        $fieldMain.remove();
                    }
                    if ( $fieldLabel.length && $fieldLabel.find('.forminator-label--helper').length ) {
                        $fieldLabel.find('.forminator-icon').remove();
                    }
                    if ( $fieldLabel.length && ! $fieldLabel.find('.forminator-label--helper').length ) {
                        $fieldLabel.remove();
                    }
                }

                e.stopPropagation();

            });

            $main.change(function(e){

                var $mainLabel = '<label class="forminator-label--main">What is your favourite word?</label>';
                
                if (this.value === 'true') {
                    if ( $fieldMain.length ) {
                        alert('Container exitst');
                    } else {
                        alert('down');
                    }
                }

                if (this.value === 'false') {
                    if ( $fieldMain.find('.forminator-icon').length ) {
                        alert('cool');
                    } else {
                        $fieldMain.remove();
                        alert('down');
                    }
                }

                e.stopPropagation();

            });

        }); */

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