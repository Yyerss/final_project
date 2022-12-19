var name = "";
var surname = "";
var age = 0;
var about = "";
var insta = "";
var password = "";

function rega(uname,usurname,uemail,uage,uabout,uinsta,upassword,upasswordAgain) {
    alert(uname + " " + usurname + " " + uemail+ " " +uage+ " " +uabout+ " " +uinsta+ " " +upassword+ " " +upasswordAgain);
    if(upassword == upasswordAgain) {
        $.ajax({
            url : 'reg.php',
            type : 'POST',
            data: {name: uname, surname: usurname, email: uemail, age: uage, about: uabout,insta: uinsta, password: upassword},
            success : function (result) {
              console.log (result); 
              if(result == "Success!") {alert("Correct input");}
              else {alert("Wrong input");}
            },
            error : function () {
              console.log ('error');
            }
          });
    }
}

