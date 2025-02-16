export function melangerUnTableau(tableau) {
  //cette fonction reçoi un tableau et renvoi un autre avec l'ordre des éléments changés
  return [...tableau].sort(() => Math.random() - 0.5);
}
