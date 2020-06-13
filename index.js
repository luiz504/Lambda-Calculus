//Lambda Calculos

//Currying

//use QUOKKA to playaround

let r;

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

r = sum(1)(2)(3);

r;

("result 6");

const sum2 = (a) => (b) => (c) => a + b + c;

r = sum2(1)(2)(3);

r;

("result 6");

//func identity
const ID = (a) => a;

r = ID(9);

r;

("result 9");

//func First

const FIRST = (a) => (_) => a;

r = FIRST(3)(7);

r;

("result 3");

//func Last

const LAST = (_) => (b) => b;

r = LAST(3)(7);

r;

("result 7");

//function fleep

const FLEEP = (func) => (a) => (b) => func(b)(a);

r = FLEEP(FIRST)(3)(7);

r;

("result 7");

r = FLEEP(LAST)(3)(7);

r;

("result 3");

/**
 * Let's start to understand the concept of true and false defining the boolean
 * variables, it's prerequisites to work with logical operators, NOT - AND - OR
 * (not working atm with EXCLUSIVE - DIFERENCE)
 */

//boolean

/**
 * whe need define it from a concept of function
 * it will be function instead literal values
 *
 * TRUE ? FIRST : LAST **
 * FALSE ? LAST : FIRST **
 */

const T = FIRST;

const F = LAST;

T.inspect = () => "True (FIRST)";

F.inspect = () => "False (LAST)";

T;

("T  => TRUE (FIRST)");

F;

("F  => FALSE (LAST)");

// NOT

/**
 * it's a unary operator, so it receive only one operand
 */

const NOT = (a) => a(F)(T);

r = NOT(T);

r;

("result FALSE (LAST)");

r = NOT(F);

r;

("result TRUE (FIRST)");

//AND

/**
 * it's a binary operator, so it receive 2 operands
 */

const AND = (a) => (b) => a(b)(F);

r = AND(T)(T);

r;

("result TRUE (FIRST)");

r = AND(T)(F);

r;

("result FALSE (LAST)");

r = AND(F)(T);

r;

("result FALSE (LAST)");

r = AND(F)(F);

r;

("result FALSE (LAST)");

//OR

/**
 * it's a binary operator, so it receive 2 operands
 */

const OR = (a) => (b) => a(T)(b);

r = OR(T)(T);

r;

("result TRUE (FIRST)");

r = OR(T)(T);

r;

("result TRUE (FIRST)");

r = OR(T)(F);

r;

("result TRUE (FIRST)");

r = OR(F)(T);

r;

("result TRUE (FIRST)");

r = OR(F)(F);

r;

("result FALSE (LAST)");
