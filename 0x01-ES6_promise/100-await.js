/* write async function with two functions as param, return object */

import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (e) {
    return { photo: null, user: null };
  }
}
