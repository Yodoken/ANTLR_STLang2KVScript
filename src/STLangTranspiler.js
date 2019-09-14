var antlr4 = require('antlr4/index');
var STLangLexer = require('./stlang/STLangLexer').STLangLexer;
var STLangParser = require('./stlang/STLangParser').STLangParser;
var STLangVisitor = require('./STLangVisitor').STLangVisitor;


function STLangTranspiler() {
    this.tree = null;
    this.error = null;
	return this;
}

STLangTranspiler.prototype.constructor = STLangTranspiler;


STLangTranspiler.prototype.execute = function(structuredText) {
    var chars = new antlr4.InputStream(structuredText);
    var lexer = new STLangLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new STLangParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.structuredText();
    var visitor = new STLangVisitor();

    tree.accept(visitor);
    result = visitor.getResult();
    if (result.valid) {
        return {"valid":true, "text": toString(result.tree)};
    } else {
        return {"valid":false, "error": result.error};
    }
}


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

exports.STLangTranspiler = STLangTranspiler;