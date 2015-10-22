$('.volunteer__sidebar').hide();

$('.volunteer__table tr').on('click', function(){
    $(this).toggleClass('selected').siblings().removeClass('selected');
    $('.volunteer__sidebar').show();
    $('.volunteer__table-container').css('width', '66.6667%');
});

$('.volunteer__sidebar-close').on('click', function(){
    $('.volunteer__table tr').siblings().removeClass('selected');
    $('.volunteer__sidebar').hide();
    $('.volunteer__table-container').css('width', '100%');
});