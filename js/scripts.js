$('span:even').css('color', 'red');

$('p').each(function(index, element) {
    var button = $('<button/>').addClass('btn').attr({ 'data-tmp': index }).text('Click me');
    $(element).append(button);
});

$('button').click(function(){
    alert($(this).attr('data-tmp'));
});