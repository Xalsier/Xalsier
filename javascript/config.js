let historyContentCache = null;
const targetContainer = $('.container');
$.get('./cache/history.html', function(data) {
    historyContentCache = $(data).find('.history-card').clone();
});
let workshopContentCache = null;
$.get('./cache/workshop.html', function(data) {
    workshopContentCache = $(data).find('.workshop-card').clone();
});
