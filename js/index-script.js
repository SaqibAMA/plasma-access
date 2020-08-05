$(document).scroll(()=>{

    var scrollAmount = $(document).scrollTop();
    
    $('#medicalReportImg').css({

        'transform' : 'translate(0px, ' + -scrollAmount / 2 + 'px)'

    });

});

const dataURL = 'https://api.jsonbin.io/b/5f2ab4491823333f8f1d2140';

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