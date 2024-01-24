const express = require('express')
const app = express()
const cors = require('cors');
const port = 5001

app.set('port', process.env.PORT || 5001);
app.locals.title = 'Golfer';

//middleWear
app.use(cors());
app.use(express.json());
app.locals.golfer = [
  {
  id: 1,
  name: "Hunter",
  }
]

app.get('/', (req, res) => {
  res.send(app.locals.golfer);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});