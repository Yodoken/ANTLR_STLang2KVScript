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
                "A = -#10\n"+
                "A = -#1.2\n"+
                "A = -$1c\n"+
                "A = -#63\n"+
                "A = -$ff\n"            
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
                "A = TOU($1c)\n"+
                "A = TOU(#63)\n"+
                "A = TOU($ff)\n"            
            );
        });
    });
});
