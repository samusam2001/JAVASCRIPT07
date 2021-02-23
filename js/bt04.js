// 4.Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 + … + x^n (Sử dụng vòng lặp và hàm)

document.getElementById("submit").addEventListener("click",calSqrt);

function calSqrt(){
    var so = parseInt(document.getElementById("number").value);
    var soLT = parseInt(document.getElementById("luyThua").value);

    var tong = 0;
    var lt = 1;

    for(i = 1;i <= so;i++){
        lt = lt * soLT;
        tong += lt;
    }

    document.getElementById("txtThongBao").innerHTML = tong;
}
2