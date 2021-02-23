// 2.Có bao nhiêu số chia hết cho 3 từ 0-1000

window.onload = function(){
    var result = 0;
    for(i = 0;i <= 1000;i++){
        if(i % 3 == 0){
            result += i;
        }
    }

    document.getElementById("txtThongBao").innerHTML = result;
};