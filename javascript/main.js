$('.my-background-text, .my-background-circle').click(function() {
    let item = $(this).closest('.item');
    let isActive = item.find('.my-background-circle').toggleClass('active').hasClass('active');
    item.find('.my-background-text').css('color', isActive ? '#f06868' : '#a34848');
    item.find('.my-background-circle').css('background-color', isActive ? '#f06868' : '#a34848');
    let hasHistoryCards = targetContainer.find('.history-card').length > 0;
    isActive && !hasHistoryCards && historyContentCache ? 
    targetContainer.append(historyContentCache) : targetContainer.find('.history-card').detach();
});
$('.workshop-text, .workshop-circle').click(function() {
    let item = $(this).closest('.item');
    let isActive = item.find('.workshop-circle').toggleClass('active').hasClass('active');
    item.find('.workshop-text').css('color', isActive ? 'rgb(0, 242, 255)' : '#a34848');
    item.find('.workshop-circle').css('background-color', isActive ? 'rgb(0, 242, 255)' : '#a34848');
    
    let hasWorkshopCards = targetContainer.find('.workshop-card').length > 0;
    if (isActive && !hasWorkshopCards && workshopContentCache) {
        targetContainer.append(workshopContentCache);
        addMatClickListener();
    } else {
        targetContainer.find('.workshop-card').detach();
    }
});
