let myvar = document.getElementById("logo");
myvar.addEventListener("click", function() {
    alert("You clicked the logo!");
});
let mylist = document.getElementsByClassName("tabs");
for (let i = 0; i < mylist.length; i++) {
    mylist[i].addEventListener("click", function() {
        document.getElementsByClassName('unavail')[0].style.display = 'block';
        document.getElementsByClassName('backdrop')[0].style.display = 'block';
    });
}
document.getElementsByClassName('cross')[0].addEventListener("click", function() {
    document.getElementsByClassName('unavail')[0].style.display = 'none';
    document.getElementsByClassName('backdrop')[0].style.display = 'none';
});