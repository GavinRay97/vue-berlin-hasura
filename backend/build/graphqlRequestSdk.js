"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var graphql_tag_1 = require("graphql-tag");
var Some_Enum;
(function (Some_Enum) {
    Some_Enum["TypeA"] = "TYPE_A";
    Some_Enum["TypeB"] = "TYPE_B";
    Some_Enum["TypeC"] = "TYPE_C";
})(Some_Enum = exports.Some_Enum || (exports.Some_Enum = {}));
/** unique or primary key constraints on table "meetup" */
var Meetup_Constraint;
(function (Meetup_Constraint) {
    /** unique or primary key constraint */
    Meetup_Constraint["MeetupPkey"] = "meetup_pkey";
})(Meetup_Constraint = exports.Meetup_Constraint || (exports.Meetup_Constraint = {}));
/** unique or primary key constraints on table "meetup_message" */
var Meetup_Message_Constraint;
(function (Meetup_Message_Constraint) {
    /** unique or primary key constraint */
    Meetup_Message_Constraint["MeetupMessagePkey"] = "meetup_message_pkey";
})(Meetup_Message_Constraint = exports.Meetup_Message_Constraint || (exports.Meetup_Message_Constraint = {}));
/** select columns of table "meetup_message" */
var Meetup_Message_Select_Column;
(function (Meetup_Message_Select_Column) {
    /** column name */
    Meetup_Message_Select_Column["Id"] = "id";
    /** column name */
    Meetup_Message_Select_Column["MeetupId"] = "meetup_id";
    /** column name */
    Meetup_Message_Select_Column["UserId"] = "user_id";
})(Meetup_Message_Select_Column = exports.Meetup_Message_Select_Column || (exports.Meetup_Message_Select_Column = {}));
/** update columns of table "meetup_message" */
var Meetup_Message_Update_Column;
(function (Meetup_Message_Update_Column) {
    /** column name */
    Meetup_Message_Update_Column["Id"] = "id";
    /** column name */
    Meetup_Message_Update_Column["MeetupId"] = "meetup_id";
    /** column name */
    Meetup_Message_Update_Column["UserId"] = "user_id";
})(Meetup_Message_Update_Column = exports.Meetup_Message_Update_Column || (exports.Meetup_Message_Update_Column = {}));
/** select columns of table "meetup" */
var Meetup_Select_Column;
(function (Meetup_Select_Column) {
    /** column name */
    Meetup_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    Meetup_Select_Column["Datetime"] = "datetime";
    /** column name */
    Meetup_Select_Column["Id"] = "id";
    /** column name */
    Meetup_Select_Column["Location"] = "location";
    /** column name */
    Meetup_Select_Column["Name"] = "name";
    /** column name */
    Meetup_Select_Column["UpdatedAt"] = "updated_at";
})(Meetup_Select_Column = exports.Meetup_Select_Column || (exports.Meetup_Select_Column = {}));
/** update columns of table "meetup" */
var Meetup_Update_Column;
(function (Meetup_Update_Column) {
    /** column name */
    Meetup_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    Meetup_Update_Column["Datetime"] = "datetime";
    /** column name */
    Meetup_Update_Column["Id"] = "id";
    /** column name */
    Meetup_Update_Column["Location"] = "location";
    /** column name */
    Meetup_Update_Column["Name"] = "name";
    /** column name */
    Meetup_Update_Column["UpdatedAt"] = "updated_at";
})(Meetup_Update_Column = exports.Meetup_Update_Column || (exports.Meetup_Update_Column = {}));
/** unique or primary key constraints on table "meetup_user" */
var Meetup_User_Constraint;
(function (Meetup_User_Constraint) {
    /** unique or primary key constraint */
    Meetup_User_Constraint["MeetupUserPkey"] = "meetup_user_pkey";
})(Meetup_User_Constraint = exports.Meetup_User_Constraint || (exports.Meetup_User_Constraint = {}));
/** select columns of table "meetup_user" */
var Meetup_User_Select_Column;
(function (Meetup_User_Select_Column) {
    /** column name */
    Meetup_User_Select_Column["Id"] = "id";
    /** column name */
    Meetup_User_Select_Column["MeetupId"] = "meetup_id";
    /** column name */
    Meetup_User_Select_Column["UserId"] = "user_id";
})(Meetup_User_Select_Column = exports.Meetup_User_Select_Column || (exports.Meetup_User_Select_Column = {}));
/** update columns of table "meetup_user" */
var Meetup_User_Update_Column;
(function (Meetup_User_Update_Column) {
    /** column name */
    Meetup_User_Update_Column["Id"] = "id";
    /** column name */
    Meetup_User_Update_Column["MeetupId"] = "meetup_id";
    /** column name */
    Meetup_User_Update_Column["UserId"] = "user_id";
})(Meetup_User_Update_Column = exports.Meetup_User_Update_Column || (exports.Meetup_User_Update_Column = {}));
/** column ordering options */
var Order_By;
(function (Order_By) {
    /** in the ascending order, nulls last */
    Order_By["Asc"] = "asc";
    /** in the ascending order, nulls first */
    Order_By["AscNullsFirst"] = "asc_nulls_first";
    /** in the ascending order, nulls last */
    Order_By["AscNullsLast"] = "asc_nulls_last";
    /** in the descending order, nulls first */
    Order_By["Desc"] = "desc";
    /** in the descending order, nulls first */
    Order_By["DescNullsFirst"] = "desc_nulls_first";
    /** in the descending order, nulls last */
    Order_By["DescNullsLast"] = "desc_nulls_last";
})(Order_By = exports.Order_By || (exports.Order_By = {}));
/** unique or primary key constraints on table "user" */
var User_Constraint;
(function (User_Constraint) {
    /** unique or primary key constraint */
    User_Constraint["UserPkey"] = "user_pkey";
})(User_Constraint = exports.User_Constraint || (exports.User_Constraint = {}));
/** select columns of table "user" */
var User_Select_Column;
(function (User_Select_Column) {
    /** column name */
    User_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    User_Select_Column["Id"] = "id";
    /** column name */
    User_Select_Column["Password"] = "password";
    /** column name */
    User_Select_Column["UpdatedAt"] = "updated_at";
    /** column name */
    User_Select_Column["Username"] = "username";
})(User_Select_Column = exports.User_Select_Column || (exports.User_Select_Column = {}));
/** update columns of table "user" */
var User_Update_Column;
(function (User_Update_Column) {
    /** column name */
    User_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    User_Update_Column["Id"] = "id";
    /** column name */
    User_Update_Column["Password"] = "password";
    /** column name */
    User_Update_Column["UpdatedAt"] = "updated_at";
    /** column name */
    User_Update_Column["Username"] = "username";
})(User_Update_Column = exports.User_Update_Column || (exports.User_Update_Column = {}));
exports.AllUsersDocument = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query AllUsers {\n  user {\n    id\n    username\n  }\n}\n    "], ["\n    query AllUsers {\n  user {\n    id\n    username\n  }\n}\n    "])));
var defaultWrapper = function (sdkFunction) { return sdkFunction(); };
function getSdk(client, withWrapper) {
    if (withWrapper === void 0) { withWrapper = defaultWrapper; }
    return {
        AllUsers: function (variables) {
            return withWrapper(function () { return client.request(graphql_1.print(exports.AllUsersDocument), variables); });
        }
    };
}
exports.getSdk = getSdk;
var templateObject_1;
