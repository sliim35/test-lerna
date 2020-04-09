#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var clear_1 = __importDefault(require("clear"));
var figlet_1 = __importDefault(require("figlet"));
var prompts_1 = __importDefault(require("prompts"));
var commander_1 = __importDefault(require("commander"));
var path_1 = __importDefault(require("path"));
var createApp_1 = require("./createApp");
var package_json_1 = __importDefault(require("./package.json"));
var projectPath = '';
clear_1.default();
new commander_1.default.Command(package_json_1.default.name)
    .version(package_json_1.default.version)
    .arguments('<project-directory>')
    .usage(chalk_1.default.green('<project-directory>') + " [options]")
    .action(function (name) {
    console.log(name);
    projectPath = name;
})
    .parse(process.argv);
console.log(chalk_1.default.red(figlet_1.default.textSync('admin-cli', { horizontalLayout: 'full' })));
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var res, template, resolvedProjectPath;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (typeof projectPath === 'string') {
                        projectPath = projectPath.trim();
                    }
                    if (!!projectPath) return [3 /*break*/, 2];
                    return [4 /*yield*/, prompts_1.default({
                            type: 'text',
                            name: 'path',
                            message: 'What is your project named?',
                            initial: 'my-app',
                        })];
                case 1:
                    res = _a.sent();
                    if (typeof res.path === 'string') {
                        projectPath = res.path.trim();
                    }
                    _a.label = 2;
                case 2: return [4 /*yield*/, prompts_1.default({
                        type: 'select',
                        name: 'value',
                        message: 'Pick a template',
                        choices: [
                            { title: 'Default starter app', value: 'default' },
                            { title: 'App with super graphic template', value: 'example' },
                        ],
                    })];
                case 3:
                    template = _a.sent();
                    console.log(template);
                    resolvedProjectPath = path_1.default.resolve(projectPath);
                    return [4 /*yield*/, createApp_1.createApp({
                            appPath: resolvedProjectPath,
                        })];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
run();
