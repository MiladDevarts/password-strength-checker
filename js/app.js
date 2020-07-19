
$(document).ready(function () {

    $("#passwordInput").keyup(function () {

        passwordChecker();

    });

    $("#usernameInput").keyup(function () {

        usernameChecker();

    });

});

const usernameChecker = function () {

    let usernameValue = document.querySelector('#usernameInput').value;
    let errorMessage = "";


    if (usernameValue != "") {
        if (usernameValue.length >= 16) {

            errorMessage = "Please Decrease usename lenght less than 16!";

        } else if (usernameValue.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) {


        }
    } else {
        errorMessage = "Please Fill!";
    }


    let errorBox = document.querySelector('#usernameErrorSolving');
    errorBox.innerHTML = errorMessage;

};

const passwordChecker = function () {

    let passwordValue = document.getElementById("passwordInput").value;
    let qualityProgress = document.getElementById("qualityProgress");
    let passwordQuality = 0;


    if (passwordValue != "") {

        if (passwordValue.length <= 6) {

            passwordQuality = 1;

        }

        if (passwordValue.length > 6 && (passwordValue.match(/[a-z]/) || passwordValue.match(/\d+/) || passwordValue.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))) {

            passwordQuality = 2;

        }


        if (passwordValue.length > 6 && ((passwordValue.match(/[a-z]/) && passwordValue.match(/\d+/)) || (passwordValue.match(/\d+/) && passwordValue.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) || (passwordValue.match(/[a-z]/) && passwordValue.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)))) {

            passwordQuality = 3;

        }


        if (passwordValue.length > 6 && passwordValue.match(/[a-z]/) && passwordValue.match(/\d+/) && passwordValue.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) {

            passwordQuality = 4;

        }


        if (passwordQuality == 1) {

            $("#qualityProgress").animate({ width: '50px' }, 300);
            qualityProgress.style.backgroundColor = "red";
            document.getElementById("passwordType").innerHTML = "Very Weak";

        }


        if (passwordQuality == 2) {

            $("#qualityProgress").animate({ width: '100px' }, 300);
            qualityProgress.style.backgroundColor = "#F5BCA9";
            document.getElementById("passwordType").innerHTML = "Weak";

        }

        if (passwordQuality == 3) {

            $("#qualityProgress").animate({ width: '150px' }, 300);
            qualityProgress.style.backgroundColor = "#FF8000";
            document.getElementById("passwordType").innerHTML = "Good";

        }

        if (passwordQuality == 4) {

            $("#qualityProgress").animate({ width: '200px' }, 300);
            qualityProgress.style.backgroundColor = "#00FF40";
            document.getElementById("passwordType").innerHTML = "Strong";

        }
    }


    else {

        qualityProgress.style.backgroundColor = "white";
        document.getElementById("passwordType").innerHTML = "";

    }

}
