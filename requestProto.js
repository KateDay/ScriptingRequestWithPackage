// make a 'GET' request to 'https://sytantris.github.io/http-examples/future.jpg' using chaining. The chain should:
// Use .on('error') to handle any errors
// Use .on('response') to log the HTTPS response code, response message (response.statusMessage) and content type (response.headers['content-type'])
// Use piping and fs.createWriteStream to save the file to your working directory ('./future.jpg')


var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                             // Note 2
         throw err; 
       })
       .on('response', function (response) {                                    // Note 3
        console.log('Hold on, I am Downloading the image...');
        console.log('Response Status Code: ', response.statusCode + ", Response Status Message: ", response.statusMessage + response.headers["content-type"]);
        
       })
       .on('end', function(){
           console.log("Ok, I got it!")
       })

       
       .pipe(fs.createWriteStream('./downloaded.html'));                         // Note 4
