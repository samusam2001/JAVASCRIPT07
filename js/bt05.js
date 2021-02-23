// 5.Nhập vào n. Tính giai thừa 1*2*...n

document.getElementById("submit").addEventListener("click",cal);

function cal(){
    var so = parseInt(document.getElementById("number").value);

    var tong = 1;

    for(i = 1;i <= so;i++){
        tong *= i;
    }

    document.getElementById("txtThongBao").innerHTML = tong;
}
2