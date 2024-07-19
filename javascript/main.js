$(document).ready(function() {
    $('.my-background-text, .my-background-circle').click(function() {
        let item = $(this).closest('.item');
        let isActive = item.find('.my-background-circle').toggleClass('active').hasClass('active');
        item.find('.my-background-text').css('color', isActive ? '#f06868' : '#a34848');
        item.find('.my-background-circle').css('background-color', isActive ? '#f06868' : '#a34848');
        let hasHistoryCards = targetContainer.find('.history-card').length > 0;
        if (isActive && !hasHistoryCards && historyContentCache) {
            targetContainer.append(historyContentCache);
        } else {
            targetContainer.find('.history-card').detach();
        }
    });

    $('.technical-projects-text, .css-circle').click(function() {
        let item = $(this).closest('.item');
        let isActive = item.find('.css-circle').toggleClass('active').hasClass('active');
        item.find('.technical-projects-text').css('color', isActive ? 'rgb(0, 242, 255)' : '#a34848');
        item.find('.css-circle').css('background-color', isActive ? 'rgb(0, 242, 255)' : '#a34848');
        
        if (isActive) {
            $('.hirigana-card').show();
        } else {
            $('.hirigana-card').hide();
        }
    });
});
