$('#project_list li').click(function() {
    // var textLoaded = 'Loading element with id='
    //         + $(this).data('id');
    //         var url = $(this).data('id') + "&output=embed";
    //         window.location.replace(url);
    getJSONbyProjectTitle($(this).data('id'));

        //$('#display-frame').text(textLoaded);
    });