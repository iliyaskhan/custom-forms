(function( $, doc ) {
    "use strict";

    (function(){

        var $form = $("#forminator-module-text"),
            $formField = $form.find('.forminator-field');

        var $icon = '<div class="forminator-icon" aria-hidden="true"><span class="wpdui-icon wpdui-icon-asterisk"></span></div>';

        var $iconFull = '<div class="forminator-field--main">' + $iconFull + '</div>';

        var $iconPhol = '<div class="forminator-field--main forminator-no_placeholder">' +
            '<div class="forminator-icon" aria-hidden="true">' +
                '<span class="wpdui-icon wpdui-icon-asterisk"></span>' +
            '</div>' +
        '</div>';

        $.fn.hasAttr = function(name) {  
            return this.attr(name) !== undefined;
         };

        $("input[type=radio][name=text-required]").on('change', function(e){
            
            if (this.value === 'true') {
                if ( $formField.find('.forminator-field--main:first-child').length ) {
                    $formField.find('.forminator-field--main:first-child').append( $icon );
                }
                if ( $formField.find('.forminator-field--label:first-child').length ) {
                    $formField.find('.forminator-field--label:first-child').append( $icon );
                }
                if ( ! $formField.find('.forminator-field--main').length && ! $formField.find('.forminator-field--label').length ) {
                    if ( $formField.find('.forminator-input').hasAttr('placeholder') || $formField.find('.forminator-textarea').hasAttr('placeholder') ) {
                        $formField.prepend( $iconFull );
                    } else {
                        $formField.prepend( $iconPhol );
                    }
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

        });

        $("input[type=radio][name=text-field-type]").on('change', function(e){
            
            if (this.value === 'text') {

                if ( $formField.find('.forminator-textarea' )[0].hasAttribute('placeholder') ) {
                    $formField.find('.forminator-textarea').replaceWith('<input type="text" class="forminator-input" placeholder="eg. Red" />');
                } else {
                    $formField.find('.forminator-textarea').replaceWith('<input type="text" class="forminator-input" />');
                }

            }

            if (this.value === 'textarea') {

                if ( $formField.find('.forminator-input' )[0].hasAttribute('placeholder') ) {
                    $formField.find('.forminator-input').replaceWith('<textarea class="forminator-textarea" placeholder="eg. Red"></textarea>');
                } else {
                    $formField.find('.forminator-input').replaceWith('<textarea class="forminator-textarea"></textarea>');
                }
                
            }

            e.stopPropagation();

        });

        $("input[type=radio][name=text-main-label]").on('change', function(e){
            
            if (this.value === 'true') {

                if ( $formField.find('.forminator-field--main').length ) {
                    
                    $formField.find('.forminator-field--main').prepend('<label class="forminator-label--main">What is your favourite word?</label>');

                    if ( $formField.find('.forminator-input').hasAttr('placeholder') || $formField.find('.forminator-textarea').hasAttr('placeholder') ) {
                        $formField.find('.forminator-field--main').addClass('forminator-no_placeholder');
                    }

                } else {
                    
                    if ( $formField.find('.forminator-input').hasAttr('placeholder') || $formField.find('.forminator-textarea').hasAttr('placeholder') ) {

                        if ( $formField.find('.forminator-field--label .forminator-icon').length ) {
                            $formField.prepend( '<div class="forminator-field--main"><label class="forminator-label--main">What is your favourite word?</label>' + $iconFull + '</div>' );
                            $formField.find('.forminator-field--label .forminator-icon').remove();
                        } else {
                            $formField.prepend( '<div class="forminator-field--main"><label class="forminator-label--main">What is your favourite word?</label></div>' );
                        }

                    } else {

                        if ( $formField.find('.forminator-field--label .forminator-icon').length ) {
                            $formField.prepend( '<div class="forminator-field--main forminator-no_placeholder"><label class="forminator-label--main">What is your favourite word?</label>' + $iconFull + '</div>' );
                            $formField.find('.forminator-field--label .forminator-icon').remove();
                        } else {
                            $formField.prepend( '<div class="forminator-field--main forminator-no_placeholder"><label class="forminator-label--main forminator-no_placeholder">What is your favourite word?</label></div>' );
                        }

                    }

                }

            }

            if (this.value === 'false') {

                if ( $formField.find('.forminator-field--label').length ) {

                    if ( $formField.find('.forminator-field--main .forminator-icon').length ) {
                        $formField.find('.forminator-field--label').append( $icon );
                    }
                    
                    if ( ! $formField.find('.forminator-input').hasAttr('placeholder') || ! $formField.find('.forminator-textarea').hasAttr('placeholder') ) {
                        $formField.find('.forminator-field--label').addClass('forminator-no_placeholder');
                    }

                    $formField.find('.forminator-field--main').remove();

                } else {

                    if ( $('input[type=radio][name=text-required]').value === 'true' ) {
                        $formField.find('.forminator-field--main').removeClass('forminator-no_placeholder');
                        $formField.find('.forminator-field--main label').remove();
                    }

                }

            }

            e.stopPropagation();

        });

        $("input[type=radio][name=text-field-label]").on('change', function(e){

            if (this.value === 'true') {

                if ( $formField.find('.forminator-field--main').length ) {

                    if ( $formField.find('.forminator-field--main').hasClass('forminator-no_placeholder') ) {
                        $formField.find('.forminator-field--main').removeClass('forminator-no_placeholder');
                        $formField.find('.forminator-field--main').after('<div class="forminator-field--label forminator-no_placeholder"><label class="forminator-label--helper">Tell us, don\'t be shy</label></div>');
                    } else {
                        $formField.find('.forminator-field--main').after('<div class="forminator-field--label"><label class="forminator-label--helper">Tell us, don\'t be shy</label></div>');
                    }

                } else {

                    if ( $('input[type=radio][name=text-required]').value === 'true' ) {

                        if ( $formField.find('.forminator-input').hasAttr('placeholder') || $formField.find('.forminator-textarea').hasAttr('placeholder') ) {
                            $formField.prepend('<div class="forminator-field--label forminator-no_placeholder"><label class="forminator-label--helper">Tell us, don\'t be shy</label>' + $icon + '</div>');
                        } else {
                            $formField.prepend('<div class="forminator-field--label"><label class="forminator-label--helper">Tell us, don\'t be shy</label>' + $icon + '</div>');
                        }

                    } else {

                        if ( $formField.find('.forminator-input').hasAttr('placeholder') || $formField.find('.forminator-textarea').hasAttr('placeholder') ) {
                            $formField.prepend('<div class="forminator-field--label forminator-no_placeholder"><label class="forminator-label--helper">Tell us, don\'t be shy</label></div>');
                        } else {
                            $formField.prepend('<div class="forminator-field--label"><label class="forminator-label--helper">Tell us, don\'t be shy</label></div>');
                        }

                    }

                }

            }

            if (this.value === 'false') {

                if ( $formField.find('.forminator-field--main').length ) {

                    if ( $('input[type=radio][name=text-required]').value === 'true' ) {
                        $formField.find('.forminator-field--main').append( $icon );
                    }

                    if ( $formField.find('.forminator-input').hasAttr('placeholder') || $formField.find('.forminator-textarea').hasAttr('placeholder') ) {
                        $formField.find('.forminator-field--main').addClass('forminator-no_placeholder');
                    }

                    $formField.find('.forminator-field--label').remove();

                } else {

                    if ( $('input[type=radio][name=text-required]').value === 'true' ) {
                        $formField.find('.forminator-field--label label').remove();
                    } else {
                        $formField.find('.forminator-field--label').remove();
                    }

                }

            }
            
            /*if (this.value === 'true') {

                if ( $formField.find('.forminator-field--main').length ) {
                    
                    $formField.find('.forminator-field--main').after( '<div class="forminator-field--label"><label class="forminator-label--helper">Tell us, don\'t be shy</label></div>' );

                } else {

                    $formField.prepend( '<div class="forminator-field--label"><label class="forminator-label--helper">Tell us, don\'t be shy</label></div>' );

                }

            }

            if (this.value === 'false') {

                $formField.find('.forminator-field--label').remove();
                
            }*/

            e.stopPropagation();

        });

        $("input[type=radio][name=text-field-placeholder]").on('change', function(e){
            
            if (this.value === 'true') {
                
                $formField.find('.forminator-input').attr('placeholder', 'eg. Red');
                $formField.find('.forminator-textarea').attr('placeholder', 'eg. Red');

                $formField.find('.forminator-field--main').removeClass('forminator-no_placeholder');
                $formField.find('.forminator-field--label').removeClass('forminator-no_placeholder');

            }

            if (this.value === 'false') {

                $formField.find('.forminator-input').removeAttr('placeholder');
                $formField.find('.forminator-textarea').removeAttr('placeholder');

                if (
                    ( $formField.find('.forminator-field--main').length && $formField.find('.forminator-field--label').length ) ||
                    ( ! $formField.find('.forminator-field--main').length && $formField.find('.forminator-field--label').length )
                ) {
                    $formField.find('.forminator-field--label').addClass('forminator-no_placeholder');
                }

                if ( $formField.find('.forminator-field--main').length && ! $formField.find('.forminator-field--label').length ) {
                    $formField.find('.forminator-field--main').addClass('forminator-no_placeholder');
                }

            }

            e.stopPropagation();

        });

        $("input[type=radio][name=text-field-description]").on('change', function(e){
            
            if (this.value === 'true') {

                if ( $formField.find('.forminator-field--helper').length ) {
                    $formField.find('.forminator-field--helper').prepend( '<label class="forminator-label--helper">We will not sell this information, promise.</label>' );
                } else {
                    $formField.find('.forminator-input').after( '<div class="forminator-field--helper"><label class="forminator-label--helper">We will not sell this information, promise.</label></div>' );
                    $formField.find('.forminator-textarea').after( '<div class="forminator-field--helper"><label class="forminator-label--helper">We will not sell this information, promise.</label></div>' );
                }
                
            }

            if (this.value === 'false') {

                if ( $formField.find('.forminator-field--helper .forminator-label--limit').length ) {
                    $formField.find('.forminator-field--helper .forminator-label--helper').remove();
                } else {
                    $formField.find('.forminator-field--helper').remove();
                }
                
            }

            e.stopPropagation();

        });

        $("input[type=radio][name=text-field-limit]").on('change', function(e){
            
            if (this.value === 'true') {

                if ( $formField.find('.forminator-field--helper').length ) {
                    $formField.find('.forminator-field--helper').append( '<label class="forminator-label--limit">0 / 180</label>' );
                } else {
                    $formField.find('.forminator-input').after( '<div class="forminator-field--helper"><label class="forminator-label--limit">0 / 180</label></div>' );
                    $formField.find('.forminator-textarea').after( '<div class="forminator-field--helper"><label class="forminator-label--limit">0 / 180</label></div>' );
                }
                
            }

            if (this.value === 'false') {

                if ( $formField.find('.forminator-field--helper .forminator-label--helper').length ) {
                    $formField.find('.forminator-field--helper .forminator-label--limit').remove();
                } else {
                    $formField.find('.forminator-field--helper').remove();
                }
                
            }

            e.stopPropagation();

        });

    }());

}( jQuery, document ));