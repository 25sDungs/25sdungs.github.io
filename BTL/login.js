const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
function buttonPress() {

    // Hiệu ứng lún xuống
    document.getElementById("myButton").classList.add("pressed");

    // Đặt thời gian giữ hiệu ứng
    setTimeout(function() {
        document.getElementById("myButton").classList.remove("pressed");
    }, 100);
}
// Lắng nghe sự kiện cuộn trang
window.addEventListener('scroll', function () {
  var backToTopBtn = document.getElementById('backToTopBtn');

  // Hiển thị nút "Back to top" khi cuộn xuống 10px
  if (window.scrollY > 10) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});
// Xử lý sự kiện khi nhấp vào nút "Back to top"
document.getElementById('backToTopBtn').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Cuộn mượt đến đầu trang
  });
});
function buttonPress() {
  // Các xử lý khác mà bạn muốn thực hiện khi nút được nhấn có thể được thêm ở đây

  // Hiệu ứng lún xuống
  document.getElementById("myButton").classList.add("pressed");

  // Đặt thời gian giữ hiệu ứng
  setTimeout(function () {
    document.getElementById("myButton").classList.remove("pressed");
  }, 100);
}
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();
  if (scrollTop > 160) {
    $('.nav').addClass("fixed");
  } else {
    $(".nav").removeClass("fixed");
  }
}) 