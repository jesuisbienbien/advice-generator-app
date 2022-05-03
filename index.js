const diceButton = document.getElementById("dice-button");

function fetchAPI(){
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.getElementById("advice-id").innerHTML = data.slip.id;
        document.getElementById("advice").innerHTML = data.slip.advice;
    });
}


diceButton.addEventListener("click", (e) => {
    fetchAPI();
} )

fetchAPI();