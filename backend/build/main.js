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
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt = require("bcryptjs");
var Fastify = require("fastify");
var graphqlRequestSdk_1 = require("./graphqlRequestSdk");
var graphql_request_1 = require("graphql-request");
var auth_1 = require("./auth");
var requestClient = new graphql_request_1.GraphQLClient('http://localhost:8080/v1/graphql', {
    headers: { 'X-Hasura-Admin-Secret': 'my-secret' },
});
var client = graphqlRequestSdk_1.getSdk(requestClient);
var fastify = Fastify({
    logger: true,
    trustProxy: true,
});
fastify.post('/signup', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, hashedPassword, insert_user_one;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body.input, username = _a.username, password = _a.password;
                return [4 /*yield*/, bcrypt.hash(password, 10)];
            case 1:
                hashedPassword = _b.sent();
                return [4 /*yield*/, client.createUser({
                        username: username,
                        password: hashedPassword,
                    })];
            case 2:
                insert_user_one = (_b.sent()).insert_user_one;
                return [2 /*return*/, res.send(insert_user_one)];
        }
    });
}); });
fastify.post('/login', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, query, user, validPassword, token;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body.input, username = _a.username, password = _a.password;
                return [4 /*yield*/, client.findUserByUsername({ username: username })];
            case 1:
                query = _b.sent();
                user = query.user[0];
                return [4 /*yield*/, bcrypt.compare(password, user.password)];
            case 2:
                validPassword = _b.sent();
                if (!validPassword)
                    return [2 /*return*/, res.status(401).send({ message: 'Invalid' })];
                token = auth_1.generateJWT(user);
                return [2 /*return*/, res.send({ token: token })];
        }
    });
}); });
// Google Cloud Run will set this environment variable for you, so
// you can also use it to detect if you are running in Cloud Run
var IS_GOOGLE_CLOUD_RUN = process.env.K_SERVICE !== undefined;
// You must listen on all IPV4 addresses in Cloud Run
var address = IS_GOOGLE_CLOUD_RUN ? '0.0.0.0' : undefined;
// You must listen on the port Cloud Run provides
var port = process.env.PORT || 3000;
function start(server, address) {
    return __awaiter(this, void 0, void 0, function () {
        var URL;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, server.listen(port, address)];
                case 1:
                    URL = _a.sent();
                    console.log("Listening on " + URL);
                    return [2 /*return*/];
            }
        });
    });
}
start(fastify, address).catch(function (err) {
    console.error(err);
    process.exit(1);
});
