var STLangTranspiler = require('./STLangTranspiler').STLangTranspiler;

var text = 
"//E9:関数\n"+
"FUNC();\n"+
"FUNC(B,C);\n"+
"A := FUNC(B);\n"+
"A := FUNC(B,C);\n"+
"A := FUNC(B AND C, D = E);\n"+
"A := FUNC(B := C);\n"+
"A := FUNC(B, C => D);\n";

var transpiler = new STLangTranspiler();
var result = transpiler.execute(text);
if (result.valid) {
    console.log(result.text);
} else {
    console.log(result.error);
}
