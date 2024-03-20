let zero = document.getElementById('zero');
zero.innerHTML = zero.value;
let lastPage = 10;
function pageTurnNext () {
    if (zero.value < lastPage) {
        let i = zero.value;
        zero.innerHTML = (zero.value +++ 1);
        zero.value = zero.innerHTML;
        console.log('Page' , zero.value);
        document.getElementById(i).classList.toggle('inactive');
        console.log(document.getElementById(i));
        document.getElementById(zero.value).classList.toggle('inactive');

    }
}
function pageTurnBack () {
    if (zero.value > 0) {
        let i = zero.value;
        zero.innerHTML = (zero.value - 1);
        zero.value = zero.innerHTML;
        console.log('Page' , zero.value);
        document.getElementById(i).classList.toggle('inactive');
        console.log(document.getElementById(i));
        document.getElementById(zero.value).classList.toggle('inactive');

    }
}