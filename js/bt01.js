//1.Tính tổng số chẵn từ 1 đến n. Với n nhập từ người dùng

document.getElementById("submit").addEventListener("click",sumEven);

function sumEven(){
    var number = parseInt(document.getElementById("number").value);
    var result = 0;
    for(i = 0; i <= number;i = i + 2){
        result += i;
    }

    document.getElementById("txtThongBao").innerHTML = result;

}