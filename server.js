
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles= {
'article-one' : {
title: 'Poem-1',
heading:'First Poem|Ruyard Kipling',
content: `<p>
If you can keep your head when all about you
Are losing theirs and blaming it on you;
If you can trust yourself when all men doubt you,
But make allowance for their doubting too:
If you can wait and not be tired by waiting,
Or, being lied about, don't deal in lies,
Or being hated don't give way to hating,
And yet don't look too good, nor talk too wise;
</p>

<p>
If you can dream - and not make dreams your master;
If you can think - and not make thoughts your aim,
If you can meet with Triumph and Disaster
And treat those two impostors just the same:.
If you can bear to hear the truth you've spoken
Twisted by knaves to make a trap for fools,
Or watch the things you gave your life to, broken,
And stoop and build'em up with worn-out tools;
</p>

<p>
If you can make one heap of all your winnings
And risk it on one turn of pitch-and-toss,
And lose, and start again at your beginnings,
And never breathe a word about your loss:
If you can force your heart and nerve and sinew
To serve your turn long after they are gone,
And so hold on when there is nothing in you
Except the Will which says to them: "Hold on!"
</p>`
},
'article-two' : {
    title: 'Poem-2',
    heading:'Second Poem|Sarah',
    content: `<p>
Imagine if I was given one moment,
just a single slice of my past.
I could hold it close forever,
and that moment would always last.
</p>


<p>
I'd put the moment in a safe,
within my hearts abode.
I could open it when I wanted,
and only I would know the code.
</p>

<p>
I could choose a time of laughing,
a time of happiness and fun.
I could choose a time that tried me,
through everything I've done.
</P>

<p>
I sat and thought about what moment,
would always make me smile.
One that would always push me,
to walk that extra mile.
</p>

<p>
If I'm feeling sad and low,
if I'm struggling with what to do.
I can go and open my little safe,
and watch my moment through.
</p>

<p>
There are moments I can think of,
that would lift my spirits everytime.
The moments when you picked me up,
when the road was hard to climb.
</p>

<p>
For me to only pick one moment,
to cherish, save and keep,
Is proving really difficult,
as I've gathered up a heap!
</p>

<p>
I've dug deep inside my heart,
found the safe and looked inside,
there was room for lots of moments,
in fact hundreds if I tried.
</p>

<p>
I'm building my own little library,
embedded in my heart,
for all the moments spent with you,
before you had to part.
</p>

<p>
I can open it up whenever I like,
pick a moment and watch it through,
My little library acts as a promise,
I'll never ever forget you
</p>`
}
};


function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;

var htmlTemplate = `
<html>
    
    <head>
    
    <title>
        ${title}
    </title>
    <meta name ="viewport" content = "width-device-width,initial-scale = 1" />
    <link href="/ui/style.css" rel="stylesheet" />

    
    </head>
     
     <body>
    <div class = "Style">
    <div>
       <a href = "/"> Home Page </a>
    </div>
    <hr/>
    
    <h1>
        ${heading}
    </h1>
    
    <div>
        Date
    </div>
    
   ${content}
   </div>
   </body>

   </html> 
   `;
   return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req,res) {
    var articleName = req.params.articleName;
res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function (req,res) {
res.send(createTemplate(articleTwo));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log('IMAD course app listening on port ${port}!');
});


