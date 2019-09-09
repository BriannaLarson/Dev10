/*
Creator: Brianna Larson
Date Created: 9/8/19
Date last modified: 9/9/19
*/

function clearErrors() {
  for (var i = 0; i < document.forms["luckySevens"].elements.length; i++) {
    if (document.forms["luckySevens"].elements[i].parentElement.className.indexOf("has-") != -1) {
      document.forms["luckySevens"].elements[i].parentElement.className = "form-group";
    }
  }
}

function resetBet() {
  clearErrors();
  document.forms["luckySevens"][bet].value = "";
  document.getElementById("results").style.display = "none";
  document.getElementById("playButton").innerText = "Play";
  document.forms["luckySevens"]["bet"].focus();
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
  clearErrors();
  var bet = document.forms["luckySevens"]["bet"].value;

  if (bet == "" || isNaN(bet) || bet <= 0) {
    alert("Starting bet must be a number greater than 0.");
    document.forms["luckySevens"]["bet"].parentElement.className = "form-group has-error";
    document.forms["luckySevens"]["bet"].focus();
    return false;
  }

  var sum = 0;
  var amount = bet;
  var totalRolls = 0;
  var highestAmount = bet;
  var rollCount = 0;

  do {
    sum = rollDice() + rollDice();
    if (sum == 7) {
      amount += 4;
    }
    else {
      amount--;
    }
    totalRolls++;
    if (amount > highestAmount) {
      highestAmount = amount;
      rollCount = totalRolls;
    }
  } while (amount > 0);

  document.getElementById("results").style.display = "block";
  document.getElementById("playButton").innerText = "Play Again";
  document.getElementById("startingBet").innerText = "$" + bet;
  document.getElementById("totalRolls").innerText = totalRolls;
  document.getElementById("highestAmount").innerText = "$" + highestAmount;
  document.getElementById("rollCount").innerText = rollCount;

  return false;
}
