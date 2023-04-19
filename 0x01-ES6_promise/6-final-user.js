/* */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const list = [];
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);
  //.catch((error) => error
  const myPromise = Promise.all([promise1, promise2])
  .then((value) => {
    //console.error(value);
    return {'status': 200, 'value': value};
  }).catch((err) => err);
}
