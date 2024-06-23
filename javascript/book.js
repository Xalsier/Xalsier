
function addMatClickListener() {
    $('.material-list span').click(function() {
        var materialType = $(this).text();
        var options = ecoMaterials[materialType];
        // Shuffle options and slice to get 3 random items
        options = options.sort(() => 0.5 - Math.random()).slice(0, 3);
    
        var $matDescDiv = $('.mat-description-div').empty();
        var $p = $('<p>').appendTo($matDescDiv);
        var $strong = $('<strong>').text(materialType + ': ').appendTo($p).css('color', 'cyan');
    
        $.each(options, function(index, option) {
            var $span = $('<span>').text(option);
            $span.appendTo($p);
            if (index < options.length - 1) {
                $p.append(', ');
            }
        });
    });
}