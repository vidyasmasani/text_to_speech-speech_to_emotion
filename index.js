const express = require('express');
const bodyparser = require('body-parser');
const gTTS = require('gtts');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended : true}));

app.set('view engine', 'ejs');

app.get('/',(req, res) => {
    res.render('index');
});

app.get('/hear', function (req, res) {
    const gtts = new Gtts(req.query.text, "en");
    gtts.stream().pipe(res);
});

app.post('/',(req, res) => {
    const text = req.body.text;
    const gtts = new gTTS(text, "en");

    gtts.save("output_"+Date.now()+".mp3", function (err, result) {
        if(err) { throw new Error(err) }
        console.log('Success! Open file in the root directory output_'+Date.now()+'.mp3 to hear result.');
    })

    res.end("Saved to the root folder");
});

app.listen(5000, function() {
    console.log("listening 5000 ");
})