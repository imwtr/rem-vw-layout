let http = require('http'),
    fs = require('fs'),
    path = require('path'),
    url = require('url');

http.createServer((req, res) => {
    let {pathname} = url.parse(req.url),
        raw;

    console.log('Request: ', req.url);

    try {
        raw = fs.createReadStream(path.resolve(__dirname, pathname.replace(/^\//, '')));

        raw.on('error', (err) => {
            console.log(err);

            if (err.code === 'ENOENT') {
                res.writeHeader(404, {'content-type': 'text/html;charset="utf-8"'});
                res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
                res.end();
            }
        });

        res.writeHead(200, {});
        raw.pipe(res);
    } catch (e) {
        console.log(e);
    }
}).listen(4321);

console.log('Server listening ', 'http://localhost:4321/');
