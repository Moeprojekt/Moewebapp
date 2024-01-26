var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();
//const PORT = process.env.PORT || 80;


app.use(morgan('dev'));
app.use(express.static('client'));


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,recording-session");
    next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/api', (req, res) => {
    res.send({
        method : req.method,
        message : `True`,
        status : '200',
        lets_connected : {
            github : 'https://github.com/Moeprojekt'
        }
    });
});


app.get('*', (req, res) => {
    res.status(404).json({
        method : req.method,
        message : 'cant find spesific endpoint, please make sure you read a documentation',
        status : false,
        code : 401,
    });
});

app.listen(3000, () => {
    console.log(`Ya ya ya`)
});
