$('.volunteer__sidebar').hide();

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function showVolunteerSidebar(){
    $('.volunteer__sidebar').show();
    $('.volunteer__table-container').css('width', '66.6667%');
}

var currentTin = getParameterByName('current');
var tinHistory = getParameterByName('history');

$('.volunteer__table tr').on('click', function(){
    $(this).toggleClass('selected').siblings().removeClass('selected');
    showVolunteerSidebar();
});

$('.volunteer__sidebar-close').on('click', function(){
    $('.volunteer__table tr').siblings().removeClass('selected');
    $('.volunteer__sidebar').hide();
    $('.volunteer__table-container').css('width', '100%');
});

if (currentTin || tinHistory) {
    showVolunteerSidebar();
}