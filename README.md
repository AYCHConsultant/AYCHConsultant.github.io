# Liam Beeton Consulting
Liam is a very competent and experienced technical/development leader, teacher and mentor. He has exceptional interpersonal communication skills and is also a good presenter/technical evangelist with strong public speaking skills and experience.

## Quick Start
```
git clone https://github.com/liambeeton/consulting-website.git
cd consulting-website
npm install
gulp serve
```

## Requirements
This project requires you have [nodejs](https://nodejs.org/en/) with [npm](https://www.npmjs.com/get-npm) installed.
This project requires you have a global installation of [gulp](http://gulpjs.com/).
```
npm install -g gulp
```

## Fixing Node Module Errors
```
rm -fr node_modules
rm -fr package-lock.json
npm cache clean --force
npm install
```

## Docker 
docker build -t liambeeton .
docker run --rm -v "$(pwd)":/app liambeeton npm install
docker run --rm -v "$(pwd)":/app liambeeton gulp
docker run --rm -p 3000:3000 -v "$(pwd)":/app liambeeton