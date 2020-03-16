
/** Rest Operator 
 * 
 * @param  {...any} args 
 */
const introduce = (firstName, house, ...titles) =>
  console.log(`${firstName} of the House ${house},${titles}`);

introduce('Daenerys', 'Targaryen',
  ' The First of Her Name',
  ' The Unburnt',
  ' Queen of the Andals',
  ' The Rhoynar and the First Men',
  ' Queen of Meereen',
  ' Khaleesi of the Great Grass Sea',
  ' Protector of the Realm',
  ' Lady Regent of the Seven Kingdoms',
  ' Breaker of Chains',
  ' Mother of Dragons');

  
// Only the last parameter can be a "rest parameter".