// nav右边项目
$('.nav-right-item:nth-of-type(1)').hover(function() {
    $('.input-item1-box').show();
}, function() {
    $('.input-item1-box').hide();
});
$('.nav-right-item:nth-of-type(2)').hover(function() {
    $('.input-item2-box').show();
}, function() {
    $('.input-item2-box').hide();
});
$('.nav-right-item:nth-of-type(3)').hover(function() {
    $('.input-item3-box').show();
}, function() {
    $('.input-item3-box').hide();
});
// gallery区域
$('#gallery .container-header .image-box').hover(function() {
    $('#gallery .container-header .image-box .layer').show();
}, function() {
    $('#gallery .container-header .image-box .layer').hide();
});
$('#gallery .container-header .image2-box').hover(function() {
    $('#gallery .container-header .image2-box .layer').show();
}, function() {
    $('#gallery .container-header .image2-box .layer').hide();
});
$('#gallery .container-center .image-box').hover(function() {
    var index=$(this).parent().index();
    $('#gallery .container-center .image-box').eq(index).children('.layer').show();
    $('#gallery .container-center .image-box').eq(index).children('img').css('border-color', '#F07818');
}, function() {
    var index=$(this).parent().index();
    $('#gallery .container-center .image-box').eq(index).children('.layer').hide();
    $('#gallery .container-center .image-box').eq(index).children('img').css('border-color', '#f1f1f1');
});