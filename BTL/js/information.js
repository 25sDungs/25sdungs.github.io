window.onload = function () {
  let nameElement = document.querySelector('.name');
  let avtElement = document.querySelector('.avt');
  let actElements = document.querySelectorAll('.active');
  let bElements = document.querySelectorAll('.menuflex');
  let menu = document.querySelector('.dropdown-menu');
  let bodyElement = document.getElementsByTagName('body')[0];
  nameElement.addEventListener('click', viewprofile);
  avtElement.addEventListener('click', viewprofile);

  $(document).ready(() => {
    $(".add-fr").click(function () {
      let $button = $(this);
      if (!$button.hasClass("invitation-sent")) {
        $button.addClass("invitation-sent");
        $button.html(`<i class="fa-solid fa-check animate__animated animate__bounceIn"></i>`);
        const $removeButton = $(this).siblings(".remove-fr");
        $removeButton.html("Hủy");
      }
    });
    $(".remove-fr").click(function () {
      const $removeButton = $(this);
      const $addButton = $removeButton.siblings(".add-fr");

      if ($removeButton.html() === "Hủy") {
        $removeButton.html("Xóa, Gỡ");
        $addButton.html("+ Thêm bạn bè");
        $addButton.removeClass("invitation-sent");
      } else {
        let a = confirm("Bạn có thật sự muốn xóa?");
        if (a) {
          $removeButton.parent().parent().parent(".user-left").remove();
        }
      }
    });
    $(".acp-fr").click(function () {
      let $button = $(this);
      if (!$button.hasClass("invitation-sent")) {
        $button.addClass("invitation-sent");
        $button.html(`<i class="fa-solid fa-check animate__animated animate__bounceIn"></i>`);
        const $removeButton = $(this).siblings(".del-fr");
        $removeButton.html("Hủy");
      }
    });
    $(".del-fr").click(function () {
      const $removeButton = $(this);
      const $addButton = $removeButton.siblings(".acp-fr");

      if ($removeButton.html() === "Hủy") {
        $removeButton.html("Xóa, Gỡ");
        $addButton.html("Chấp nhận");
        $addButton.removeClass("invitation-sent");
      } else {
        let a = confirm("Bạn có thật sự muốn xóa?");
        if (a) {
          $removeButton.parent().parent().parent(".user-top").remove();
        }
      }
    });
    $(".friend").click(() => {
      $(".sub-nof").fadeIn('fast');
    });
    // Sự kiện click bên ngoài "sub-nof"
    $(document).click((event) => {
      if (!$(event.target).closest(".sub-nof, .friend").length) {
        $(".sub-nof").fadeOut('fast');
      }
    });
    $(".nof").click(() => {
      $(".menu-nof").fadeIn('fast');
    })
    // Sự kiện click bên ngoài "menu-nof"
    $(document).click((event) => {
      if (!$(event.target).closest(".menu-nof, .nof").length) {
        $(".menu-nof").fadeOut('fast');
      }
    });
    $(".mess").click(() => {
      $(".sub-chat").fadeIn('fast');
    })
    // Sự kiện click bên ngoài "menu-nof"
    $(document).click((event) => {
      if (!$(event.target).closest(".sub-chat, .mess").length) {
        $(".sub-chat").fadeOut('fast');
      }
    });
    $(".fa-xmark").click(() => {
      $(".pop-up").fadeOut('fast');
    })
    $(".user-chat").click(() => {
      $(".pop-up").show().addClass("animate__animated animate__slideInRight");
    })
    $('.space .fa-gear').click((event) => {
      event.stopPropagation(); // Ngăn chặn sự kiện click lan tỏa lên cấp cao hơn
      $('.theme').fadeIn('fast');
    });

    $(document).click((event) => {
      if (!$(event.target).closest(".theme, .light-dark").length) {
        $(".theme").fadeOut('fast');
      }
    });
    $(document).ready(function() {
      checkFooterVisibility(); // Kiểm tra lần đầu khi tải trang
      
      $(window).on('resize', function() {
          checkFooterVisibility(); // Kiểm tra lại khi cửa sổ được thay đổi kích thước
      });
      
      function checkFooterVisibility() {
          if (window.innerWidth < 1000) {
              $('footer').hide(); // Sử dụng hàm hide() để ẩn footer
          } else {
              $('footer').show(); // Sử dụng hàm show() để hiển thị footer
          }
      }
  });
    $('#theme-toggle').change(() => {
      if ($('#theme-toggle').prop('checked')) {
        $('.content, .news, .create, .users-not-fr,.menuflex,.see-all, .users, .left, .mid, .right, .comment, .img16-9-content, .img4-3-content, .img-square-content , .img-more-content').addClass('border-theme');
        $('.feeds a').addClass('theme-text');
        $('.user, .user-chat, .content-nof, .user-top').addClass('user-theme');
        $('body').addClass('scroll-theme');
        $('.comment .id').addClass('comment-theme');
        $('.upload, .add-fr, .acp-fr').addClass('theme-button');
        $('body').addClass('dark-theme');
        $('.react sup, .react div, .top-inf a').addClass('theme-text');
        $('.post #textarea, #write-comment,#search,.preview').addClass('border-radius');
        $('header, .top-inf').addClass('little-dark-theme');
        $('.table,.sub-nof, .menu-nof, .sub-chat,.dropdown-menu').addClass('little-dark-theme');
        $('.news p').addClass('theme-text');
        $('.news h5,.news i, .see-all b, footer').addClass('theme-text');
        $('.post').addClass('little-dark-theme');
        $('.feeds').addClass('little-dark-theme');
        $('.contact, .focus-inf').addClass('little-dark-theme');
        $('.bg').addClass('bg-theme');
        $('.nav-info').addClass('nav-theme');
      } else {
        $('.nav-info').removeClass('nav-theme');
        $('.bg').removeClass('bg-theme');
        $('.content, .news, .create, .users-not-fr,.menuflex, .users,.see-all, .comment, .img16-9-content, .img4-3-content, .img-square-content ,.left, .mid, .right, .img-more-content').removeClass('border-theme');
        $('.user, .user-chat, .content-nof, .user-top').removeClass('user-theme');
        $('.comment .id').removeClass('comment-theme');
        $('body').removeClass('scroll-theme');
        $('.upload, .add-fr,.acp-fr').removeClass('theme-button');
        $('.feeds a').removeClass('theme-text');
        $('.react sup, .react div, footer').removeClass('theme-text');
        $('.post #textarea, #write-comment,#search,.preview').removeClass('border-radius');
        $('header, .top-inf, .focus-inf').removeClass('little-dark-theme');
        $('body').removeClass('dark-theme');
        $('.news p').removeClass('theme-text');
        $('.news h5,.news i, .see-all b, .top-inf a').removeClass('theme-text');
        $('.table,.sub-nof, .menu-nof, .sub-chat,.dropdown-menu').removeClass('little-dark-theme');
        $('.post').removeClass('little-dark-theme');
        $('.feeds').removeClass('little-dark-theme');
        $('.contact').removeClass('little-dark-theme');
      }
    });
  })
  actElements.forEach(function (element) {
    element.addEventListener('click', viewprofile);
  });

  bElements.forEach(function (element) {
    element.addEventListener('click', viewprofile);
  });
  bodyElement.addEventListener('click', function (event) {
    let targetElement = event.target;

    // Kiểm tra nếu phần tử được nhấp chuột không thuộc menu, name hoặc avt
    if (!menu.contains(targetElement) && !nameElement.contains(targetElement) && !avtElement.contains(targetElement)) {
      menu.style.display = 'none'; // Ẩn menu nếu không thuộc menu, name hoặc avt và menu đang hiển thị
    }
  });
}
let scrollmid = document.querySelector('.secmid');
let backToTopBtn = document.getElementById('backToTopBtn');
window.addEventListener('scroll', function () {
  var backToTopBtn = document.getElementById('backToTopBtn');

  // Hiển thị nút "Back to top" khi cuộn xuống 10px
  if (window.scrollY > 10) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});
