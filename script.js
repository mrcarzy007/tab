const tabButtons = document.querySelectorAll(".tablinks");
for (var i = 0; i < tabButtons.length; i++) {
  tabButtons[i].addEventListener("click", function () {
    var tabName = this.dataset.tab;
    var tabContent = document.getElementById(tabName);

    var AllContentTab = document.querySelectorAll(".tabcontent");
    var AllLinksTab = document.querySelectorAll(".tablinks");
    for (let m = 0; m < AllContentTab.length; m++) {
      AllContentTab[m].style.display = "none";
    }
    for (let j = 0; j < AllLinksTab.length; j++) {
      AllLinksTab[j].classList.remove("active");
    }

    tabContent.style.display = "block";
    this.classList.add("active");
  });
}

document.querySelector(".tablinks").click();
