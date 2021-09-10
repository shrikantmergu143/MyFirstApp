
import * as admin from 'firebase-admin';

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://javapythonphp-default-rtdb.firebaseio.com"
});
const uid="LnhVsPRnznc8Vk9yePOiE4p7SkD3";
admin.auth().createCustomToken(uid)
     .then((snapshot)=>{
       console.log(snapshot)
     })
     .catch((e)=>{
       console.log(e)
     })
