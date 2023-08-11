
// Tránh thực thi mã khi các phần tử HTML chưa được tải hoàn toàn
window.onload = function () {
  const slideImage = document.querySelectorAll(".slide-image");
  const slidesContainer = document.querySelector(".slides-container");
  const navigationDots = document.querySelector(".navigation-dots");

  let numberOfImages = slideImage.length;
  let slideWidth = slideImage[0].clientWidth;
  let currentSlide = 0;
  let autoSlideInterval;

  // Khởi tạo slide ảnh
  function init() {
    slideImage.forEach((img, i) => {
      img.style.left = i * 100 + "%";
    });

    slideImage[0].classList.add("active");

    createNavigationDots();
  }

  init();

  // tạo thanh nút chuyển ảnh
  function createNavigationDots() {
    for (let i = 0; i < numberOfImages; i++) {
      const dot = document.createElement("div");
      dot.classList.add("single-dot");
      navigationDots.appendChild(dot);

      dot.addEventListener("click", () => {
        goToSlide(i);
      });
    }

    navigationDots.children[0].classList.add("active");
  }

  // chuyển slide
  function goToSlide(slideNumber) {
    slidesContainer.style.transform =
      "translateX(-" + slideWidth * slideNumber + "px)";

    currentSlide = slideNumber;

    setActiveClass();
  }

  // Set Active Class
  function setActiveClass() {
    // Set active class for Slide Image
    let currentActive = document.querySelector(".slide-image.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");

    // Set active class for navigation dots
    let currentDot = document.querySelector(".single-dot.active");
    currentDot.classList.remove("active");
    navigationDots.children[currentSlide].classList.add("active");
  }

  // Hàm chuyển đổi ảnh tự động
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      // Kiểm tra nếu đang ở ảnh cuối cùng, quay lại ảnh đầu tiên
      if (currentSlide === numberOfImages - 1) {
        goToSlide(0);
      } else {
        // Nếu không, chuyển đến ảnh tiếp theo
        goToSlide(currentSlide + 1);
      }
    }, 4000); // 4 giây
  }
  // Bắt đầu chuyển ảnh tự động khi trang web tải hoàn tất
  startAutoSlide();

  // Dừng chuyển ảnh tự động khi người dùng tương tác với slider
  slidesContainer.addEventListener("mouseover", () => {
     clearInterval(autoSlideInterval);
  });

  // Tiếp tục chuyển ảnh tự động khi người dùng rời chuột khỏi slider
  slidesContainer.addEventListener("mouseout", () => {
    startAutoSlide();
  });

  // Cập nhật kích thước ảnh và vị trí khi kích thước trình duyệt thay đổi
  window.onresize = function () {
    slideWidth = slideImage[0].clientWidth;
    slidesContainer.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
  };
};

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
  if (window.innerWidth >= 600) {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > 160) {
      $('nav').addClass("fixed");
    } else {
      $("nav").removeClass("fixed");
    }
  } else {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > 150) {
      $('nav').addClass("fixed-mobile");
    } else {
      $("nav").removeClass("fixed-mobile");
    }
  }
}) 