/**
 * track within weakMap the number if times queryAPI is called
 */

export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (!(weakMap.has(endpoint))) {
    weakMap.set(endpoint, 0);
  }
  if (weakMap.get(endpoint) < 5) {
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  } else {
    throw new Error('Endpoint load is high');
  }
}
