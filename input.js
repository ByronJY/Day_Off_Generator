function btn_down(){
    year = input_year.value.toString();
    month = parseInt(input_month.value);
    date = input_date.value;
    // _name = input_name.value;
    log.innerHTML = "";
    
    if (year.toString() == ""){
        year = d.getFullYear();
    }
    if (month == ""){
        month = d.getMonth()+1;
    }else if (parseInt(month) <= 0 || parseInt(month) > 12){
        log.innerHTML += "<p style=\"color: red\">月分必須在 1~12 範圍內</p>";
    }
    if (date == ""){
        date = d.getDate();
    }else if (parseInt(date) <= 0 || parseInt(date) > 31){
        log.innerHTML += "<p style=\"color: red\">日期必須在 1~31 範圍內</p>";
    }
    // console.log(_name);
    // console.log(year + "/" + month + "/" + date);

    draw();
}