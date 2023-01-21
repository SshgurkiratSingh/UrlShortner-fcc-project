require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const Shorturl = require('./models/shorturl');

// Basic Configuration
const port = process.env.PORT || 3000;
const urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use('/public', express.static(`${process.cwd()}/public`));
app.set('view engine', 'ejs')
app.get('/', async function(req, res) {
  const urr = await Shorturl.find();
  res.render('index.ejs', { shorturls: urr });
});
app.post('/api/shorturl', async (req, res) => {
  let regex = /^http(s)?:\/\//;
let url = req.body.url;

if (regex.test(url)) {
  console.log(req.body);
  await Shorturl.create({ fullurl: req.body.url })

  const shortgen = await Shorturl.findOne({ fullurl: req.body.url })
  res.json({
    original_url: shortgen.fullurl,
    short_url: shortgen.short
  })
} else {
  res.json({ error: 'invalid url' }
)
}
  
  // res.redirect('/')
})

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello World' });
});
app.get('/api/shorturl/:link', async (req, res) => {
  
  const ure = await Shorturl.findOne({ short: req.params.link });
  console.log(ure);
  console.log(req.params.link);
  ure.clicks++;
  ure.save();

  if (ure === null) {
    res.json({
      error: 69,
      detail: "Not found"
    })
  };
  res.redirect(ure.fullurl)
})
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
