var total_drums = document.querySelectorAll(".drum").length;

for (var i = 0; i < total_drums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicked!");
  });
}
