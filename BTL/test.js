function toggleMenu() {
  var dropdownMenu = document.getElementById("myDropdown");
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
}

// Đóng menu khi người dùng bấm ra ngoài menu
window.onclick = function(event) {
  if (!event.target.matches('.menu-btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === 'block') {
        openDropdown.style.display = 'none';
      }
    }
  }
}
