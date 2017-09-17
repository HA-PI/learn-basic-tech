/**
 * Created by moyu on 2017/6/16.
 */

const http = require('http')
const fs = require('fs')
const url = require('url')


function md5 (text) {
  return require('crypto').createHash('md5').update(text).digest('hex');
};


const cache = {};

const server = http.createServer((req, res) => {
  console.log(req.headers);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'max-age=100');
  let mtime = fs.statSync('./html.html').mtime;
  let data = fs.readFileSync('./html.html');
  let etag = md5(data);
  if (url.parse(req.url).pathname === '/') {
    // res.setHeader('Expires', new Date(fs.statSync('./html.html').mtime.getTime()+1000*10).toGMTString());
    res.setHeader('Last-Modified', mtime.toGMTString());
    res.setHeader('ETag', etag);
  }

  let cache_control = req.headers['cache-control']
  let modified_since = req.headers['if-modified-since']
  let none_match = req.headers['if-none-match']
  let matches = null;
  if (modified_since) {
    if (new Date(modified_since) >= mtime) {
      res.writeHead(304);
      res.end();
    } else {
      res.end(data);
    }
  } else if(etag) {
    if (etag === none_match) {
      res.writeHead(304);
      res.end();
    } else {
      res.end(data);
    }
  } else if ( cache_control && (matches = cache_control.match(/max-age=(\d)+/)) && matches.length >= 2 ) {
    let age = parseInt(matches[1]);
    if (cache[req.url] && (new Date() - cache[req.url].date) <= age * 1000 ) {
      res.writeHead(304);
      res.end();
    } else {
      cache[req.url] = {
        date: new Date(),
      };
      res.end(data);
    }
  }

  res.end(fs.readFileSync('./html.html'));

}).listen(10000, '0.0.0.0', () => console.log(`Server run on Port: ${server.address().port}`))