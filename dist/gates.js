"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XNOR = exports.NOR = exports.NAND = exports.XOR = exports.OR = exports.AND = void 0;
const AND = (a, b) => {
    return a && b;
};
exports.AND = AND;
const OR = (a, b) => {
    return a || b;
};
exports.OR = OR;
const XOR = (a, b) => {
    return a !== b;
};
exports.XOR = XOR;
const NAND = (a, b) => {
    return !(a && b);
};
exports.NAND = NAND;
const NOR = (a, b) => {
    return !a && !b;
};
exports.NOR = NOR;
const XNOR = (a, b) => {
    return a === b;
};
exports.XNOR = XNOR;
