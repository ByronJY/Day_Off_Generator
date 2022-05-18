const d = new Date();
var year;
var month;
var date;
var _name;
// var input_name = document.getElementById("input_name");
var input_year = document.getElementById("input_year");
var input_month = document.getElementById("input_month");
var input_date = document.getElementById("input_date");
var log = document.getElementById("log");

window.onload = function(){
    year = d.getFullYear().toString();
    month = d.getMonth()+1;
    date = d.getDate();
    input_year.value = year;
    input_month.value = month;
    input_date.value = date;

    // console.log(year + "/" + month + "/" + date);

    draw();
}


function draw() {
  var img = new Image(); // 疫苗卡
  img.src = "img/card.jpg";
//   var img_year = new Image(); // 年分
  var img_month = new Image(); // 月分
  img_month.src = get_month_num(month);
  var img_date_tens = new Image(); // 日期 十位數
  img_date_tens.src = get_date_tens(date);
  var img_date_units = new Image(); // 日期 個位數
  img_date_units.src = get_date_units(date);
//   console.log(year);

  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    img.addEventListener("load", function(){ // 畫 疫苗卡
        ctx.drawImage(img, 0, 0);
    });
    // console.log(year.toString().length-1);

    let year_img_src = [];
    for (let num = year.length-1, interval = 0 ; num >= 0 ; num--, interval++){
        let start_x = 646;
        let start_y = 717;
        year_img_src.push({
            "src": get_year_num(parseInt(year[num])),
            'x': start_x + (interval*-16),
            'y': start_y + (interval*-0),
            'w': 19,
            'h': 40
        });
    }
    // console.log(year_img_src);
    displayImages(year_img_src);

    img_month.addEventListener("load", function(){ // 畫 月分
        ctx.drawImage(img_month, 677, 713, 68, 50);
    });
    img_month.addEventListener("load", function(){ // 畫 日期 十位數
        ctx.drawImage(img_date_tens, 759, 714, 58, 58);
    });
    img_month.addEventListener("load", function(){ // 畫 日期 個位數
        ctx.drawImage(img_date_units, 759, 714, 58, 58);
    });

    let char_img_src = [];
    if (_name != undefined){
      for (let char_index = 0 ; char_index < _name.length ; char_index++){
        console.log(_name[char_index]);
      }
    }
    
  }
}



