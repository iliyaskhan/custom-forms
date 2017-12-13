(function( $, doc ) {
    "use strict";

    (function(){

        $("#sp-settings-required").ready(function(){

            var $this = $(this),
                $radio = $this.find('input[type=radio][name=field-required]');

            $radio.change(function(){

                var $form = $('.forminator-custom-form'),
                    $field = $form.find('.forminator-field'),
                    $main = $form.find('.forminator-field--main'),
                    $label = $form.find('.forminator-field--label');

                var $svg = '<div class="forminator-icon" aria-hidden="true">' +
                    '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" preserveAspectRatio="none"><path fill="#C40000" fill-rule="evenodd" d="M9.375 7.06h.01c.039.027.071.06.097.103.026.042.04.09.04.142v.053c0 .017-.004.031-.01.044l-.81 1.407h-.01a.223.223 0 0 1-.098.107.29.29 0 0 1-.293 0 .16.16 0 0 0-.025-.02.16.16 0 0 1-.024-.019L5.83 7.48v2.852a.291.291 0 0 1-.068.19.283.283 0 0 1-.166.103H3.975a.285.285 0 0 1-.293-.283V7.48L1.21 8.906a.225.225 0 0 1-.064.03.327.327 0 0 1-.2-.015.242.242 0 0 1-.097-.073L.04 7.44a.217.217 0 0 1-.03-.068.321.321 0 0 1-.01-.078c0-.052.013-.1.04-.142a.296.296 0 0 1 .106-.102.061.061 0 0 1 .025-.015.268.268 0 0 0 .034-.015l2.422-1.396-2.49-1.436a.327.327 0 0 1-.098-.102A.265.265 0 0 1 0 3.945c0-.026.003-.05.01-.073a.225.225 0 0 1 .03-.063L.83 2.45v-.01a.29.29 0 0 1 .254-.146.232.232 0 0 1 .127.039L3.69 3.76V.898a.313.313 0 0 1 .088-.19.257.257 0 0 1 .196-.083h1.582c.071 0 .135.028.19.083a.273.273 0 0 1 .083.2V3.77l2.49-1.416a.287.287 0 0 1 .137-.04c.052 0 .1.013.142.04a.327.327 0 0 1 .102.097l.791 1.358c.013.02.023.042.03.068.006.026.01.052.01.078 0 .052-.014.1-.04.142a.327.327 0 0 1-.097.102l-2.48 1.426 2.46 1.426v.01z"/></svg>' +
                '</div>';

                var $fullSVG = '<div class="forminator-field--label"><div class="forminator-icon" aria-hidden="true">' +
                    '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" preserveAspectRatio="none"><path fill="#C40000" fill-rule="evenodd" d="M9.375 7.06h.01c.039.027.071.06.097.103.026.042.04.09.04.142v.053c0 .017-.004.031-.01.044l-.81 1.407h-.01a.223.223 0 0 1-.098.107.29.29 0 0 1-.293 0 .16.16 0 0 0-.025-.02.16.16 0 0 1-.024-.019L5.83 7.48v2.852a.291.291 0 0 1-.068.19.283.283 0 0 1-.166.103H3.975a.285.285 0 0 1-.293-.283V7.48L1.21 8.906a.225.225 0 0 1-.064.03.327.327 0 0 1-.2-.015.242.242 0 0 1-.097-.073L.04 7.44a.217.217 0 0 1-.03-.068.321.321 0 0 1-.01-.078c0-.052.013-.1.04-.142a.296.296 0 0 1 .106-.102.061.061 0 0 1 .025-.015.268.268 0 0 0 .034-.015l2.422-1.396-2.49-1.436a.327.327 0 0 1-.098-.102A.265.265 0 0 1 0 3.945c0-.026.003-.05.01-.073a.225.225 0 0 1 .03-.063L.83 2.45v-.01a.29.29 0 0 1 .254-.146.232.232 0 0 1 .127.039L3.69 3.76V.898a.313.313 0 0 1 .088-.19.257.257 0 0 1 .196-.083h1.582c.071 0 .135.028.19.083a.273.273 0 0 1 .083.2V3.77l2.49-1.416a.287.287 0 0 1 .137-.04c.052 0 .1.013.142.04a.327.327 0 0 1 .102.097l.791 1.358c.013.02.023.042.03.068.006.026.01.052.01.078 0 .052-.014.1-.04.142a.327.327 0 0 1-.097.102l-2.48 1.426 2.46 1.426v.01z"/></svg>' +
                '</div></div>';

                if (this.value === 'true') {
                    if ( $field.find('.forminator-field--main:first-child').length ) {
                        $field.find('.forminator-field--main:first-child').append( $svg );
                    }
                    if ( $field.find('.forminator-field--label:first-child').length ) {
                        $field.find('.forminator-field--label:first-child').append( $svg );
                    }
                    if ( ! $main.length && ! $label.length ) {
                        $field.prepend( $fullSVG );
                    }
                }

                if (this.value === 'false') {
                    if ( $main.length && $main.find('.forminator-label--main').length ) {
                        $main.find('.forminator-icon').remove();
                    }
                    if ( $main.length && ! $main.find('.forminator-label--main').length ) {
                        $main.remove();
                    }
                    if ( $label.length && $label.find('.forminator-label--helper').length ) {
                        $label.find('.forminator-icon').remove();
                    }
                    if ( $label.length && ! $label.find('.forminator-label--helper').length ) {
                        $label.remove();
                    }
                }

            });

        });

        $("#sp-settings-design").ready(function(){
            
            var $this = $(this),
                $radio = $this.find('input[type=radio][name=form-style]');

            $radio.change(function(){

                var $form = $('.forminator-custom-form');

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
                    $(this).parent('.forminator-field').addClass('forminator-is_filled');
                } else {
                    $(this).parent('.forminator-field').removeClass('forminator-is_filled');
                }
                
                e.stopPropagation();

            });

        });

    }());

}( jQuery, document ));