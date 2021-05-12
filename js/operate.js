function initbutton(className) {
    if($('.' + className).length > 0){
        $('.' + className).show()
    }else{
        $('.list-wrapper').append("<div class='tabpane "+className+"'></li>")
    }

    $('.button-wrappper').on('click', '.button', function () {
        $('.button-wrappper').children().removeClass('choosed')
        $(this).addClass('choosed')
        var className = $(this).attr('code')
        if($('.' + className).length > 0){
            $('.' + className).show()
        }else{
            $('.list-wrapper').append("<div class='tabpane "+className+"'></li>")
        }
        $('.' + className).siblings().hide()
    })
}
