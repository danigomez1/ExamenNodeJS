const express = require('express')
const app = express();
const port = 3020;
const cors = require('cors');
app.use(express.json());
app.use(cors());

//paràmetres firebase
var admin = require("firebase-admin");

var serviceAccount = require("C:\\Users\\redho\\WebstormProjects\\ExamenNodeJS\\src\\exdanielgomezsanchez-firebase-adminsdk-mssy9-34eca29102.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

//mètode put
app.put('/danielGomez/estadi', async (req, res) => {
  const db = admin.firestore();
  const estadi = db.collection('mundial22Gomez')
  const lusail = {lusail: req.body.lusail}
  await estadi.doc('estadi').update({
    lusail: lusail
  })
})

//mètode get
app.get('/danielGomez/jugadors', async (req, res) => {
  const db = admin.firestore();
  const doc = await db.collection('mundial22Gomez').doc('final22Gomez').get();
  const firebaseData = doc.data();
  res.json(firebaseData)
})

app.listen(port, () => {
  console.log(`Servidor escoltant al port: ${port}`);
})
