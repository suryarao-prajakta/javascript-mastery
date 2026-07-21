function check() {
    let value = Number(document.getElementById("data").value);
    let result;

    if (value > 0) {
        result = `${value} is a Positive Number`;
    }else if (value < 0) {
        result = `${value} is a Negative Number`;
    }else {
        result = "Zero";
    }

    document.getElementById("res").innerText = result;
}