scrollmid.addEventListener('scroll', function () {
  // Hiển thị nút "Back to top" khi phần .secmid được cuộn xuống ít nhất 10px
  if (scrollmid.scrollTop > 10) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

// Xử lý sự kiện khi nhấp vào nút "Back to top"
backToTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Cuộn mượt đến đầu trang
  })
  scrollmid.scrollTo({
    top: 0,
    behavior: 'smooth' // Cuộn mượt đến đầu trang
  });
});

fetch('../json/users-chat.json')
  .then(response => response.json())
  .then(data => {
    const userList = document.querySelector('.users-chat');
    data.forEach(user => {
      const userCard = document.createElement('div');
      userCard.className = 'user-chat';
      userCard.innerHTML = `
      <div class="items-img ${user.status}"><img
      src="${user.img}"
      alt="user">
          <${user.element} class="${user.class}">${user.content}</${user.element}>
      </div>
        <div class="name-chat">
           <b>${user.name}</b>
           <div class="title-chat">
              <p>${user.chat}</p>
              <p>${user.time}</p>
            </div>    
        </div>
    `;
      userList.appendChild(userCard);
    });
  })
  .catch(error => console.error('Error fetching user data:', error));
function viewprofile() {
  let menu = document.querySelector('.dropdown-menu');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}
fetch('../json/user-contact.json')
  .then(response => response.json())
  .then(data => {
    const userList = document.querySelector('.users');
    data.forEach(user => {
      const userCard = document.createElement('div');
      userCard.className = 'user';
      userCard.innerHTML = `
    <div class="items-img ${user.status}"><img
        src="${user.img}"
        alt="user">
      <${user.element} class="${user.class}">${user.active}</${user.element}>
    </div>
    <div class="items-name"><b>${user.name}</b></div>
    `;
      userList.appendChild(userCard);
    });
  })
  .catch(error => console.error('Error fetching user data:', error));
fetch('../json/nofication.json')
  .then(response => response.json())
  .then(data => {
    const notifList = document.querySelector(".list-nof");
    data.forEach(user => {
      const nofiCard = document.createElement('div');
      nofiCard.className = 'content-nof';
      nofiCard.innerHTML = `
       <div class="items-img"><img
          src="${user.img}"
           alt="user">
             <i class="${user.type}"></i>
        </div>
           <div class="stranger">
             <b>${user.name}</b>
               <div class="info-nof">
                 <p>${user.title}</p>
                 <p class="time">${user.time}<p>
                </div>
            </div>
      `;
      notifList.appendChild(nofiCard);
    })
  })
  .catch(error => console.error('Error fetching user data:', error));
fetch('../json/acceptfr.json')
  .then(response => response.json())
  .then(data => {
    const userList = document.querySelector('.sub-nof');
    data.forEach(user => {
      const userCard = document.createElement('div');
      userCard.className = 'user-top';
      userCard.innerHTML = `
      <div class="items-img"><img
      src="${user.img}"
      alt="user">
      </div>
      <div class="stranger">
        <b>${user.name}</b>
        <div class="add-remove">
          <button class="acp-fr">${user.addfr}</button>
          <button class="del-fr">${user.remove}</button>
        </div>
      </div>
    `;
      userList.appendChild(userCard);
    });
  })
  .catch(error => console.error('Error fetching user data:', error));
function viewprofile() {
  let menu = document.querySelector('.dropdown-menu');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}


