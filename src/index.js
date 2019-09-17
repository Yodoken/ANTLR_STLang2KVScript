var STLangTranspiler = require('./STLangTranspiler').STLangTranspiler;

var text = 
"IF A <= B THEN\n"+
"  C := D;\n"+
"END_IF;\n"+
"IF A <= B THEN\n"+
"  C := D;\n"+
"  IF AA <= AB THEN\n"+
"    AC := AD;\n"+
"  END_IF;\n"+
"ELSIF E <= F THEN\n"+
"  G := H;\n"+
"ELSE\n"+
"  I := J;\n"+
"END_IF;\n"+
"A:=B;\n"+
"REPEAT\n"+
"  REPEAT\n"+
"    EXIT;   //ループの脱出(誤解しやすいが、いわゆるBREAK相当)。なお、第2版のST言語にCONTINUEはない(おそらく)。\n"+
"  UNTIL A END_REPEAT;\n"+
"UNTIL B END_REPEAT;\n"+
"CASE A OF\n"+
"  B: C:=D;\n"+
"  ELSE E:=F;\n"+
"END_CASE;\n"+
"CASE A OF\n"+
"B,E..F:\n"+
"C:D:=E;   //こういうのも可能\n"+
"ELSE E:=F;\n"+
"END_CASE;\n"+
"CASE A OF\n"+
"  B,C:      //複数指定\n"+
"  D..E:     //範囲指定\n"+
"  F,G,H..I:J:=K;\n"+
"END_CASE;\n"+
"CASE A OF B:C:=D;ELSE F();END_CASE;\n";
var transpiler = new STLangTranspiler();
var result = transpiler.execute(text);
if (result.valid) {
    console.log(result.text);
} else {
    console.log(result.error);
}
