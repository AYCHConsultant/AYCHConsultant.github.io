# AYCH inc
"leadwise" - "managewell" is a principle of AYCH Consultant and Developer. A competent and experienced technical/development company in the global leaderlist. The consultants and developers are of competent, experienced, and of exceptional interpersonal communication skills towards global business environment. Main language used is English for international communication. All are selected to deliver the products and services at the best version in terms of technical and soft skills.

## Quick Start
```
git clone https://github.com/aychconsultant/aychconsultant-website.git
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
```
docker build -t liambeeton .
docker run --rm -v "$(pwd)":/app liambeeton npm install
docker run --rm -v "$(pwd)":/app liambeeton gulp
docker run --rm -p 3000:3000 -v "$(pwd)":/app liambeeton
```
