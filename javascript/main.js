$.get('./cache/history.html', function(data) {historyContentCache = $(data).find('.history-card').clone();});
$('.my-background-text, .my-background-circle').click(function() {
    let item = $(this).closest('.item');
    let isActive = item.find('.my-background-circle').toggleClass('active').hasClass('active');
    item.find('.my-background-text').css('color', isActive ? '#f06868' : '#a34848');
    item.find('.my-background-circle').css('background-color', isActive ? '#f06868' : '#a34848');
    let hasHistoryCards = targetContainer.find('.history-card').length > 0;
    isActive && !hasHistoryCards && historyContentCache ? 
    targetContainer.append(historyContentCache) : targetContainer.find('.history-card').detach();
});