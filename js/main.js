function navigate(pageId) {
  // Hide all sections
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active");
    sec.style.display = "none";
  });

  // Show selected page
  let page = document.getElementById(pageId);
  page.style.display = "block";
  setTimeout(() => page.classList.add("active"), 50);
}
