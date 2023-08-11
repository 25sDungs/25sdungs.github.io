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