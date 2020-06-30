import ApiKeys from './ApiKeys';
import * as Firebase from 'firebase';

export default Firebase.initializeApp(ApiKeys.FirebaseConfig);
