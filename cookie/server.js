/**
 * Created by moyu on 2017/3/25.
 */

const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
    res.setHeader('Set-Cookie', ['identity=@999999999999@; HttpOnly;', 'data=hello, browser!']);

    res.end(fs.readFileSync('./cookie.html'));
}).listen(8888, () => console.log(`http://localhost:${app.address().port}`))