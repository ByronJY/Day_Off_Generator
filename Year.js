const year_img_path = "img/year/";
const year_imgs = {
    0: ["y0_0f.png", "y0_1f.png", "y0_2f.png", "y0_3f.png"],
    1: ["y1_0f.png", "y1_1f.png", "y1_2f.png"],
    2: ["y2_0f.png", "y2_1f.png", "y2_2f.png", "y2_3f.png"],
    3: ["y3_0f.png", "y3_1f.png", "y3_2f.png"],
    4: ["y4_0f.png", "y4_1f.png"],
    5: ["y5_0f.png", "y5_1f.png", "y5_2f.png"],
    6: ["y6_0f.png", "y6_1f.png"],
    7: ["y7_0f.png"],
    8: ["y8_0f.png", "y8_1f.png"],
    9: ["y9_0f.png", "y9_1f.png"]
}
let each_year_current_img = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 紀錄當前各月份使用到第幾張圖

function get_year_num(y_n){
    let re = year_img_path + year_imgs[y_n][each_year_current_img[y_n]]; // 回傳的字串
    let y_n_length = year_imgs[y_n].length; // 該月份的總圖片數

    if (each_year_current_img[y_n] >= y_n_length-1){
        each_year_current_img[y_n] = 0;
    }else{
        each_year_current_img[y_n]++;
    }

    return re;
}