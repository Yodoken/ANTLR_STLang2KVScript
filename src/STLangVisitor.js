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
  this.result.tree = result;
  return result;
};


// Visit a parse tree produced by STLangParser#statements.
STLangVisitor.prototype.visitStatements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#statementAssignment.
STLangVisitor.prototype.visitStatementAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#statementProcedure.
STLangVisitor.prototype.visitStatementProcedure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#statementReturn.
STLangVisitor.prototype.visitStatementReturn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#statementIf.
STLangVisitor.prototype.visitStatementIf = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#statementCase.
STLangVisitor.prototype.visitStatementCase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#statementFor.
STLangVisitor.prototype.visitStatementFor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#statementWhile.
STLangVisitor.prototype.visitStatementWhile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#statementRepeat.
STLangVisitor.prototype.visitStatementRepeat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#statementContinue.
STLangVisitor.prototype.visitStatementContinue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#statementExit.
STLangVisitor.prototype.visitStatementExit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#assignmentStatement.
STLangVisitor.prototype.visitAssignmentStatement = function(ctx) {
  return {"line":[this.visit(ctx.lhs), " = ", this.visit(ctx.rhs)]};
};


// Visit a parse tree produced by STLangParser#procedureStatement.
STLangVisitor.prototype.visitProcedureStatement = function(ctx) {
  if (ctx.args) {
    return {"line":[this.visit(ctx.func), "(", this.visit(ctx.args), ")"]};
  } else {
    return {"line":[this.visit(ctx.func), "()"]};
  }
};


// Visit a parse tree produced by STLangParser#forStatement.
STLangVisitor.prototype.visitForStatement = function(ctx) {
  var begin = {
    "line":["FOR", this.visit(ctx.id), " = ", this.visit(ctx.start), " TO ", this.visit(ctx.end)]
  }
  if (ctx.step) {
    begin.line.push(" STEP ");
    begin.line.push(this.visit(ctx.step));
  }
  var block = {"block": tree.push(this.visit(ctx.st))};
  var end =   {"line": "END FOR"};

  return [begin, block, end];
};


// Visit a parse tree produced by STLangParser#whileStatement.
STLangVisitor.prototype.visitWhileStatement = function(ctx) {
  var begin = {"line": ["WHILE ", this.visit(ctx.cond)]};
  var block = {"block": this.visit(ctx.cond)};
  var end   = {"line": "END WHILE"};
  return [begin, block, end];
};


// Visit a parse tree produced by STLangParser#repeatStatement.
STLangVisitor.prototype.visitRepeatStatement = function(ctx) {
  var begin = {"line": "DO"};
  var block = {"block": this.visit(ctx.st)};
  var end   = {"line": ["UNTIL ", this.visit(ctx.cond)]};
  return [begin, block, end];
};


// Visit a parse tree produced by STLangParser#ifStatement.
STLangVisitor.prototype.visitIfStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#caseStatement.
STLangVisitor.prototype.visitCaseStatement = function(ctx) {
  var begin = {"line": ["SELECT CASE ", this.visit(ctx.cond)]};
  var block = {"block": []};
  if (ctx.cas) {
    var list = this.visit(ctx.cas);
    mergedList = mergeCase(list);
    block.block.push(mergedList);
  }
  if (ctx.else_st) {
    block.block.push({"line": "CASE ELSE"});
    block.block.push({"block": this.visit(ctx.else_st)});
  }
  var end   = {"line": "END SELECT"};
  return [begin, block, end];
};

function mergeCase(list) {
  dst = [];
  for (i = 0; i < list.length; i++) {
    if (list[i].length == 1) {
      lines = [];
      lines.push(list[i][0].line);
      for (j = i + 1; (j < list.length) && list[j - 1].length == 1; j++) {
        lines.push(", ");
        lines.push(list[j][0].line.slice(1)); // "CASE"を消す
      }
      i = --j;
      dst.push([
        {"line":lines},
        {"block":list[j][1].block}
      ]);
  } else {
      dst.push(list[i]);
    }
  }
  return dst;
}

// Visit a parse tree produced by STLangParser#caseListWithStatement.
STLangVisitor.prototype.visitCaseListWithStatement = function(ctx) {
  var list = {"line": [
    "CASE ", this.visit(ctx.elm[0])]};
  for (i = 1; i < ctx.elm.length; i++) {
    list.line.push(", ");
    list.line.push(this.visit(ctx.elm[i]));
  }
  var statement = this.visit(ctx.st);
  if (statement) {
    var block = {"block": statement};
    return [list, block];
  } else {
    return [list];
  }
};


// Visit a parse tree produced by STLangParser#caseListWithoutStatement.
STLangVisitor.prototype.visitCaseListWithoutStatement = function(ctx) {
  var list = {"line": [
    "CASE ", this.visit(ctx.elm[0])]};
  for (i = 1; i < ctx.elm.length; i++) {
    list.line.push(", ");
    list.line.push(this.visit(ctx.elm[i]));
  }
  return [list];
};


// Visit a parse tree produced by STLangParser#caseElementSingle.
STLangVisitor.prototype.visitCaseElementSingle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#caseElementRange.
STLangVisitor.prototype.visitCaseElementRange = function(ctx) {
  return [this.visit(ctx.from), " TO ", this.visit(ctx.to)];
};


// Visit a parse tree produced by STLangParser#continueStatement.
STLangVisitor.prototype.visitContinueStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#exitStatement.
STLangVisitor.prototype.visitExitStatement = function(ctx) {
  return {line:"BREAK"};
};


