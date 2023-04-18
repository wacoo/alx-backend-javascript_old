/* return promise */

export default function getFullResponseFromAPI(succuss) {
  return new Promise(function(resolve, reject){
    if (succuss){
      resolve({'status': 200, 'body': 'Succuss'});
    } else {
      reject("The fake API is not working currently");
    }
  });
}
