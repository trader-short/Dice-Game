const rounds = prompt("Enter the numbers of rounds you'd like to play", 5);
const player1 = prompt("Enter player1 name");
const player2 = prompt("Enter player2 name");
document.getElementById("player1").textContent = player1;
document.getElementById("player2").textContent = player2;
var score1 = 0;
var score2 = 0;
var count = 1;
function myFunction(){

  if (count <= rounds) {
    var n1 = Math.random();
    n1 = Math.floor(n1*6) + 1;
    var n2 = Math.random();
    n2 = Math.floor(n2*6) + 1;
    var i1 = "images/dice" + n1 +".png";
    var i2 = "images/dice" + n2 +".png";
    document.getElementById('img1').src = i1;
    document.getElementById('img2').src = i2;
    if (n1>n2){
      document.getElementById('heading').textContent = "Round " + count + " winner: "+ player1;
      score1++;
      document.getElementById('score').textContent = score1 + " - " + score2;
    }
    else if (n2 > n1){
      document.getElementById('heading').textContent = "Round " + count + " winner: "+ player2;
      score2++;
      document.getElementById('score').textContent = score1 + " - " + score2;

    }
    else {
      document.getElementById('heading').textContent = "It's a draw, let's try again!";
      score1++;
      score2++;
      document.getElementById('score').textContent = score1 + " - " + score2;

    }
    count = count + 1;

  }
  else if(score1 > score2){
    alert("Game finished! " + player1 +" wins by " + score1 +" - "+score2);
  }
  else if (score2 > score1){
    alert("Game finished! " + player2 +" wins by " + score2 +" - "+score1);
  }
  else{
    alert("Game finished and it's a draw!!")
  }

}
