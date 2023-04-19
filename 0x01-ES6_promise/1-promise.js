/* return promise */

export default function getFullResponseFromAPI(succuss) {
  return new Promise(function(resolve, reject){
    if (succuss){
      resolve({'status': 200, 'body': 'Success'});
    } else {
      reject(new Error("The fake API is not working currently"));
    }
  });
}
