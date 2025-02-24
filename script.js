function my_fun(val){
    let d = document.getElementById('button');
    d.value= d.value+val
} 

function del_last() {
    let display = document.getElementById("button");
    display.value = display.value.slice(0, -1);
}

function clear_scr(){
    window.location = "index.html"
}

function calculate() {
    let input = document.getElementById('button');
    let result = input.value;

    try {
        input.value = eval(result);
    } catch (error) {
        input.value = 'Error';
    }
}