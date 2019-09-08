parser grammar STLangParser;
options { tokenVocab=STLangLexer; }

// Entry
structuredText
    : st=statements EOF
    ;

statements
    : ((st+=statement)? SEMICOLON)*
    ;

// 文
statement
    : assignmentStatement       #statementAssignment
    | procedureStatement        #statementProcedure
    | returnStatement           #statementReturn
    | ifStatement               #statementIf
    | caseStatement             #statementCase
    | forStatement              #statementFor
    | whileStatement            #statementWhile
    | repeatStatement           #statementRepeat
    | continueStatement         #statementContinue
    | exitStatement             #statementExit
    ;

// 代入
assignmentStatement
    : lhs=variable ASSIGN rhs=expression
    ;

// 関数呼び出し
procedureStatement
    : func=identifier LPAREN (args=parameterList)? RPAREN
    ;

// FOR .. TO .. BY .. DO .. END_FOR
forStatement
    : FOR id=identifier ASSIGN start=expression TO end=expression (BY step=expression)? DO st=statements END_FOR
    ;

// REEPAT .. UNTIL .. END_REPEAT
whileStatement
    : WHILE cond=statements DO st=statements END_WHILE
    ;

// REEPAT .. UNTIL .. END_REPEAT
repeatStatement
    : REPEAT st=statements UNTIL cond=expression END_REPEAT
    ;

// IF .. THEN .. ELSIF .. THEN .. ELSE .. END_IF
ifStatement
    : IF cond=expression THEN st=statements (ELSIF elif_cond+=expression THEN elif_st+=statements)* (ELSE else_st=statements)? END_IF
    ;

// CASE .. OF .. ELSE .. END_CASE
caseStatement
    : CASE cond=expression OF (elm+=caseList)* (ELSE else_st=statements)? END_CASE
    ;

caseList
    : elm+=caseElement (COMMA elm+=caseElement)* COLON st=statements
    ;

caseElement
    : comp=constant                         #caseElementSingle
    | from=constant RANGE ro=constant       #caseElementRange
    ;

// CONTINUE
continueStatement
    : CONTINUE
    ;

// EXIT
exitStatement
    : EXIT
    ;

// RETURN
returnStatement
    : RETURN
    ;

// Expression
//   12.括弧
//   11.関数
//   10.ポインタ(対応しない)
//   9.単項演算
//   8.べき乗
//   7.乗算/除算/剰余
//   6.加算/減算
//   5.比較
//   4.等式／不等式
//   3.論理積
//   2.排他的論理和
//   1.論理和
expression
    : (c=constant | v=variable)                                 #expressionNone
    | LPAREN expr=expression RPAREN                             #expressionParen
    | func=identifier LPAREN (args=parameterList)? RPAREN       #expressionFunction
    | op=(PLUS|MINUS|NOT) expr=expression                       #expressionUnary
    | <assoc=right> lhs=expression op=POWER rhs=expression      #expressionPower
    | lhs=expression op=(ASTERISK | SLASH | MOD) rhs=expression #expressionMultipricative
    | lhs=expression op=(PLUS | MINUS) rhs=expression           #expressionAdditive
    | lhs=expression op=(GT|LT|GE|LE) rhs=expression            #expressionRelative
    | lhs=expression op=(EQ|NEQ) rhs=expression                 #expressionEquality
    | lhs=expression op=(AND|AMPERSAND) rhs=expression          #expressionLogicalAND
    | lhs=expression op=XOR rhs=expression                      #expressionLogicalXOR
    | lhs=expression op=OR rhs=expression                       #expressionLogicalOR
    ;

parameterList
    : expr+=parameterExpression (COMMA expr+=parameterExpression)*
    ;

parameterExpression
    : expression                                                #parameterExpressionNone
    | lhs=variable ASSIGN rhs=variable                          #prameterExpressionAssignFrom
    | lhs=variable OUTREF rhs=variable                          #prameterExpressionAssignTo
    ;

// 定数
constant
    : (typ=typeOfNumber SHARP)? num=unsignedNumber              #constandUnsignedNumber
    | (typ=typeOfNumber SHARP)? sgn=sign num=unsignedNumber     #constantSignedNumber
    | bool                                                      #constantBool
    | id=identifier                                             #constantIdentifier
    | sgn=sign id=identifier                                    #constantSignedIdentifier
    | (typ=typeOfString SHARP)? str=string                      #constantString
    ;

unsignedNumber
    : unsignedInteger
    | unsignedReal
    ;

unsignedInteger
    : num=NUM_INT_DEC                                           #unsignedNumberDec
    | num=NUM_INT_BIN                                           #unsignedNumberBin
    | num=NUM_INT_OCT                                           #unsignedNumberOct
    | num=NUM_INT_HEX                                           #unsignedNumberHex
    ;

unsignedReal
    : num=NUM_REAL
    ;

sign
    : PLUS
    | MINUS
    ;

bool
    : TRUE
    | FALSE
    ;

typeOfNumber
    : INT
    | UINT
    | DINT
    | UDINT
    | REAL
    | LREAL
    | WORD
    | BOOL
    ;

typeOfString
    : STRING
    | WSTRING
    ;

// 変数 ###mada 配列
variable
    : identifier
    ;

// 文字列
string
    : STRING_LITERAL        #stringMultiByte
    | WSTRING_LITERAL       #stringWide
    ;

// Identifier
identifier
    : id=IDENTIFIER
    ;
