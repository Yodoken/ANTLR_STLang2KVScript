var STLangLexer = require('./stlang/STLangLexer').STLangLexer;
var STLangParserVisitor = require('./stlang/STLangParserVisitor').STLangParserVisitor;


// This class defines a complete generic visitor for a parse tree produced by STLangParser.
function STLangVisitor() {
  STLangParserVisitor.call(this);
    this.result = {
      "valid": true,
      "error": null,
      "tree": {
        "text": "",
        "children": null
      }
    };
	return this;
};

STLangVisitor.prototype = Object.create(STLangParserVisitor.prototype);
STLangVisitor.prototype.constructor = STLangVisitor;

STLangVisitor.prototype.getResult = function() {
  return this.result;
};


// Visit a parse tree produced by STLangParser#structuredText.
STLangVisitor.prototype.visitStructuredText = function(ctx) {
  var result = this.visitChildren(ctx);
  console.log(result);
  this.result.tree = result;
  return result;
};


// Visit a parse tree produced by STLangParser#statements.
STLangVisitor.prototype.visitStatements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#statementAssignment.
STLangVisitor.prototype.visitStatementAssignment = function(ctx) {
  var tree = this.visitChildren(ctx);
  tree[0][1] = [" = "];
  tree[0].push("\n");
  return tree;
};


// Visit a parse tree produced by STLangParser#statementProcedure.
STLangVisitor.prototype.visitStatementProcedure = function(ctx) {
  return [this.visitChildren(ctx),"\n"];
};


// Visit a parse tree produced by STLangParser#statementReturn.
STLangVisitor.prototype.visitStatementReturn = function(ctx) {
  return [this.visitChildren(ctx),"\n"];
};


// Visit a parse tree produced by STLangParser#statementIf.
STLangVisitor.prototype.visitStatementIf = function(ctx) {
  return [this.visitChildren(ctx),"\n"];
};


// Visit a parse tree produced by STLangParser#statementCase.
STLangVisitor.prototype.visitStatementCase = function(ctx) {
  return [this.visitChildren(ctx),"\n"];
};


// Visit a parse tree produced by STLangParser#statementFor.
STLangVisitor.prototype.visitStatementFor = function(ctx) {
  return [this.visitChildren(ctx),"\n"];
};


// Visit a parse tree produced by STLangParser#statementWhile.
STLangVisitor.prototype.visitStatementWhile = function(ctx) {
  return [this.visitChildren(ctx),"\n"];
};


// Visit a parse tree produced by STLangParser#statementRepeat.
STLangVisitor.prototype.visitStatementRepeat = function(ctx) {
  return [this.visitChildren(ctx),"\n"];
};


// Visit a parse tree produced by STLangParser#statementContinue.
STLangVisitor.prototype.visitStatementContinue = function(ctx) {
  return [this.visitChildren(ctx),"\n"];
};


// Visit a parse tree produced by STLangParser#statementExit.
STLangVisitor.prototype.visitStatementExit = function(ctx) {
  return [this.visitChildren(ctx),"\n"];
};


