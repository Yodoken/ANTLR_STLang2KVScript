var STLangTranspiler = require('./STLangTranspiler').STLangTranspiler;

var text = 
"A := 10;A := 2#0001_1100;A := 8#77;A := 16#ff;";

var trnspiler = new STLangTranspiler();
var result = trnspiler.execute(text);
console.log(toString(result.tree));


function toString(tree) {
    var text = "";
    if (Array.isArray(tree)) {
        for (elem of tree) {
            text += toString(elem);
        }
        return text;
    } else if (typeof tree　=== 'string') {
        return elem;
    } else {
        return "";
    }
};
