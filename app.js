var users = 0;
var __dirname = "/var/www/html/";

var app = require('express')();

var http = require('http').Server(app);
var io = require('socket.io')(http);

var PythonShell = require('python-shell');

app.get('/', function (req, res) {
    res.sendFile(__dirname + 'index.html');
});
app.get('/css/bootstrap.css', function (req, res) {
    res.sendFile(__dirname + 'css/bootstrap.css');
});
app.get('/css/range.css', function (req, res) {
    res.sendFile(__dirname + 'css/range.css');
});
app.get('/js/bootstrap.min.js', function (req, res) {
    res.sendFile(__dirname + 'js/bootstrap.min.js');
});
app.get('/bg.png', function (req, res) {
    //res.writeHead(200, {'Content-Type': 'image/png'});
    res.sendFile(__dirname + '/bg.png');
    //res.end(app.readFileSync('bg.png'), 'binary');
});

http.listen(80, function () {
    console.log('listening on port 80');
});

/* on connection */
io.on('connection', function (socket) {
    users++;
    console.log('a user connected');
    console.log('there are now: ' + users + ' users');

    //when using a move command
    socket.on('move', function (index, value) {
        var options = {
            mode: 'text',
            pythonOptions: ['-u'],
            scriptPath: '',
            args: [index, value]
        };
        PythonShell.run('python.py', options, function (err, results) {
            if (err)
                throw err;
            // results is an array consisting of messages collected during execution
            console.log('moving servo ' + index + ' with a value of: ' + value);
        });

    });
    socket.on('disconnect', function () {
        users--;
        console.log('user disconnected');
        console.log('there are now: ' + users + ' users');

        /* reset the positions if no users are connected */
        if (users === 0) {
            /* servo 0 (gripper) */
            var options = {
                mode: 'text',
                pythonOptions: ['-u'],
                scriptPath: '',
                args: [0, 300]
            };
            PythonShell.run('python.py', options, function (err, results) {
                if (err)
                    throw err;

                console.log('moving servo 0 to starting position');
            });

            sleep(2000); //wait for the servo to be completely reset before continueing

            /* servo 1 (forearm) */
            var options = {
                mode: 'text',
                pythonOptions: ['-u'],
                scriptPath: '',
                args: [1, 150]
            };
            PythonShell.run('python.py', options, function (err, results) {
                if (err)
                    throw err;

                console.log('moving servo 1 to starting position');
            });

            sleep(2000); //wait for the servo to be completely reset before continueing

            /* servo 2 (upperarm) */
            var options = {
                mode: 'text',
                pythonOptions: ['-u'],
                scriptPath: '',
                args: [2, 200]
            };
            PythonShell.run('python.py', options, function (err, results) {
                if (err)
                    throw err;

                console.log('moving servo 2 to starting position');
            });

            sleep(2000); //wait for the servo to be completely reset before continueing

            /* servo 3 (foot) */
            var options = {
                mode: 'text',
                pythonOptions: ['-u'],
                scriptPath: '',
                args: [3, 213]
            };
            PythonShell.run('python.py', options, function (err, results) {
                if (err)
                    throw err;

                console.log('moving servo 3 to starting position');
            });
        }

    });

});

function sleep(miliseconds) {
    var currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}