// Visit a parse tree produced by STLangParser#assignmentStatement.
STLangVisitor.prototype.visitAssignmentStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#procedureStatement.
STLangVisitor.prototype.visitProcedureStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#forStatement.
STLangVisitor.prototype.visitForStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#whileStatement.
STLangVisitor.prototype.visitWhileStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#repeatStatement.
STLangVisitor.prototype.visitRepeatStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#ifStatement.
STLangVisitor.prototype.visitIfStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#caseStatement.
STLangVisitor.prototype.visitCaseStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#caseList.
STLangVisitor.prototype.visitCaseList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#caseElementSingle.
STLangVisitor.prototype.visitCaseElementSingle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#caseElementRange.
STLangVisitor.prototype.visitCaseElementRange = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#continueStatement.
STLangVisitor.prototype.visitContinueStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#exitStatement.
STLangVisitor.prototype.visitExitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#returnStatement.
STLangVisitor.prototype.visitReturnStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionLogicalOR.
STLangVisitor.prototype.visitExpressionLogicalOR = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionNone.
STLangVisitor.prototype.visitExpressionNone = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionFunction.
STLangVisitor.prototype.visitExpressionFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionUnary.
STLangVisitor.prototype.visitExpressionUnary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionPower.
STLangVisitor.prototype.visitExpressionPower = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionParen.
STLangVisitor.prototype.visitExpressionParen = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionLogicalAND.
STLangVisitor.prototype.visitExpressionLogicalAND = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionLogicalXOR.
STLangVisitor.prototype.visitExpressionLogicalXOR = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionAdditive.
STLangVisitor.prototype.visitExpressionAdditive = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionRelative.
STLangVisitor.prototype.visitExpressionRelative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionMultipricative.
STLangVisitor.prototype.visitExpressionMultipricative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionEquality.
STLangVisitor.prototype.visitExpressionEquality = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#parameterList.
STLangVisitor.prototype.visitParameterList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#parameterExpressionNone.
STLangVisitor.prototype.visitParameterExpressionNone = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#prameterExpressionAssignFrom.
STLangVisitor.prototype.visitPrameterExpressionAssignFrom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#prameterExpressionAssignTo.
STLangVisitor.prototype.visitPrameterExpressionAssignTo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#constandUnsignedNumber.
STLangVisitor.prototype.visitConstandUnsignedNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#constantSignedNumber.
STLangVisitor.prototype.visitConstantSignedNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#constantBool.
STLangVisitor.prototype.visitConstantBool = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#constantIdentifier.
STLangVisitor.prototype.visitConstantIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#constantSignedIdentifier.
STLangVisitor.prototype.visitConstantSignedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#constantString.
STLangVisitor.prototype.visitConstantString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#unsignedNumber.
STLangVisitor.prototype.visitUnsignedNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#unsignedIntegerDec.
STLangVisitor.prototype.visitUnsignedIntegerDec = function(ctx) {
  var token = ctx.getToken(STLangLexer.NUM_INT_DEC, 0);
  return ["#"+token.symbol.text];
};


// Visit a parse tree produced by STLangParser#unsignedIntegerBin.
STLangVisitor.prototype.visitUnsignedIntegerBin = function(ctx) {
  var token = ctx.getToken(STLangLexer.NUM_INT_BIN, 0);
  var numtext = token.symbol.text.split("#")[1].replace("_","");
  var num = parseInt(numtext, 2);
  return ["$"+num.toString(16)];
};


// Visit a parse tree produced by STLangParser#unsignedIntegerOct.
STLangVisitor.prototype.visitUnsignedIntegerOct = function(ctx) {
  var token = ctx.getToken(STLangLexer.NUM_INT_OCT, 0);
  var numtext = token.symbol.text.split("#")[1];
  var num = parseInt(numtext, 8);
  return ["#"+num.toString()];
};


// Visit a parse tree produced by STLangParser#unsignedIntegerHex.
STLangVisitor.prototype.visitUnsignedIntegerHex = function(ctx) {
  var token = ctx.getToken(STLangLexer.NUM_INT_HEX, 0);
  var numtext = token.symbol.text.split("#")[1];
  var num = parseInt(numtext, 16);
  return ["$"+num.toString(16)];
};


// Visit a parse tree produced by STLangParser#unsignedReal.
STLangVisitor.prototype.visitUnsignedReal = function(ctx) {
  var token = ctx.getToken(STLangLexer.NUM_REAL, 0);
  var num = parseFloat(token.symbol.text);
  return ["#"+num.toString()];
};


// Visit a parse tree produced by STLangParser#sign.
STLangVisitor.prototype.visitSign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#bool.
STLangVisitor.prototype.visitBool = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#typeOfNumber.
STLangVisitor.prototype.visitTypeOfNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#typeOfString.
STLangVisitor.prototype.visitTypeOfString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#variable.
STLangVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#stringMultiByte.
STLangVisitor.prototype.visitStringMultiByte = function(ctx) {
  var token = ctx.getToken(STLangLexer.STRING_LITERAL, 0);
  var str = token.symbol.text;
  return ["\"", str.substr(1,str.length-2), "\""];
};


// Visit a parse tree produced by STLangParser#stringWide.
STLangVisitor.prototype.visitStringWide = function(ctx) {
  var token = ctx.getToken(STLangLexer.WSTRING_LITERAL, 0);
  var str = token.symbol.text;
  return [str];
};


// Visit a parse tree produced by STLangParser#identifier.
STLangVisitor.prototype.visitIdentifier = function(ctx) {
  var id = ctx.getText();
  return [id];
};



exports.STLangVisitor = STLangVisitor;