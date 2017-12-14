(function( $, doc ) {
    "use strict";

    (function(){

        var $form = $("#forminator-module-text"),
            $formField = $form.find('.forminator-field');

        var $icon = '<div class="forminator-icon" aria-hidden="true"><span class="wpdui-icon wpdui-icon-asterisk"></span></div>';

        var $icon_full = '<div class="forminator-field--label">' +
            '<div class="forminator-icon" aria-hidden="true">' +
                '<span class="wpdui-icon wpdui-icon-asterisk"></span>' +
            '</div>' +
        '</div>';

        /*$("input[type=radio][name=text-required]").on('change', function(e){
            
            if (this.value === 'true') {
                if ( $formField.find('.forminator-field--main:first-child').length ) {
                    $formField.find('.forminator-field--main:first-child').append( $icon );
                }
                if ( $formField.find('.forminator-field--label:first-child').length ) {
                    $formField.find('.forminator-field--label:first-child').append( $icon );
                }
                if ( ! $formField.find('.forminator-field--main').length && ! $formField.find('.forminator-field--label').length ) {
                    $formField.prepend( $icon_full );
                }
            }

            if (this.value === 'false') {
                if ( $formField.find('.forminator-field--main').length && $formField.find('.forminator-field--main label').length ) {
                    $formField.find('.forminator-field--main .forminator-icon').remove();
                }
                if ( $formField.find('.forminator-field--main').length && ! $formField.find('.forminator-field--main label').length ) {
                    $formField.find('.forminator-field--main').remove();
                }
                if ( $formField.find('.forminator-field--label').length && $formField.find('.forminator-field--label label').length ) {
                    $formField.find('.forminator-field--label .forminator-icon').remove();
                }
                if ( $formField.find('.forminator-field--label').length && ! $formField.find('.forminator-field--label label').length ) {
                    $formField.find('.forminator-field--label').remove();
                }
            }

            e.stopPropagation();

        });*/

        $("input[type=radio][name=text-field-type]").on('change', function(e){
            
            if (this.value === 'text') {

                if ( $formField.find( '.forminator-textarea' )[0].hasAttribute('placeholder') ) {
                    $formField.find('.forminator-textarea').replaceWith('<input type="text" class="forminator-input" placeholder="eg. Red" />');
                } else {
                    $formField.find('.forminator-textarea').replaceWith('<input type="text" class="forminator-input" />');
                }

            }

            if (this.value === 'textarea') {

                if ( $formField.find( '.forminator-input' )[0].hasAttribute('placeholder') ) {
                    $formField.find('.forminator-input').replaceWith('<textarea class="forminator-textarea" placeholder="eg. Red"></textarea>');
                } else {
                    $formField.find('.forminator-input').replaceWith('<textarea class="forminator-textarea"></textarea>');
                }
                
            }

            e.stopPropagation();

        });

        $("input[type=radio][name=text-main-label]").on('change', function(e){
            
            if (this.value === 'true') {
                
                if ( $formField.find( '.forminator-field--main' ).length ) {
                    
                    $formField.find( '.forminator-field--main' ).prepend( '<label class="forminator-label--main">What is your favourite word?</label>' );
                    
                } else {

                    $formField.prepend( '<div class="forminator-field--main"><label class="forminator-label--main">What is your favourite word?</label></div>' );

                }

            }

            if (this.value === 'false') {

                $formField.find( '.forminator-field--main' ).remove();

            }

            e.stopPropagation();

        });

        $("input[type=radio][name=text-field-label]").on('change', function(e){
            
            if (this.value === 'true') {

                if ( $formField.find( '.forminator-field--main' ).length ) {
                    
                    $formField.find( '.forminator-field--main' ).after( '<div class="forminator-field--label"><label class="forminator-label--helper">Tell us, don\'t be shy</label></div>' );

                } else {

                    $formField.prepend( '<div class="forminator-field--label"><label class="forminator-label--helper">Tell us, don\'t be shy</label></div>' );

                }

            }

            if (this.value === 'false') {

                $formField.find( '.forminator-field--label' ).remove();
                
            }

            e.stopPropagation();

        });

        $("input[type=radio][name=text-field-placeholder]").on('change', function(e){
            
            if (this.value === 'true') {
                $formField.find('.forminator-input').attr('placeholder', 'eg. Red');
                $formField.find('.forminator-textarea').attr('placeholder', 'eg. Red');
            }

            if (this.value === 'false') {
                $formField.find('.forminator-input').removeAttr('placeholder');
                $formField.find('.forminator-textarea').removeAttr('placeholder');
            }

            e.stopPropagation();

        });

        $("input[type=radio][name=text-field-description]").on('change', function(e){
            
            if (this.value === 'true') {

                if ( $formField.find( '.forminator-field--helper' ).length ) {
                    $formField.find( '.forminator-field--helper' ).prepend( '<label class="forminator-label--helper">We will not sell this information, promise.</label>' );
                } else {
                    $formField.find( '.forminator-input' ).after( '<div class="forminator-field--helper"><label class="forminator-label--helper">We will not sell this information, promise.</label></div>' );
                }
                
            }

            if (this.value === 'false') {

                if ( $formField.find('.forminator-field--helper .forminator-label--limit').length ) {
                    $formField.find( '.forminator-field--helper .forminator-label--helper' ).remove();
                } else {
                    $formField.find('.forminator-field--helper').remove();
                }
                
            }

            e.stopPropagation();

        });

        $("input[type=radio][name=text-field-limit]").on('change', function(e){
            
            if (this.value === 'true') {

                if ( $formField.find( '.forminator-field--helper' ).length ) {
                    $formField.find( '.forminator-field--helper' ).append( '<label class="forminator-label--limit">0 / 180</label>' );
                } else {
                    $formField.find( '.forminator-input' ).after( '<div class="forminator-field--helper"><label class="forminator-label--limit">0 / 180</label></div>' );
                }
                
            }

            if (this.value === 'false') {

                if ( $formField.find('.forminator-field--helper .forminator-label--helper').length ) {
                    $formField.find( '.forminator-field--helper .forminator-label--limit' ).remove();
                } else {
                    $formField.find('.forminator-field--helper').remove();
                }
                
            }

            e.stopPropagation();

        });

    }());

}( jQuery, document ));