var STLangTranspiler = require('./STLangTranspiler').STLangTranspiler;

var text = 
"A := B + C --D * E / F MOD -G ** H;  //単項マイナスに注意\n"+
"//E6:論理演算\n"+
"A := NOT B AND C OR D XOR E & F;\n"+
"\n"+
"//E7:比較演算\n"+
"A := B < C > D <= E >= F;\n"+
"\n"+
"//E8:等価比較演算\n"+
"A := B = C <> D;\n"+
"//比較・等価比較演算ミックス\n"+
"A := B = E >= F;\n";

var transpiler = new STLangTranspiler();
var result = transpiler.execute(text);
if (result.valid) {
    console.log(result.text);
} else {
    console.log(result.error);
}
