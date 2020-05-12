"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var HASURA_GRAPHQL_JWT_SECRET = {
    type: process.env.HASURA_JWT_SECRET_TYPE || 'HS256',
    key: process.env.HASURA_JWT_SECRET_KEY ||
        'XM9RnWahz+qrjSJjG/RNCMTR55AWhj0BKkru9Ksr/rY=',
};
var JWT_CONFIG = {
    algorithm: HASURA_GRAPHQL_JWT_SECRET.type,
};
function generateJWT(user) {
    var payload = {
        'https://hasura.io/jwt/claims': {
            'x-hasura-allowed-roles': ['user'],
            'x-hasura-default-role': 'user',
            'x-hasura-user-id': user.id.toString(),
        },
    };
    return jwt.sign(payload, HASURA_GRAPHQL_JWT_SECRET.key, JWT_CONFIG);
}
exports.generateJWT = generateJWT;
