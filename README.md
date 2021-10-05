# **markdown-website**
A simple example of creating a localhost website using markdown. This project does not use [Jekyll](https://github.com/jekyll/jekyll), written in `Ruby`, but instead uses `NodeJS` to run.

----

## **Creating your own website**
#### Cloning Repository
To clone the repository, run the command:
```
git clone https://github.com/manuanish/markdown-website.git
cd markdown-website
```
#### Install dependencies
To install the dependencies, simply run:
```
npm install
```
#### Start server
To Start the server, run the command:
```
npm run
```
users can connect to the server on `localhost:3000`.
###### Warning!
The server port is fixed, so if you are running another app on the `3000` port, this will not work. To fix this, change the variable `PORT` in `src\index.js` to the desired port.
### **Editing content**
The `index.md` file is located in `src\static\index.md`. Editing this and saving the file will dynamically change the content displayed on the website.


#### License
```
MIT License

Copyright (c) 2021 Manu Anish

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
