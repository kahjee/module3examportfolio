const url = document.getElementById("films");

url.onchange = function() {
    const userOption = this.options[this.selectedIndex];
    if (userOption.value != "none") {
        window.open(userOption.value, "Studio Ghibli Film", "")
    }
}