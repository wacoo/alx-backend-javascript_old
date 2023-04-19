/* */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);

  return Promise.allSettled([promise1, promise2])
    .then((value) => {
      value.map((val) => ({
        status: val.status,
        value: val.status === 'fulfilled' ? val.value : val.reason.toString(),
      }));
    });
}
