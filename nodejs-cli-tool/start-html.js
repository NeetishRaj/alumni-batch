/**
 * 1. Take the project name as Command line argument
 * 
 *  
 * 2. create this folder structure
 *      
 *      project_name
 *          - index.html
 *          - css
 *              styles.css
 *          - js
 *              script.js 
 */
const fs = require('fs');
const { connect } = require('http2');

// Get the project folder name from Command line arguments
const args = process.argv.slice(2);
const folder_name = args.length === 0 ? 'frontend' : args[0];


const HTML_TEXT = 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/styles.css">
    <title>Document</title>
</head>
<body>
    <div class="container">
        Hello World
    </div>

    <script src="./js/script.js"></script>
</body>
</html>
`;

const CSS_TEXT = 
`
* {
    box-sizing: border-box;
}

body {
    font-size: 20px;
    color: red;
    margin: 0;
    padding: 0;
}
`

const JS_TEXT = 
`
function init() {
    console.log('Hello from the Console');
}

window.onload = init;

`

// Create project folder
fs.mkdir(folder_name, (err) => {
    if(err)
        console.log(err);

    console.log(`Created project folder '${folder_name}'`);
    
    // Create index.html file
    const html_file_path = `${folder_name}/index.html`;
    fs.writeFile(
        html_file_path,
        HTML_TEXT,
        (err) => {
            if(err)
                console.log(err);

            console.log(`Created '${html_file_path}'`)
        });


    // Create css/styles.css
    const css_folder_path = `${folder_name}/css`;
    fs.mkdir(css_folder_path, (err) => {
        if(err) console.log(err);

        console.log(`created '${css_folder_path}' folder`);

        const css_file_path = `${css_folder_path}/styles.css`;
        fs.writeFile(
            css_file_path,
            CSS_TEXT,
            (err) => {
                if(err) console.log(err);
                console.log(`Created '${css_file_path}'`)
            });
    })

    // Create js/script.js
    const js_folder_path = `${folder_name}/js`;
    fs.mkdir(js_folder_path, (err) => {
        if(err) console.log(err);

        console.log(`created '${js_folder_path}' folder`);

        const js_file_path = `${js_folder_path}/script.js`;
        fs.writeFile(
            js_file_path,
            JS_TEXT,
            (err) => {
                if(err) console.log(err);
                console.log(`Created '${js_file_path}'`)
            });
    })
})



