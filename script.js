function reverseNumber() {
    const input = document.getElementById("numberInput").value;
    const reversed = input.split('').reverse().join('');
    document.getElementById("numberResult").innerHTML = "Reversed Number: " + reversed;
}
