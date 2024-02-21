const express = require('express')
const app = express();
const port = 3020;
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Servidor escoltant al port: ${port}`);
})
