function convert() {
    let celsius = document.getElementById("data").value;
    let fahrenheit =(celsius * 1.8) + 32;
    document.getElementById("get").innerText = `${celsius} celsius= ${fahrenheit} fahrenheit`;
}