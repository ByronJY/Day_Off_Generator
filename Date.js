const date_img_path = "img/date/";
const date_tens_imgs = {
    0: "t0_0f.png",
    1: "t1_0f.png",
    2: "t2_0f.png",
    3: "t3_1f.png"
}
const date_units_imgs = {
    0: "0_0f.png",
    1: "1_1f.png",
    2: "2_0f.png",
    3: "3_0f.png",
    4: "4_0f.png",
    5: "5_1f.png",
    6: "6_0f.png",
    7: "7_0f.png",
    8: "8_1f.png",
    9: "9_0f.png",
}

function get_date_tens(d_t){
    // console.log(parseInt(d_t/10));
    return date_img_path + date_tens_imgs[parseInt(d_t/10)];
}

function get_date_units(d_u){
    // console.log(d_u%10);
    return date_img_path + date_units_imgs[d_u%10];
}