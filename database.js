
var food = [
    {id: 0, name: 'Bún chả', price: 35, picture: 'bun_cha.jpg', type: 'bún'},
    {id: 1, name: 'Cơm sườn', price: 30, picture: 'com_suon.jpg', type: 'cơm'},
    {id: 2, name: 'Phở', price: 50, picture: 'pho.jpg', type: 'phở'},
    {id: 3, name: 'Mì hoành thánh', price: 40, picture: 'mi_hoanh_thanh.jpg', type: 'mì'},
    {id: 4, name: 'Mì ý', price: 55, picture: 'mi_y.jpeg', type: 'mì'},
    {id: 5, name: 'Bò bít tết', price: 25, picture: 'bo_bit_tet.jpg', type: 'other'},
    {id: 6, name: 'Cơm chiên gà xối mỡ', price: 30, picture: 'com_chien_ga_xoi_mo.webp', type: 'cơm'},
    {id: 7, name: 'Bánh canh cua', price: 25, picture: 'banh_canh_cua.jpg', type: 'other'},
    {id: 8, name: 'Cháo lòng', price: 15, picture: 'chao_long.jpg', type: 'cháo'},
    {id: 9, name: 'Bánh mì thịt', price: 15, picture: 'banh_mi_thit.webp', type: 'bánh mì'},
    {id: 10, name: 'Bánh tráng trộn', price: 10, picture: 'banh_trang_tron.jpg', type: 'other'},
    {id: 11, name: 'Hamburger', price: 20, picture: 'hamburger.jpg', type: 'other'},
    {id: 12, name: 'Mì cay Hàn Quốc', price: 35, picture: 'mi_cay_han_quoc.jpg', type: 'mì'},
    {id: 13, name: 'Mì xào giòn', price: 30, picture: 'mi_xao_gion.jpg', type: 'mì'},
    {id: 14, name: 'Cá viên chiên', price: 10, picture: 'ca_vien_chien.jpg', type: 'other'},
    {id: 15, name: 'Bò lá lốt', price: 20, picture: 'bo_la_lot.jpg', type: 'other'},
    {id: 16, name: 'Khoai tây chiên', price: 15, picture: 'khoai_tay_chien.jpg', type: 'other'},
    {id: 17, name: 'Cơm chay', price: 10, picture: 'com_chay.jpg', type: 'cơm'},
    {id: 18, name: 'Khoai mỡ chiên', price: 10, picture: 'khoai_mo_chien.webp', type: 'other'},
    {id: 19, name: 'Bún bò huế', price: 30, picture: 'bun_bo_hue.jpg', type: 'bún'},
    {id: 20, name: 'Gà rán KFC', price: 35, picture: 'ga_ran_kfc.webp', type: 'other'},
    {id: 21, name: 'Bánh bao trứng cút', price: 25, picture: 'banh_bao_trung_cut.jpg', type: 'bánh bao'},
    {id: 22, name: 'Bánh tiêu', price: 5, picture: 'banh_tieu.webp', type: 'other'},
    {id: 23, name: 'Sushi cá hồi', price: 30, picture: 'sushi_ca_hoi.jpg', type: 'other'},
    {id: 24, name: 'Bánh rán', price: 20, picture: 'banh_ran.webp', type: 'other'},
]

var size = food.length;
var cart = []
for(let i = 0; i < size; i++) cart.push(0);


var isUser = true //true - Tên người dùng xuất hiện trên Nav Bar và có LogOut, false - Có Login
var user = {
    username: 'emma_watson',
    password: '123456789',
    userID: 1,
    Name: 'Emma Watson',
    Email: 'emma_watson123@gmail.com',
    Address: 'Paris',
    DOB: '15/4/1990',
    Phone: ['0123456789', '0987654321'],
    Rank: 1,
    Point: 0
}


var total_percent_discount = 0; // Max 0.2 (20%)
var total_voucher_value = 0; // Max 20 (20.000d)

var userPromotion = user['Rank']/100; //Level tối đa là 10, Level x được giảm x%
increase_percent_discount(userPromotion)

function increase_percent_discount(percent)
{
    total_percent_discount += percent;
    if (total_percent_discount > 0.2)
        total_percent_discount = 0.2;
}

function increase_voucher_value(value)
{
    total_voucher_value += value;
    if (total_voucher_value > 20)
        total_voucher_value = 20;
}



var promotion = [
    {
        Start_date: '',
        Expiration_data: '',
        Type: '',
        Code: 'helloworld!',
        NumberOf: 1,
        Voucher_value: 5,
        Percent_discount: 0.05},
    {
        Start_date: '',
        Expiration_data: '',
        Type: '',
        Code: 'databaseweb',
        NumberOf: 1,
        Voucher_value: 10,
        Percent_discount: 0},
]


