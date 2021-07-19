$('.carts img').on('click', function (e) {

    $('.carts img').removeClass('carts_active');
    $(this).addClass('carts_active');
});

$('.first, .second, .num').on('input', function(){

    if($(this).val().length > 3) {

        $(this).val($(this).val().substr(0, 3));

        return false;
    }
});

$('.kaput').on('click',function(){
    $(this).toggleClass('kaput_active');
});

$('.kris').on('click',function(){
    $(this).toggleClass('kris_active');
});

$('.sur').on('click',function(){
    $(this).toggleClass('kris_sur_active');
});

$('.add_button').on('click', function(e){
    
    let first_input = $('.first');
    let second_input = $('.second');
    let num = $('.num');

    if(first_input.val() != '' && second_input.val() != '' && num.val() != ''){

        $('.recycle').off('click');
        let options = '';

        if($('.kaput_active').data('id')) options += $('.kaput_active').data('id');
        if($('.kris_active').data('id')) options += ' ' + $('.kris_active').data('id');
        if($('.kris_sur_active').data('id')) options += ' ' + $('.kris_sur_active').data('id');

        $('table').append(
        `<tr>
            <td><div class='input first_count'>${first_input.val()}</div></td>
            <td><div class='input second_count'>${second_input.val()}</div></td>
            <td><div class='num_count input'><div>${num.val()} <img class="img_active" src="${$('.carts_active').attr('src')}" alt=""></div><p class="options">${options}</p></div></td>
            <td class="recycle"><img class="img_active" src="images/recycle.png" alt=""></td>
        </tr>`);

        $('.recycle').on('click', function(){

            $('.result div.first_count').text(+$('.result div.first_count').text() - +$(this).parent().find('.first_count').text());
            $('.result div.second_count').text(+$('.result div.second_count').text() - +$(this).parent().find('.second_count').text());
            $(this).parent().remove();
        });

        $('.num_info img').removeClass();

        let first_count = $('.first_count').eq($('.first_count').length -1);
        let second_count = $('.second_count').eq($('.second_count').length -1)
        let num_count = $('num_count');

        first_count.text(+first_count.text() + +first_input.val());
        second_count.text(+second_count.text() + +second_input.val());
        num_count.text(num.val());
        first_input.val('');
        second_input.val('');
        num.val('');
    } else{
        alert('Please fill all fields');
    }

    let fir = +$('.first_count').eq($('.first_count').length -1).text();
    let sec = +$('.second_count').eq($('.second_count').length -1).text();

    if(fir > 301 && fir > sec){
        
        setTimeout(function(){
            alert('TEAM 1 WINS');
            window.location.reload();
        },1000)

    } else if(fir > 301 && fir < sec){
        
        setTimeout(function(){
            alert('TEAM 2 WINS');
            window.location.reload();
        },1000)

    } else if(+$('.first_count').eq($('.first_count').length -1).text() >= 301){
        
        setTimeout(function(){
            alert('TEAM 1 WINS');
            window.location.reload();
        },1000)

    } else if(+$('.second_count').eq($('.second_count').length -1).text() >= 301) {
        
        setTimeout(function(){
            alert('TEAM 2 WINS');
            window.location.reload();
        },1000)
    }
});
