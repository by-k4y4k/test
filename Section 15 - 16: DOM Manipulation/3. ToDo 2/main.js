let allLis = document.querySelectorAll("li");

for (let i = 0; i < allLis.length; i++) {
  allLis[i].addEventListener("mouseover", function() {
    // don't highlight something that is checked out
    if (!this.classList.contains("done")) {
      this.classList.add("selected");
    }
  });
  allLis[i].addEventListener("mouseout", function() {
    this.classList.remove("selected");
  });
  allLis[i].addEventListener("click", function() {
    this.classList.toggle("done");
  });
}
