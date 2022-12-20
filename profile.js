var name = "";
var surname = "";
var age = 0;
var about = "";
var insta = "";
var password = "";

function rega(uname,usurname,uemail,uage,uabout,uinsta,upassword,upasswordAgain) {
    if(upassword === upasswordAgain) {
        $.ajax({
            url : 'reg.php',
            type : 'POST',
            data: {name: uname, surname: usurname, email: uemail, age: uage, about: uabout,insta: uinsta, password: upassword},
            success : function (result) {

            },
            error : function () {
              console.log ('error');
            }
          });
    }
}

function swapToLogin() {
    $("#registration").hide();
    $("#registration").animate({left: '-=100px',
    },0);
    $("#registration").animate({left: '+=100px',
    },"slow");

    $("#signin").show();
    $("#signin").animate({left: '-=100px',
    },0);
    $("#signin").animate({left: '+=100px',
    },"slow");
}

function swapToProfile() {
  $("#signin").hide();
    $("#signin").animate({left: '-=100px',
    },0);
    $("#signin").animate({left: '+=100px',
    },"slow");

    $("#mainProfile").show();
    $("#mainProfile").animate({left: '-=100px',
    },0);
    $("#mainProfile").animate({left: '+=100px',
    },"slow");
}

function swapToSign() {
    $("#mainProfile").hide();

    $("#signin").show();
    $("#signin").animate({left: '-=100px',
    },0);
    $("#signin").animate({left: '+=100px',
    },"slow");
}

function swapToReg() {
    $("#signin").hide();
    $("#signin").animate({left: '-=100px',
    },0);
    $("#signin").animate({left: '+=100px',
    },"slow");

    $("#registration").show();
    $("#registration").animate({left: '-=100px',
    },0);
    $("#registration").animate({left: '+=100px',
    },"slow");
}
    function logIn(uemail, upass) {
        alert(uemail + " " + upass);
      $.ajax({
        url: 'log.php',
        type: 'POST',
        data: {email: uemail, password: upass},
        success: function (jsonData){
          alert(jsonData);
              if(jsonData !== "Error"){
              var json = JSON.parse(jsonData);
              alert(json);
              name = json[0]['surname'];
              surname= json[0]['surname'];
              about = json[0]['about_user	'];    
              age = json[0]['age'];
              insta = json[0]['user_insta'] ;
              swapToProfile();
            }else {
              alert("UPS");
            }
        },
        error: function (){}
        });
    }
document.getElementById("aboutMe").innerHTML = about;
document.getElementById("nameUser").innerHTML = name + " " + surname;
document.getElementById("userAge").innerHTML = age.toString();
document.getElementById("userInsta").href = insta;

