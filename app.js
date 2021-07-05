$(document).ready(function () {
    var $headerButton = $('.header_main--button')
    var $cardBasic = $('.card-basic')

    $headerButton.on('click', function () {
        $(this).toggleClass('active')
        var $that = $(this)
        var cardPrice
        $cardBasic.each(function () {

            if ($that.hasClass('active')) {
                cardPrice = $(this).data('price-monthly')
            } else {
                cardPrice = $(this).data('price-yearly')
            }

            $(this).find('.card_price').text(cardPrice)
            $(this).find('.card_price').text(cardPrice)
        })
    })
});