// Visit a parse tree produced by STLangParser#returnStatement.
STLangVisitor.prototype.visitReturnStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionLogicalOR.
STLangVisitor.prototype.visitExpressionLogicalOR = function(ctx) {
  return ["(", this.visit(ctx.lhs), " ", ctx.op.text, " ", this.visit(ctx.rhs), ")"];
};


// Visit a parse tree produced by STLangParser#expressionNone.
STLangVisitor.prototype.visitExpressionNone = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#expressionFunction.
STLangVisitor.prototype.visitExpressionFunction = function(ctx) {
  if (ctx.args) {
    return [this.visit(ctx.func), "(", this.visit(ctx.args), ")"];
  } else {
    return [this.visit(ctx.func), "()"];
  }
};


// Visit a parse tree produced by STLangParser#expressionUnary.
STLangVisitor.prototype.visitExpressionUnary = function(ctx) {
  return ["(", ctx.op.text, " ", this.visit(ctx.expr), ")"];
};


// Visit a parse tree produced by STLangParser#expressionPower.
STLangVisitor.prototype.visitExpressionPower = function(ctx) {
  return ["(", this.visit(ctx.lhs), " ^ ", this.visit(ctx.rhs), ")"];
};


// Visit a parse tree produced by STLangParser#expressionParen.
STLangVisitor.prototype.visitExpressionParen = function(ctx) {
  return ["(", this.visitChildren(ctx), ")"];
};


// Visit a parse tree produced by STLangParser#expressionLogicalAND.
STLangVisitor.prototype.visitExpressionLogicalAND = function(ctx) {
  return ["(", this.visit(ctx.lhs), " AND ", this.visit(ctx.rhs), ")"];
};


// Visit a parse tree produced by STLangParser#expressionLogicalXOR.
STLangVisitor.prototype.visitExpressionLogicalXOR = function(ctx) {
  return ["(", this.visit(ctx.lhs), " ", ctx.op.text, " ", this.visit(ctx.rhs), ")"];
};


// Visit a parse tree produced by STLangParser#expressionAdditive.
STLangVisitor.prototype.visitExpressionAdditive = function(ctx) {
  return ["(", this.visit(ctx.lhs), " ", ctx.op.text, " ", this.visit(ctx.rhs), ")"];
};


// Visit a parse tree produced by STLangParser#expressionRelative.
STLangVisitor.prototype.visitExpressionRelative = function(ctx) {
  return ["(", this.visit(ctx.lhs), " ", ctx.op.text, " ", this.visit(ctx.rhs), ")"];
};


// Visit a parse tree produced by STLangParser#expressionMultipricative.
STLangVisitor.prototype.visitExpressionMultipricative = function(ctx) {
  return ["(", this.visit(ctx.lhs), " ", ctx.op.text, " ", this.visit(ctx.rhs), ")"];
};


// Visit a parse tree produced by STLangParser#expressionEquality.
STLangVisitor.prototype.visitExpressionEquality = function(ctx) {
  return ["(", this.visit(ctx.lhs), " ", ctx.op.text, " ", this.visit(ctx.rhs), ")"];
};


// Visit a parse tree produced by STLangParser#parameterList.
STLangVisitor.prototype.visitParameterList = function(ctx) {
  var params = this.visit(ctx.expr);
  var list = params[0];
  for (var i = 1; i < params.length; i++) {
    list.push(", ");
    list.push(params[i]);
  }
  return list;
};


// Visit a parse tree produced by STLangParser#parameterExpressionNone.
STLangVisitor.prototype.visitParameterExpressionNone = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#prameterExpressionAssignFrom.
STLangVisitor.prototype.visitPrameterExpressionAssignFrom = function(ctx) {
  return [this.visit(ctx.lhs), " ", ctx.op.text, " ", this.visit(ctx.rhs)];
};


// Visit a parse tree produced by STLangParser#prameterExpressionAssignTo.
STLangVisitor.prototype.visitPrameterExpressionAssignTo = function(ctx) {
  return [this.visit(ctx.rhs), " := ", this.visit(ctx.lhs)];
};


// Visit a parse tree produced by STLangParser#constandUnsignedNumber.
STLangVisitor.prototype.visitConstandUnsignedNumber = function(ctx) {
  if (ctx.typ) {
    var type = this.visit(ctx.typ);
    return [type, "(", this.visit(ctx.num),")"];
  } else {
    return this.visit(ctx.num);
  }
};


// Visit a parse tree produced by STLangParser#constantSignedNumber.
STLangVisitor.prototype.visitConstantSignedNumber = function(ctx) {
  if (ctx.typ) {
    var type = this.visit(ctx.typ);
    return [type, "(", this.visit(ctx.sgn), this.visit(ctx.num),")"];
  } else {
    return ["(", this.visit(ctx.sgn), this.visit(ctx.num), ")"];
  }
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
  return ["(", this.visit(ctx.sgn), this.visit(ctx.id), ")"];
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
  return ["#"+ctx.getText()];
};


// Visit a parse tree produced by STLangParser#sign.
STLangVisitor.prototype.visitSign = function(ctx) {
  return [ctx.getText()];
};


// Visit a parse tree produced by STLangParser#bool.
STLangVisitor.prototype.visitBool = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by STLangParser#typeOfNumber.
STLangVisitor.prototype.visitTypeOfNumber = function(ctx) {
  var type = ctx.getText();
  if (type === "INT") {
    return ["TOS"];
  } if (type === "UINT") {
    return ["TOU"];
  } if (type === "DINT") {
    return ["TOL"];
  } if (type === "UDINT") {
    return ["TOD"];
  } if (type === "REAL") {
    return ["TOF"];
  } if (type === "LREAL") {
    return ["TODF"];
  } if (type === "WORD") {
    return ["TOU"];
  }
  throw new Error("Invalid type.");
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