// Generated from STLangParser.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by STLangParser.

function STLangParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

STLangParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
STLangParserVisitor.prototype.constructor = STLangParserVisitor;

// Visit a parse tree produced by STLangParser#structuredText.
STLangParserVisitor.prototype.visitStructuredText = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#statements.
STLangParserVisitor.prototype.visitStatements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#statementAssignment.
STLangParserVisitor.prototype.visitStatementAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#statementProcedure.
STLangParserVisitor.prototype.visitStatementProcedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#statementReturn.
STLangParserVisitor.prototype.visitStatementReturn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#statementIf.
STLangParserVisitor.prototype.visitStatementIf = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#statementCase.
STLangParserVisitor.prototype.visitStatementCase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#statementFor.
STLangParserVisitor.prototype.visitStatementFor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#statementWhile.
STLangParserVisitor.prototype.visitStatementWhile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#statementRepeat.
STLangParserVisitor.prototype.visitStatementRepeat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#statementContinue.
STLangParserVisitor.prototype.visitStatementContinue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#statementExit.
STLangParserVisitor.prototype.visitStatementExit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#assignmentStatement.
STLangParserVisitor.prototype.visitAssignmentStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#procedureStatement.
STLangParserVisitor.prototype.visitProcedureStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#forStatement.
STLangParserVisitor.prototype.visitForStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#whileStatement.
STLangParserVisitor.prototype.visitWhileStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#repeatStatement.
STLangParserVisitor.prototype.visitRepeatStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#ifStatement.
STLangParserVisitor.prototype.visitIfStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#caseStatement.
STLangParserVisitor.prototype.visitCaseStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#caseListWithStatement.
STLangParserVisitor.prototype.visitCaseListWithStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#caseListWithoutStatement.
STLangParserVisitor.prototype.visitCaseListWithoutStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#caseElementSingle.
STLangParserVisitor.prototype.visitCaseElementSingle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#caseElementRange.
STLangParserVisitor.prototype.visitCaseElementRange = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#continueStatement.
STLangParserVisitor.prototype.visitContinueStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#exitStatement.
STLangParserVisitor.prototype.visitExitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#returnStatement.
STLangParserVisitor.prototype.visitReturnStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionLogicalOR.
STLangParserVisitor.prototype.visitExpressionLogicalOR = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionNone.
STLangParserVisitor.prototype.visitExpressionNone = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionFunction.
STLangParserVisitor.prototype.visitExpressionFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionUnary.
STLangParserVisitor.prototype.visitExpressionUnary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionPower.
STLangParserVisitor.prototype.visitExpressionPower = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionParen.
STLangParserVisitor.prototype.visitExpressionParen = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionLogicalAND.
STLangParserVisitor.prototype.visitExpressionLogicalAND = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionLogicalXOR.
STLangParserVisitor.prototype.visitExpressionLogicalXOR = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionAdditive.
STLangParserVisitor.prototype.visitExpressionAdditive = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionRelative.
STLangParserVisitor.prototype.visitExpressionRelative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionMultipricative.
STLangParserVisitor.prototype.visitExpressionMultipricative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionEquality.
STLangParserVisitor.prototype.visitExpressionEquality = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#parameterList.
STLangParserVisitor.prototype.visitParameterList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#parameterExpressionNone.
STLangParserVisitor.prototype.visitParameterExpressionNone = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#prameterExpressionAssignFrom.
STLangParserVisitor.prototype.visitPrameterExpressionAssignFrom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#prameterExpressionAssignTo.
STLangParserVisitor.prototype.visitPrameterExpressionAssignTo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#constandUnsignedNumber.
STLangParserVisitor.prototype.visitConstandUnsignedNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#constantSignedNumber.
STLangParserVisitor.prototype.visitConstantSignedNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#constantBool.
STLangParserVisitor.prototype.visitConstantBool = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#constantIdentifier.
STLangParserVisitor.prototype.visitConstantIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#constantSignedIdentifier.
STLangParserVisitor.prototype.visitConstantSignedIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#constantString.
STLangParserVisitor.prototype.visitConstantString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#unsignedNumber.
STLangParserVisitor.prototype.visitUnsignedNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#unsignedIntegerDec.
STLangParserVisitor.prototype.visitUnsignedIntegerDec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#unsignedIntegerBin.
STLangParserVisitor.prototype.visitUnsignedIntegerBin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#unsignedIntegerOct.
STLangParserVisitor.prototype.visitUnsignedIntegerOct = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#unsignedIntegerHex.
STLangParserVisitor.prototype.visitUnsignedIntegerHex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#unsignedReal.
STLangParserVisitor.prototype.visitUnsignedReal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#sign.
STLangParserVisitor.prototype.visitSign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#bool.
STLangParserVisitor.prototype.visitBool = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#typeOfNumber.
STLangParserVisitor.prototype.visitTypeOfNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#typeOfString.
STLangParserVisitor.prototype.visitTypeOfString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#variable.
STLangParserVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#stringMultiByte.
STLangParserVisitor.prototype.visitStringMultiByte = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#stringWide.
STLangParserVisitor.prototype.visitStringWide = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#identifier.
STLangParserVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};



exports.STLangParserVisitor = STLangParserVisitor;