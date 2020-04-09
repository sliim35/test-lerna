"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cross_spawn_1 = __importDefault(require("cross-spawn"));
function install(root, dependencies) {
    return new Promise(function (resolve, reject) {
        var command;
        var args;
        command = "yarnpkg";
        args = dependencies ? ["add", "--exact"] : ["install"];
        if (dependencies) {
            args.push.apply(args, dependencies);
        }
        args.push("--cwd", root);
        var child = cross_spawn_1.default(command, args, {
            stdio: "inherit",
            env: __assign(__assign({}, process.env), { ADBLOCK: "1", DISABLE_OPENCOLLECTIVE: "1" }),
        });
        child.on("close", function (code) {
            if (code !== 0) {
                reject({ command: command + " " + args.join(" ") });
                return;
            }
            resolve();
        });
    });
}
exports.install = install;
