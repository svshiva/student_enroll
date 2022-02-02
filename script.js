// initially calling the function to show saved data
showData();

// this function create data from form input
function createData() {
    var x = document.getElementById("stu_form")
    var name = x.name.value;
    var email = x.email.value;
    var gender = x.gender.value;
    var website = x.web.value;
    var img = x.img_url.value;
    var tech = "";
    if (document.getElementById("java").checked) {
        tech += "Java"
    }

    if (document.getElementById("html").checked) {
        if (tech.length > 0) tech += ", ";
        tech += "HTML";
    }
    if (document.getElementById("css").checked) {
        if (tech.length > 0) tech += ", ";
        tech += "CSS";
    }


    newData =
        `
    <tr>
        <td><b>${name}</b><br>
            ${gender}<br>
            ${email}<br>
            <a href=${website}>${website} </a><br>
            ${tech}
        </td>
        <td><center><img  src=${img} style="width:100px;height:100px;"/><center></td>
    </tr>
    `
    // saving data to local storage
    let getLs = localStorage.getItem("stu_list");
    if (getLs == null) {
        arr = [];

    } else {
        arr = JSON.parse(getLs)
    }
    arr.push(newData)
    localStorage.setItem("stu_list", JSON.stringify(arr));

    //calling show data to display updated data
    showData();
    document.getElementById("stu_form").reset();
}

// function to display all the data
function showData() {
    let getLs = localStorage.getItem("stu_list");
    if (getLs == null || getLs == '[]') { listarr = [];document.getElementById('display').style.display = 'none'; return;
        }
    else {
        listarr = JSON.parse(getLs);
        document.getElementById('display').style.display = 'block';
    }
    let newData = '';

    listarr.forEach((element,index) => {
        newData+=element;
    });
    const td = document.getElementById("table-data")
    td.innerHTML = newData;

}

//function to remove all user data
function clearData(){
    localStorage.setItem('stu_list',JSON.stringify([]))
    showData();
}

