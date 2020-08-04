$(document).scroll(()=>{

    var scrollAmount = $(document).scrollTop();
    
    $('#medicalReportImg').css({

        'transform' : 'translate(0px, ' + -scrollAmount / 2 + 'px)'

    });

});