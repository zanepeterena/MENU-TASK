
document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".moveBtn");
    var list1 = document.getElementById("list1");
    var list2 = document.getElementById("list2");

    function moveItem(e) {
        var moveTo = this.parentElement.parentElement == list1 ? list2 : list1;
        moveTo.appendChild(this.parentElement);
    }

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", moveItem);
    }
});

