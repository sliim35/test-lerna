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
var fs_1 = __importDefault(require("fs"));
var make_dir_1 = __importDefault(require("make-dir"));
var os_1 = __importDefault(require("os"));
var path_1 = __importDefault(require("path"));
var install_1 = require("./helpers/install");
function createApp(_a) {
    var appPath = _a.appPath;
    return __awaiter(this, void 0, void 0, function () {
        var root, appName, packageJson;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    root = path_1.default.resolve(appPath);
                    appName = path_1.default.basename(root);
                    return [4 /*yield*/, make_dir_1.default(root)];
                case 1:
                    _b.sent();
                    packageJson = {
                        name: appName,
                        version: '0.1.0',
                        private: true,
                        scripts: { dev: 'dev', build: 'build', start: 'start' },
                    };
                    fs_1.default.writeFileSync(path_1.default.join(root, 'package.json'), JSON.stringify(packageJson, null, 2) + os_1.default.EOL);
                    console.log("Installing " + chalk_1.default.cyan('react') + ", " + chalk_1.default.cyan('react-dom'));
                    return [4 /*yield*/, install_1.install(root, ['react', 'react-dom'])];
                case 2:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.createApp = createApp;
