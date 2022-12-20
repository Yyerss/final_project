var course = "";
var backgroundColor = "";
var img = "";
           $.ajax({
                url: 'courseAttributesSelect.php',
                type: 'POST',
                data: {},
                success: function(jsonData) {
                    console.log(jsonData);
                    var json = JSON.parse(jsonData);
                    course = json[0]['course_name'];
                    backgroundColor = json[0]['course_background'];
                    img = json[0]['course_image'];
                    document.getElementById('course-name').innerHTML = course;
                    document.getElementById('about-course').style.backgroundColor = backgroundColor;
                    document.getElementById('courseImg').src = img;
                }
           });

function buy(pochta) {
    $("#container-buy").hide();
    $("#container-buy").animate({left: '-=100px',
    },0);
    $("#container-buy").animate({left: '+=100px',
    },"slow");
    alert("Sızge jaqyn arada " + pochta + " pochtasyna habarlama keledı!");
}

function jazyl() {
    $("#container-buy").show();
    $("#container-buy").animate({left: '-=100px',
    },0);
    $("#container-buy").animate({left: '+=100px',
    },"slow");
}

function jabu() {
    $("#container-buy").hide();
    $("#container-buy").animate({left: '-=100px',
    },0);
    $("#container-buy").animate({left: '+=100px',
    },"slow");
}
        
    
