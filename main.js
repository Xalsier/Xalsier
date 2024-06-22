$(document).ready(function() {
    var historyContentCache = null;

    // Pre-fetch history content
    $.get('/cache/history.html', function(data) {
        historyContentCache = $(data).find('.history-card').clone();  // Cache and clone the history cards
        console.log('History content prefetched successfully.');
    }).fail(function() {
        console.log('Error: Failed to prefetch history content.');
    });

    // Handle click on My Background circle and text
    $('.my-background-text, .my-background-circle').click(function() {
        // Toggle active class and manage color change uniformly for circle and text
        var item = $(this).closest('.item');
        var isActive = item.find('.my-background-circle').toggleClass('active').hasClass('active');
        item.find('.my-background-text').css('color', isActive ? '#f06868' : '#a34848');
        item.find('.my-background-circle').css('background-color', isActive ? '#f06868' : '#a34848');  // Apply the same color change to the circle

        // Show or hide history content
        var targetContainer = $('.container');
        var hasHistoryCards = targetContainer.find('.history-card').length > 0;

        if (isActive) {
            if (!hasHistoryCards && historyContentCache) {
                console.log('Adding history cards');
                targetContainer.append(historyContentCache);
            }
        } else {
            if (hasHistoryCards) {
                console.log('Removing history cards');
                targetContainer.find('.history-card').detach();  // Detach instead of remove to preserve events
            }
        }
    });
});
