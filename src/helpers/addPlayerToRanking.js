export default function addPlayerToRanking(player) {
  const ranking = JSON.parse(localStorage.getItem('ranking'));
  if (!ranking) {
    localStorage.setItem('ranking', JSON.stringify([player]));
  } else {
    ranking.push(player);
    localStorage.setItem('ranking', JSON.stringify(ranking));
  }
}