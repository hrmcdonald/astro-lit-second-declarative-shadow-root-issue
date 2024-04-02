/* eslint-disable */

try {
  // Attempt to get npm user agent
  var userAgent;
  try {
    userAgent = process.env.npm_config_user_agent.split(/[\s\/]+/);
  } catch (e) {}

  // Attempt to get repo url from git config
  var repoUrl = 'unknown';
  try {
    const path = require('path');
    const fs = require('fs');
    const file = fs.readFileSync(path.join(process.env.INIT_CWD, '/.git/config'), 'utf8');
    const reg = new RegExp(/\[remote "origin"\]\n\turl = .*((gitlab.com|github.com).*)/);
    repoUrl = reg.exec(file)[1];
  } catch (e) {}

  // Attempt to generate a cid
  var cid;
  try {
    const userInfo = require('os').userInfo();
    const userString = Object.keys(userInfo).reduce(
      (acc, key) => `${acc}|${key}:${userInfo[key]}`,
      ''
    );
    cid = require('crypto').createHash('md5').update(userString).digest('hex');
  } catch (e) {}

  // Prepare event params
  var params = {
    'v': 2,
    'gtm': '2oe1a0',
    'tid': process.env.TID,
    'aip': 1,
    't': 'event',
    'en': `npm_install`,
    'ua': 'mortar-telemetry-1.0.0',
    'an': 'Mortar',
    'av': '1',
    'cid': cid,
    'ep.nodeVersion': userAgent[3],
    'ep.npmVersion': userAgent[1],
    'ep.os': userAgent[4],
    'ep.architecture': userAgent[5],
    'ep.packageName': process.env.npm_package_name,
    'ep.packageVersion': process.env.npm_package_version,
    'ep.repo': repoUrl,
  };

  // Attempt to push install event
  var path = '/g/collect?';
  for (var key in params) {
    path += '&' + key + '=' + encodeURIComponent(params[key]);
  }

  const req = require('https').request(
    {
      hostname: 'www.google-analytics.com',
      path: path,
      method: 'POST',
      headers: {
        'content-length': 0,
        'content-type': 'text/plain;charset=UTF-8',
        'dnt': 1,
        'pragma': 'no-cache',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'cache-control': 'no-cache',
      },
    },
    (res) => {
      res.on('data', (d) => {});
    }
  );
  req.on('error', (e) => {});
  req.write('');
  req.end();
} catch (e) {}
