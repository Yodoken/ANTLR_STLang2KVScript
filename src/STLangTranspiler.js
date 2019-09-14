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


var indent = 0;
function toString(tree) {
    var text = "";
    if (Array.isArray(tree)) {
        for (elem of tree) {
            text += toString(elem);
        }
        return text;
    } else if (typeof tree === 'object') {
        if (tree.line) {
            for (i = 0; i < indent; i++) {
                text += "\t";
            }
            text += toString(tree.line) + "\n";
        } else if (tree.block) {
            indent++;
            text = toString(tree.block);
            indent--;
        } else {
            throw new Error("Unknown tree element");
        }
        return text;
    } else if (typeof tree === 'string') {
        return tree;
    } else {
        return "";
    }
};

exports.STLangTranspiler = STLangTranspiler;