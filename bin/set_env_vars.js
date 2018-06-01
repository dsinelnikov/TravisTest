#!/usr/bin/env node

const fname = 'vss-extension.json';
const templateFile = 'vss-extension.template.json';
const fs = require('fs');
const configuration = require('../config/utils/configuration');

let data = fs.readFileSync(templateFile);
fs.writeFileSync(fname, configuration.processMacros(process.env, String(data)));
