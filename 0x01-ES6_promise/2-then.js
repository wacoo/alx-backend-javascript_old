/* append three handlers to the given promise */
export default function handleResponseFromAPI(promise) {
  promise.then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .then(() => {
      console.log('Got a response from the API');
    });
}
