const month_img_path = "img/month/";
const month_imgs = {
    1: "m1_0f.png",
    2: "m2_0f.png",
    3: "m3_0f.png",
    4: "m4_1f.png",
    5: "m5_0f.png",
    6: "m6_1f.png",
    7: "m7_0f.png",
    8: "m8_0f.png",
    9: "m9_1f.png",
    10: "m10_1f.png",
    11: "m11_0f.png",
    12: "m12_1f.png",
}

function get_month_num (m_n){
    return month_img_path + month_imgs[m_n];
}