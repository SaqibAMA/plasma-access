$(document).scroll(()=>{

    var scrollAmount = $(document).scrollTop();
    
    $('#medicalReportImg').css({

        'transform' : 'translate(0px, ' + -scrollAmount / 2 + 'px)'

    });

});

const dataURL = 'http://127.0.0.1:8080/donorData';

$(document).ready( ()=> {

    $.getJSON(dataURL, (jsonData) => {

        for (var i = 0; i < jsonData['donors'].length; i++) {

            var dataHandle = jsonData['donors'][i];

            var data = `
            <li class="donorCardContainer">
                <div class="donorCard">

                    <div class="donorDetails">
                    
                        <div class="donorName">${dataHandle.name}</div>
                        <div class="donorPhoneNum">${dataHandle.phoneNum}</div>
                        <div class="donorCity">${dataHandle.city}</div>
                        <div class="donorBloodGroup">${dataHandle.bloodGroup}</div>

                    </div>
                </div>
            </li>`


            $('#donorsList').append(data);


        }

    });

});
