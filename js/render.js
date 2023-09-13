const pug = require('pug');
const fs = require('fs');

const pugFile = './../layout/pages/index.pug';
const pugPage1 = './../layout/pages/courses.pug';
const compiledHtml = pug.renderFile(pugFile);
const compiled1Html = pug.renderFile(pugPage1);

fs.writeFileSync('./../html/index.html', compiledHtml);
fs.writeFileSync('./../html/courses.html', compiled1Html);
