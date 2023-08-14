$(document).ready(() => {
    $("#taoSoMayMan").click(function () {
        let h= document.getElementById("soMayMan");
        h.innerText ="Số may mắn của bạn là: " + Math.floor(Math.random() * 100);
    })
})


