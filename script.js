//   Navbar / sideMenu Submenu control

document.addEventListener("DOMContentLoaded", function () {
  const listContainers = document.querySelectorAll(".list-container");

  listContainers.forEach((container) => {
    const listName = container.querySelector(".listName");
    const listChild = container.querySelector(".listChild");

    listName.addEventListener("click", function () {
      listChild.classList.toggle("hidden");
    });
  });
});

// SideMenu toggle

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu");
  const closeButton = document.getElementById("close");
  const menu = document.getElementById("sidemenu");

  menuButton.addEventListener("click", function () {
    // Toggle visibility of menu button and close button
    menuButton.classList.add("hidden");
    closeButton.classList.remove("hidden");
    menu.classList.remove("hidden");

    // Show/hide the menu items (you may need to adjust this part based on your HTML structure)
    // For example, you can toggle a class on the menu items container to show/hide it
    // Here's an example assuming you have a container with id "menuItems":
    // document.getElementById("menuItems").classList.toggle("hidden");
  });

  closeButton.addEventListener("click", function () {
    // Toggle visibility of close button and menu button
    closeButton.classList.add("hidden");
    menuButton.classList.remove("hidden");
    menu.classList.add("hidden");
    // Show/hide the menu items (you may need to adjust this part based on your HTML structure)
    // Here's an example assuming you have a container with id "menuItems":
    // document.getElementById("menuItems").classList.toggle("hidden");
  });
});
