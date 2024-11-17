import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";
//1. Use the inquirer npm package to get user input.

inquirer.prompt([
    /* Pass your questions in here */
    {
        name: "website",
        type: "input",
        message: 'Enter a URL to make QR Code ',
    }
  ])
  .then((answers) => {
    let input = answers.website; 
    //2. Use the qr-image npm package to turn the user entered URL into a QR code image.
    qr.image(input).pipe(fs.createWriteStream("qr_img.png"));
//3. Create a txt file to save the user input using the native fs node.
fs.writeFile('websites.txt', input, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
  });
 
  
  





