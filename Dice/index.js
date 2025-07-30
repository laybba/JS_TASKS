function refreshPage() {
    const randomNumber_1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber_2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".container_1 .dice img").setAttribute("src", `images/dice${randomNumber_1}.png`);
    document.querySelector(".container_2 .dice img").setAttribute("src", `images/dice${randomNumber_2}.png`);

    if(randomNumber_1 > randomNumber_2) {
        document.querySelector("#result").textContent = "Player 1 Wins!";
    } else if(randomNumber_1 < randomNumber_2) {
        document.querySelector("#result").textContent = "Player 2 Wins!";
    } else {
        document.querySelector("#result").textContent = "It's a Draw!";
    }
}

