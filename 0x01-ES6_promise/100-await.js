import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  try {
    const user = await createUser();
    const photo = await uploadPhoto();
    return { user, photo };
  } catch (error) {
    return { error: error.message };
  }
}

