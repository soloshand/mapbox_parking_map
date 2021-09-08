
import Firebase from 'firebase';

const fireConfig = {
    apiKey: process.env.PARKING_APP_API_KEY,
    authDomain: process.env.PARKING_APP_AUTH_DOMAIN,
    databaseURL: process.env.PARKING_APP_DATABASE_URL,
    projectId: process.env.PARKING_APP_PROJECT_ID,
    storageBucket: process.env.PARKING_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.PARKING_APP_MESSAGING_SENDER_ID
}
