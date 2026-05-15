const fs = require('fs');
const content = fs.readFileSync('d:/vibe/employee24/src/App.css', 'utf8');
let open = 0;
let lines = content.split('\n');
lines.forEach((line, i) => {
    for (let char of line) {
        if (char === '{') open++;
        if (char === '}') open--;
    }
    if (open < 0) console.log(`Brace closed without open at line ${i + 1}`);
});
console.log(`Final balance: ${open}`);
