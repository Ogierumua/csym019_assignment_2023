fetch("course.json")
    .then(function(response) {
        return response.json();
    })

    .then(function(courses) {
        let placeholder = document.querySelector("#data_output");
        let out = "";
        for (let course of courses) {
            out += `
        <tr>
        <td> <img src = "${course.Images}"> </td>
        <td> ${course.SubjectArea} </td>
        <td> ${course.CourseName} </td>
        <td> ${course.CourseDetails} </td>
        <td> ${course.Level} </td>
        <td> ${course.EntryRequirement} </td>
        <td> ${course.FeesandFunding} </td>
        <td> ${course.KeyFacts} </td>
        </tr>
        `;
        }
        placeholder.innerHTML = out;
    })


 //setInterval(function() {
//     $.ajax({
//         url: 'course.json',
//         dataType: 'json',
//         success: function(data) {
//             for (var i=0; i < data.length; i++) {
//                 var row = $(
//                     '<tr><td>' 
//                      + data[i].SubjectArea + 
//                     '</td><td>'
//                          + data[i].CourseName + 
//                     '</td><td>'
//                         + data[i].CourseType + 
//                     '</td><td>' 
//                         + data[i].CourseDetails +
//                     '</td><td>'
//                         + data[i].EntryRequirement +
//                     '</td><td>'
//                         + data[i].FeesandFunding +
//                     '</td><td>'
//                         + data[i].KeyFacts + 
//                     '</td></tr>');
//                 $('#data-output').append(row);
//             }
//         },
//         error: function(textStatus, errorThrown){
//             alert('Error: ' + textStatus + ' - ' + errorThrown);
//         }
//     });
// }, 10000);