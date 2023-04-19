/* accept first and lastname as a parameter adn return a promise */

export default function signUp(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}
