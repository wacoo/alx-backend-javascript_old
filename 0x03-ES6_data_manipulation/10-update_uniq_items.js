/**
 * return an updated map with intial quantity of
 * param {Map} map
 */

export default function updateUniqueItems(map) {
  for (const key of map.keys()) {
    if (map.get(key) === 1) {
      map.set(key, 100);
    }
  }
  return map;
}
