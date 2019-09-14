var STLangTranspiler = require('./STLangTranspiler').STLangTranspiler;

var text = 
"A := 10;\n"+
"A := 1.2;\n"+
"A := 'abc';\n"+
"A := \"あ\";\n"+
"A := 2#0001_1100;\n"+
"A := 8#77;\n"+
"A := 16#ff;\n"+
"A := -10;\n"+
"A := -1.2;\n"+
"A := -2#0001_1100;\n"+
"A := -8#77;\n"+
"A := -16#ff;\n"+
"A := INT#-10;\n"+
"A := DINT#-10;\n"+
"A := UINT#10;\n"+
"A := UDINT#10;\n"+
"A := REAL#1.2;\n"+
"A := LREAL#1.2e+10;\n"+
"A := -UINT#2#0001_1100;\n"+
"A := -UINT#8#77;\n"+
"A := -UINT#16#ff;\n";

var transpiler = new STLangTranspiler();
var result = transpiler.execute(text);
if (result.valid) {
    console.log(result.text);
} else {
    console.log(result.error);
}
