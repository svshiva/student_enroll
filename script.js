showData();
function foo() {
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

    let getLs = localStorage.getItem("stu_list");
    if (getLs == null) {
        arr = [];

    } else {
        arr = JSON.parse(getLs)
    }
    arr.push(newData)
    localStorage.setItem("stu_list", JSON.stringify(arr));
    showData();
    document.getElementById("stu_form").reset();
}
function showData() {
    let getLs = localStorage.getItem("stu_list");
    if (getLs == null) { listarr = []; }
    else {
        listarr = JSON.parse(getLs);
    }
    let newData = '';

    listarr.forEach((element,index) => {
        newData+=element;
    });
    const td = document.getElementById("table-data")
    td.innerHTML = newData;

}
function clearData(){
    localStorage.setItem('stu_list',JSON.stringify([]))
    showData();
}

