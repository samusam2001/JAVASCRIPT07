// 3.Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + … + n > 10000

window.onload = function(){
    var result = 0;
    var count = 0
    while(result < 10000){
        count++;
        result += count;
    }

    var ketQua = "tổng là: "+result+"<br/> số nguyên dương: "+count;

    document.getElementById("txtThongBao").innerHTML = ketQua;
};