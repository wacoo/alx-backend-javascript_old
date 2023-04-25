/**
 * track within weakMap the number if times queryAPI is called
 */

export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    if (weakMap.get(endpoint) < 5) {
      weakMap.set(endpoint, weakMap.get(endpoint) + 1);
    } else {
      // console.log(weakMap.get(endpoint));
      throw new Error('Endpoint load is high');
    }
  } else {
    weakMap.set(endpoint, 1);
  }
}
