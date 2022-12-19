var course = "";
var backgroundColor = "";
var img = "";

    $.ajax({
        url: 'courseAttributesInsert.php',
        type: 'POST',
        data: {courseName: course,backgroundColor: backgroundColor, imgSrc:img},
        success: function() {
           $.ajax({
                url: 'courseAttributesSelect.php',
                type: 'POST',
                data: {courseName: course,backgroundColor: backgroundColor, imgSrc:img},
                success: function(jsonData) {
                    console.log(jsonData);
                    console.log("aaaa" + course + " bg " + backgroundColor + "img " + img);
                    document.getElementById('course-name').innerHTML = course;
                    document.getElementById('about-course').style.backgroundColor = backgroundColor;
                    document.getElementById('courseImg').src = img;
                }
           });
        },
        error: function() {
            alert("error");
        }
    });
