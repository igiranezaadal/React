export function rps(p1: string, p2: string): string {
  if (p1 === p2) {
    return "Draw!";
  }
  
  if (p1 === 'rock') {
    if (p2 === 'paper') { return "Player 2 won!"; }
    else { return "Player 1 won!"; }
  } else if (p1 === 'paper') {
    if (p2 === 'rock') { return "Player 1 won!"; }
    else { return "Player 2 won!"; }
  } else {
    if (p2 === 'paper') { return "Player 1 won!"; }
    else { return "Player 2 won!"; }
  }
}
