var STLangTranspiler = require('../src/STLangTranspiler.js').STLangTranspiler;

describe('ラダー実行テスト', function() {

    describe('Assignment statement', function() {
        it("Simple", function() {
            var transpiler = new STLangTranspiler();
            var text = 
                "A := 10;\n"+
                "A := 1.2;\n"+
                "A := 'abc';\n"+
                "A := \"あ\";\n";
            var result = transpiler.execute(text);
            expect(result.valid).toEqual(true);
            expect(result.text).toEqual(
                "A = #10\n"+
                "A = #1.2\n"+
                "A = \"abc\"\n"+
                "A = \"あ\"\n"          
            );
        });
        it("Base specified", function() {
            var transpiler = new STLangTranspiler();
            var text = 
                "A := 2#0001_1100;\n"+
                "A := 8#77;\n"+
                "A := 16#ff;\n";
            var result = transpiler.execute(text);
            expect(result.valid).toEqual(true);
            expect(result.text).toEqual(
                "A = $1c\n"+
                "A = #63\n"+
                "A = $ff\n"
            );
        });
        it("Sign specified", function() {
            var transpiler = new STLangTranspiler();
            var text = 
                "A := -10;\n"+
                "A := -1.2;\n"+
                "A := -2#0001_1100;\n"+
                "A := -8#77;\n"+
                "A := -16#ff;\n";
            var result = transpiler.execute(text);
            expect(result.valid).toEqual(true);
            expect(result.text).toEqual(
                "A = (-#10)\n"+
                "A = (-#1.2)\n"+
                "A = (-$1c)\n"+
                "A = (-#63)\n"+
                "A = (-$ff)\n"            
            );
        });
        it("Type specified", function() {
            var transpiler = new STLangTranspiler();
            var text = 
                "A := INT#-10;\n"+
                "A := DINT#-10;\n"+
                "A := UINT#10;\n"+
                "A := UDINT#10;\n"+
                "A := REAL#1.2;\n"+
                "A := LREAL#1.2e+10;\n"+
                "A := -UINT#2#0001_1100;\n"+
                "A := -UINT#8#77;\n"+
                "A := -UINT#16#ff;\n";
            var result = transpiler.execute(text);
            expect(result.valid).toEqual(true);
            expect(result.text).toEqual(
                "A = TOS(-#10)\n"+
                "A = TOL(-#10)\n"+
                "A = TOU(#10)\n"+
                "A = TOD(#10)\n"+
                "A = TOF(#1.2)\n"+
                "A = TODF(#1.2e+10)\n"+
                "A = (- TOU($1c))\n"+
                "A = (- TOU(#63))\n"+
                "A = (- TOU($ff))\n"            
            );
        });
    });
    describe('Expression', function() {
        it("E5:算術演算", function() {
            var transpiler = new STLangTranspiler();
            var text = 
                "A := B + C --D * E / F MOD -G ** H;  //単項マイナスに注意";
            var result = transpiler.execute(text);
            expect(result.valid).toEqual(true);
            expect(result.text).toEqual(
                "A = ((B + C) - ((((-D) * E) / F) MOD ((-G) ^ H)))\n"          
            );
        });
        it("E6:論理演算", function() {
            var transpiler = new STLangTranspiler();
            var text = 
                "A := NOT B AND C OR D XOR E & F;";
            var result = transpiler.execute(text);
            expect(result.valid).toEqual(true);
            expect(result.text).toEqual(
                "A = (((NOT B) AND C) OR (D XOR (E AND F)))\n"          
            );
        });
        it("E7:比較演算", function() {
            var transpiler = new STLangTranspiler();
            var text = 
                "A := B < C > D <= E >= F;";
            var result = transpiler.execute(text);
            expect(result.valid).toEqual(true);
            expect(result.text).toEqual(
                "A = ((((B < C) > D) <= E) >= F)\n"          
            );
        });
        it("E8:等価比較演算", function() {
            var transpiler = new STLangTranspiler();
            var text = 
                "A := B = C <> D;";
            var result = transpiler.execute(text);
            expect(result.valid).toEqual(true);
            expect(result.text).toEqual(
                "A = ((B = C) <> D)\n"          
            );
        });
        it("E7:比較演算+E8:等価比較演算", function() {
            var transpiler = new STLangTranspiler();
            var text = 
                "A := B = C > D;";
            var result = transpiler.execute(text);
            expect(result.valid).toEqual(true);
            expect(result.text).toEqual(
                "A = (B = (C > D))\n"          
            );
        });
    });
    describe('Function', function() {
        it("E9:関数", function() {
            var transpiler = new STLangTranspiler();
            var text = 
                "FUNC();\n"+
                "FUNC(B,C);\n"+
                "A := FUNC(B);\n"+ 
                "A := FUNC(B AND C, D = E);\n"+ 
                "A := FUNC(B := C);\n"+
                "A := FUNC(B, C => D);";
            var result = transpiler.execute(text);
            expect(result.valid).toEqual(true);
            expect(result.text).toEqual(
                "FUNC()\n"+
                "FUNC(B, C)\n"+
                "A = FUNC(B)\n"+ 
                "A = FUNC((B AND C), (D = E))\n"+ 
                "A = FUNC(B := C)\n"+
                "A = FUNC(B, D := C)\n"
            );
        });
    });
    describe('Repeat statement', function() {
        it("S2:繰り返し", function() {
            var transpiler = new STLangTranspiler();
            var text = 
                "REPEAT\n"+
                "  REPEAT\n"+
                "    EXIT;   //ループの脱出(誤解しやすいが、いわゆるBREAK相当)。なお、第2版のST言語にCONTINUEはない(おそらく)。\n"+
                "  UNTIL A < 100 END_REPEAT;\n"+
                "UNTIL B AND C END_REPEAT;\n";
            var result = transpiler.execute(text);
            expect(result.valid).toEqual(true);
            expect(result.text).toEqual(
                "DO\n"+
                "\tDO\n"+
                "\t\tBREAK\n"+
                "\tUNTIL (A < #100)\n"+
                "UNTIL (B AND C)\n"
            );
        });
        it("S3:選択", function() {
            var transpiler = new STLangTranspiler();
            var text = 
                "CASE A OF\n"+
                "B: C:=D;\n"+
                "ELSE E:=F;\n"+
                "END_CASE;\n";
            var result = transpiler.execute(text);
            expect(result.valid).toEqual(true);
            expect(result.text).toEqual(
                "SELECT CASE A\n"+
                "\tCASE B\n"+
                "\t\tC = D\n"+
                "\tCASE ELSE\n"+
                "\t\tE = F\n"+
                "END SELECT\n"
            );
        });
        it("S3:選択", function() {
            var transpiler = new STLangTranspiler();
            var text = 
                "CASE A OF\n"+
                "B:\n"+
                "C:D:=E;   //こういうのも可能\n"+
                "END_CASE;\n";
            var result = transpiler.execute(text);
            expect(result.valid).toEqual(true);
            expect(result.text).toEqual(
                "SELECT CASE A\n"+
                "\tCASE B, C\n"+
                "\t\tD = E\n"+
                "END SELECT\n"
            );
        });
        it("S3:選択", function() {
            var transpiler = new STLangTranspiler();
            var text = 
                "CASE A OF\n"+
                "B,C:      //複数指定\n"+
                "D..E:     //範囲指定\n"+
                "F,G,H..I:J:=K;\n"+
                "END_CASE;\n";
            var result = transpiler.execute(text);
            expect(result.valid).toEqual(true);
            expect(result.text).toEqual(
                "SELECT CASE A\n"+
                "\tCASE B, C, D TO E, F, G, H TO I\n"+
                "\t\tJ = K\n"+
                "END SELECT\n"
            );
        });
        it("S3:選択", function() {
            var transpiler = new STLangTranspiler();
            var text = 
                "CASE A OF B:C:=D;ELSE F();END_CASE;\n";
            var result = transpiler.execute(text);
            expect(result.valid).toEqual(true);
            expect(result.text).toEqual(
                "SELECT CASE A\n"+
                "\tCASE B\n"+
                "\t\tC = D\n"+
                "\tCASE ELSE\n"+
                "\t\tF()\n"+
                "END SELECT\n"
            );
        });
    });
    describe('If statement', function() {
        it("条件分岐", function() {
            var transpiler = new STLangTranspiler();
            var text = 
                "IF A <= B THEN\n"+
                "  C := D;\n"+
                "END_IF;\n";
            var result = transpiler.execute(text);
            expect(result.valid).toEqual(true);
            expect(result.text).toEqual(
                "IF (A <= B) THEN\n"+
                "\tC = D\n"+
                "END IF\n"
            );
        });
        it("条件分岐", function() {
            var transpiler = new STLangTranspiler();
            var text = 
                "IF A <= B THEN\n"+
                "  C := D;\n"+
                "  IF AA <= AB THEN\n"+
                "    AC := AD;\n"+
                "  END_IF;\n"+
                "ELSIF E <= F THEN\n"+
                "  G := H;\n"+
                "ELSE\n"+
                "  I := J;\n"+
                "END_IF;\n";
            var result = transpiler.execute(text);
            expect(result.valid).toEqual(true);
            expect(result.text).toEqual(
                "IF (A <= B) THEN\n"+
                "\tC = D\n"+
                "\tIF (AA <= AB) THEN\n"+
                "\t\tAC = AD\n"+
                "\tEND IF\n"+
                "ELSE IF (E <= F) THEN\n"+
                "\tG = H\n"+
                "ELSE\n"+
                "\tI = J\n"+
                "END IF\n"
            );
        });
    });
});

