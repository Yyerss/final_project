var name = "Kuanyshbek";
var surname = "Mamay";
var age = 23;
var about = "Fromt-end lecturer";
var insta = "https://www.instagram.com/kuka_uragan/";

document.getElementById("aboutMe").innerHTML = about;
document.getElementById("nameUser").innerHTML = name + " " + surname;
document.getElementById("userAge").innerHTML = age.toString();
document.getElementById("userInsta").href = insta;
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

      $.ajax({
        url: 'log.php',
        type: 'POST',
        data: {email: uemail, password: upass},
        success: function (jsonData){

              if(jsonData !== "Error"){
              var json = JSON.parse(jsonData);

              name = json[0]['surname'];
              surname= json[0]['surname'];
              about = json[0]['about_user'];
              age = json[0]['age'];
              insta = json[0]['user_insta'];
                document.getElementById("aboutMe").innerHTML = about;
                document.getElementById("nameUser").innerHTML = name + " " + surname;
                document.getElementById("userAge").innerHTML = age.toString();
                document.getElementById("userInsta").href = insta;
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
            }else {
              alert("UPS");
            }
        },
        error: function (){}
        });
    }


