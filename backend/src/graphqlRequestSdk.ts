import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  json: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type JsonWebToken = {
   __typename?: 'JsonWebToken';
  token: Scalars['String'];
};

export type SignupResponse = {
   __typename?: 'SignupResponse';
  password: Scalars['String'];
  username: Scalars['String'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};

/** columns and relationships of "meetup" */
export type Meetup = {
   __typename?: 'meetup';
  /** An array relationship */
  comments: Array<Meetup_Comment>;
  /** An aggregated array relationship */
  comments_aggregate: Meetup_Comment_Aggregate;
  created_at: Scalars['timestamptz'];
  datetime: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['Int'];
  image_url: Scalars['String'];
  location: Scalars['String'];
  /** An array relationship */
  meetup_users: Array<Meetup_User>;
  /** An aggregated array relationship */
  meetup_users_aggregate: Meetup_User_Aggregate;
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "meetup" */
export type MeetupCommentsArgs = {
  distinct_on?: Maybe<Array<Meetup_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meetup_Comment_Order_By>>;
  where?: Maybe<Meetup_Comment_Bool_Exp>;
};


/** columns and relationships of "meetup" */
export type MeetupComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Meetup_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meetup_Comment_Order_By>>;
  where?: Maybe<Meetup_Comment_Bool_Exp>;
};


/** columns and relationships of "meetup" */
export type MeetupMeetup_UsersArgs = {
  distinct_on?: Maybe<Array<Meetup_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meetup_User_Order_By>>;
  where?: Maybe<Meetup_User_Bool_Exp>;
};


/** columns and relationships of "meetup" */
export type MeetupMeetup_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Meetup_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meetup_User_Order_By>>;
  where?: Maybe<Meetup_User_Bool_Exp>;
};

/** aggregated selection of "meetup" */
export type Meetup_Aggregate = {
   __typename?: 'meetup_aggregate';
  aggregate?: Maybe<Meetup_Aggregate_Fields>;
  nodes: Array<Meetup>;
};

/** aggregate fields of "meetup" */
export type Meetup_Aggregate_Fields = {
   __typename?: 'meetup_aggregate_fields';
  avg?: Maybe<Meetup_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Meetup_Max_Fields>;
  min?: Maybe<Meetup_Min_Fields>;
  stddev?: Maybe<Meetup_Stddev_Fields>;
  stddev_pop?: Maybe<Meetup_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Meetup_Stddev_Samp_Fields>;
  sum?: Maybe<Meetup_Sum_Fields>;
  var_pop?: Maybe<Meetup_Var_Pop_Fields>;
  var_samp?: Maybe<Meetup_Var_Samp_Fields>;
  variance?: Maybe<Meetup_Variance_Fields>;
};


/** aggregate fields of "meetup" */
export type Meetup_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Meetup_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "meetup" */
export type Meetup_Aggregate_Order_By = {
  avg?: Maybe<Meetup_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Meetup_Max_Order_By>;
  min?: Maybe<Meetup_Min_Order_By>;
  stddev?: Maybe<Meetup_Stddev_Order_By>;
  stddev_pop?: Maybe<Meetup_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Meetup_Stddev_Samp_Order_By>;
  sum?: Maybe<Meetup_Sum_Order_By>;
  var_pop?: Maybe<Meetup_Var_Pop_Order_By>;
  var_samp?: Maybe<Meetup_Var_Samp_Order_By>;
  variance?: Maybe<Meetup_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "meetup" */
export type Meetup_Arr_Rel_Insert_Input = {
  data: Array<Meetup_Insert_Input>;
  on_conflict?: Maybe<Meetup_On_Conflict>;
};

/** aggregate avg on columns */
export type Meetup_Avg_Fields = {
   __typename?: 'meetup_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "meetup" */
export type Meetup_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "meetup". All fields are combined with a logical 'AND'. */
export type Meetup_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Meetup_Bool_Exp>>>;
  _not?: Maybe<Meetup_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Meetup_Bool_Exp>>>;
  comments?: Maybe<Meetup_Comment_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  datetime?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  image_url?: Maybe<String_Comparison_Exp>;
  location?: Maybe<String_Comparison_Exp>;
  meetup_users?: Maybe<Meetup_User_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** columns and relationships of "meetup_comment" */
export type Meetup_Comment = {
   __typename?: 'meetup_comment';
  id: Scalars['Int'];
  /** An object relationship */
  meetup: Meetup;
  meetup_id: Scalars['Int'];
  text: Scalars['String'];
  /** An object relationship */
  user: User;
  user_id: Scalars['Int'];
};

/** aggregated selection of "meetup_comment" */
export type Meetup_Comment_Aggregate = {
   __typename?: 'meetup_comment_aggregate';
  aggregate?: Maybe<Meetup_Comment_Aggregate_Fields>;
  nodes: Array<Meetup_Comment>;
};

/** aggregate fields of "meetup_comment" */
export type Meetup_Comment_Aggregate_Fields = {
   __typename?: 'meetup_comment_aggregate_fields';
  avg?: Maybe<Meetup_Comment_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Meetup_Comment_Max_Fields>;
  min?: Maybe<Meetup_Comment_Min_Fields>;
  stddev?: Maybe<Meetup_Comment_Stddev_Fields>;
  stddev_pop?: Maybe<Meetup_Comment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Meetup_Comment_Stddev_Samp_Fields>;
  sum?: Maybe<Meetup_Comment_Sum_Fields>;
  var_pop?: Maybe<Meetup_Comment_Var_Pop_Fields>;
  var_samp?: Maybe<Meetup_Comment_Var_Samp_Fields>;
  variance?: Maybe<Meetup_Comment_Variance_Fields>;
};


/** aggregate fields of "meetup_comment" */
export type Meetup_Comment_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Meetup_Comment_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "meetup_comment" */
export type Meetup_Comment_Aggregate_Order_By = {
  avg?: Maybe<Meetup_Comment_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Meetup_Comment_Max_Order_By>;
  min?: Maybe<Meetup_Comment_Min_Order_By>;
  stddev?: Maybe<Meetup_Comment_Stddev_Order_By>;
  stddev_pop?: Maybe<Meetup_Comment_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Meetup_Comment_Stddev_Samp_Order_By>;
  sum?: Maybe<Meetup_Comment_Sum_Order_By>;
  var_pop?: Maybe<Meetup_Comment_Var_Pop_Order_By>;
  var_samp?: Maybe<Meetup_Comment_Var_Samp_Order_By>;
  variance?: Maybe<Meetup_Comment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "meetup_comment" */
export type Meetup_Comment_Arr_Rel_Insert_Input = {
  data: Array<Meetup_Comment_Insert_Input>;
  on_conflict?: Maybe<Meetup_Comment_On_Conflict>;
};

/** aggregate avg on columns */
export type Meetup_Comment_Avg_Fields = {
   __typename?: 'meetup_comment_avg_fields';
  id?: Maybe<Scalars['Float']>;
  meetup_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "meetup_comment" */
export type Meetup_Comment_Avg_Order_By = {
  id?: Maybe<Order_By>;
  meetup_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "meetup_comment". All fields are combined with a logical 'AND'. */
export type Meetup_Comment_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Meetup_Comment_Bool_Exp>>>;
  _not?: Maybe<Meetup_Comment_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Meetup_Comment_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  meetup?: Maybe<Meetup_Bool_Exp>;
  meetup_id?: Maybe<Int_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "meetup_comment" */
export enum Meetup_Comment_Constraint {
  /** unique or primary key constraint */
  MeetupCommentPkey = 'meetup_comment_pkey'
}

/** input type for incrementing integer column in table "meetup_comment" */
export type Meetup_Comment_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  meetup_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "meetup_comment" */
export type Meetup_Comment_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  meetup?: Maybe<Meetup_Obj_Rel_Insert_Input>;
  meetup_id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Meetup_Comment_Max_Fields = {
   __typename?: 'meetup_comment_max_fields';
  id?: Maybe<Scalars['Int']>;
  meetup_id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "meetup_comment" */
export type Meetup_Comment_Max_Order_By = {
  id?: Maybe<Order_By>;
  meetup_id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Meetup_Comment_Min_Fields = {
   __typename?: 'meetup_comment_min_fields';
  id?: Maybe<Scalars['Int']>;
  meetup_id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "meetup_comment" */
export type Meetup_Comment_Min_Order_By = {
  id?: Maybe<Order_By>;
  meetup_id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "meetup_comment" */
export type Meetup_Comment_Mutation_Response = {
   __typename?: 'meetup_comment_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Meetup_Comment>;
};

/** input type for inserting object relation for remote table "meetup_comment" */
export type Meetup_Comment_Obj_Rel_Insert_Input = {
  data: Meetup_Comment_Insert_Input;
  on_conflict?: Maybe<Meetup_Comment_On_Conflict>;
};

/** on conflict condition type for table "meetup_comment" */
export type Meetup_Comment_On_Conflict = {
  constraint: Meetup_Comment_Constraint;
  update_columns: Array<Meetup_Comment_Update_Column>;
  where?: Maybe<Meetup_Comment_Bool_Exp>;
};

/** ordering options when selecting data from "meetup_comment" */
export type Meetup_Comment_Order_By = {
  id?: Maybe<Order_By>;
  meetup?: Maybe<Meetup_Order_By>;
  meetup_id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "meetup_comment" */
export type Meetup_Comment_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "meetup_comment" */
export enum Meetup_Comment_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MeetupId = 'meetup_id',
  /** column name */
  Text = 'text',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "meetup_comment" */
export type Meetup_Comment_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  meetup_id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Meetup_Comment_Stddev_Fields = {
   __typename?: 'meetup_comment_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  meetup_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "meetup_comment" */
export type Meetup_Comment_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  meetup_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Meetup_Comment_Stddev_Pop_Fields = {
   __typename?: 'meetup_comment_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  meetup_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "meetup_comment" */
export type Meetup_Comment_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  meetup_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Meetup_Comment_Stddev_Samp_Fields = {
   __typename?: 'meetup_comment_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  meetup_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "meetup_comment" */
export type Meetup_Comment_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  meetup_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Meetup_Comment_Sum_Fields = {
   __typename?: 'meetup_comment_sum_fields';
  id?: Maybe<Scalars['Int']>;
  meetup_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "meetup_comment" */
export type Meetup_Comment_Sum_Order_By = {
  id?: Maybe<Order_By>;
  meetup_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "meetup_comment" */
export enum Meetup_Comment_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MeetupId = 'meetup_id',
  /** column name */
  Text = 'text',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Meetup_Comment_Var_Pop_Fields = {
   __typename?: 'meetup_comment_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  meetup_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "meetup_comment" */
export type Meetup_Comment_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  meetup_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Meetup_Comment_Var_Samp_Fields = {
   __typename?: 'meetup_comment_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  meetup_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "meetup_comment" */
export type Meetup_Comment_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  meetup_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Meetup_Comment_Variance_Fields = {
   __typename?: 'meetup_comment_variance_fields';
  id?: Maybe<Scalars['Float']>;
  meetup_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "meetup_comment" */
export type Meetup_Comment_Variance_Order_By = {
  id?: Maybe<Order_By>;
  meetup_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** unique or primary key constraints on table "meetup" */
export enum Meetup_Constraint {
  /** unique or primary key constraint */
  MeetupPkey = 'meetup_pkey'
}

/** input type for incrementing integer column in table "meetup" */
export type Meetup_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "meetup" */
export type Meetup_Insert_Input = {
  comments?: Maybe<Meetup_Comment_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  datetime?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  meetup_users?: Maybe<Meetup_User_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Meetup_Max_Fields = {
   __typename?: 'meetup_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  datetime?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "meetup" */
export type Meetup_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  datetime?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Meetup_Min_Fields = {
   __typename?: 'meetup_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  datetime?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "meetup" */
export type Meetup_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  datetime?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "meetup" */
export type Meetup_Mutation_Response = {
   __typename?: 'meetup_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Meetup>;
};

/** input type for inserting object relation for remote table "meetup" */
export type Meetup_Obj_Rel_Insert_Input = {
  data: Meetup_Insert_Input;
  on_conflict?: Maybe<Meetup_On_Conflict>;
};

/** on conflict condition type for table "meetup" */
export type Meetup_On_Conflict = {
  constraint: Meetup_Constraint;
  update_columns: Array<Meetup_Update_Column>;
  where?: Maybe<Meetup_Bool_Exp>;
};

/** ordering options when selecting data from "meetup" */
export type Meetup_Order_By = {
  comments_aggregate?: Maybe<Meetup_Comment_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  datetime?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  meetup_users_aggregate?: Maybe<Meetup_User_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "meetup" */
export type Meetup_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "meetup" */
export enum Meetup_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Datetime = 'datetime',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "meetup" */
export type Meetup_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  datetime?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Meetup_Stddev_Fields = {
   __typename?: 'meetup_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "meetup" */
export type Meetup_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Meetup_Stddev_Pop_Fields = {
   __typename?: 'meetup_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "meetup" */
export type Meetup_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Meetup_Stddev_Samp_Fields = {
   __typename?: 'meetup_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "meetup" */
export type Meetup_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Meetup_Sum_Fields = {
   __typename?: 'meetup_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "meetup" */
export type Meetup_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "meetup" */
export enum Meetup_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Datetime = 'datetime',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "meetup_user" */
export type Meetup_User = {
   __typename?: 'meetup_user';
  id: Scalars['Int'];
  /** An object relationship */
  meetup: Meetup;
  meetup_id: Scalars['Int'];
  /** An object relationship */
  user: User;
  user_id: Scalars['Int'];
};

/** aggregated selection of "meetup_user" */
export type Meetup_User_Aggregate = {
   __typename?: 'meetup_user_aggregate';
  aggregate?: Maybe<Meetup_User_Aggregate_Fields>;
  nodes: Array<Meetup_User>;
};

/** aggregate fields of "meetup_user" */
export type Meetup_User_Aggregate_Fields = {
   __typename?: 'meetup_user_aggregate_fields';
  avg?: Maybe<Meetup_User_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Meetup_User_Max_Fields>;
  min?: Maybe<Meetup_User_Min_Fields>;
  stddev?: Maybe<Meetup_User_Stddev_Fields>;
  stddev_pop?: Maybe<Meetup_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Meetup_User_Stddev_Samp_Fields>;
  sum?: Maybe<Meetup_User_Sum_Fields>;
  var_pop?: Maybe<Meetup_User_Var_Pop_Fields>;
  var_samp?: Maybe<Meetup_User_Var_Samp_Fields>;
  variance?: Maybe<Meetup_User_Variance_Fields>;
};


/** aggregate fields of "meetup_user" */
export type Meetup_User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Meetup_User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "meetup_user" */
export type Meetup_User_Aggregate_Order_By = {
  avg?: Maybe<Meetup_User_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Meetup_User_Max_Order_By>;
  min?: Maybe<Meetup_User_Min_Order_By>;
  stddev?: Maybe<Meetup_User_Stddev_Order_By>;
  stddev_pop?: Maybe<Meetup_User_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Meetup_User_Stddev_Samp_Order_By>;
  sum?: Maybe<Meetup_User_Sum_Order_By>;
  var_pop?: Maybe<Meetup_User_Var_Pop_Order_By>;
  var_samp?: Maybe<Meetup_User_Var_Samp_Order_By>;
  variance?: Maybe<Meetup_User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "meetup_user" */
export type Meetup_User_Arr_Rel_Insert_Input = {
  data: Array<Meetup_User_Insert_Input>;
  on_conflict?: Maybe<Meetup_User_On_Conflict>;
};

/** aggregate avg on columns */
export type Meetup_User_Avg_Fields = {
   __typename?: 'meetup_user_avg_fields';
  id?: Maybe<Scalars['Float']>;
  meetup_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "meetup_user" */
export type Meetup_User_Avg_Order_By = {
  id?: Maybe<Order_By>;
  meetup_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "meetup_user". All fields are combined with a logical 'AND'. */
export type Meetup_User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Meetup_User_Bool_Exp>>>;
  _not?: Maybe<Meetup_User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Meetup_User_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  meetup?: Maybe<Meetup_Bool_Exp>;
  meetup_id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "meetup_user" */
export enum Meetup_User_Constraint {
  /** unique or primary key constraint */
  MeetupUserPkey = 'meetup_user_pkey'
}

/** input type for incrementing integer column in table "meetup_user" */
export type Meetup_User_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  meetup_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "meetup_user" */
export type Meetup_User_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  meetup?: Maybe<Meetup_Obj_Rel_Insert_Input>;
  meetup_id?: Maybe<Scalars['Int']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Meetup_User_Max_Fields = {
   __typename?: 'meetup_user_max_fields';
  id?: Maybe<Scalars['Int']>;
  meetup_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "meetup_user" */
export type Meetup_User_Max_Order_By = {
  id?: Maybe<Order_By>;
  meetup_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Meetup_User_Min_Fields = {
   __typename?: 'meetup_user_min_fields';
  id?: Maybe<Scalars['Int']>;
  meetup_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "meetup_user" */
export type Meetup_User_Min_Order_By = {
  id?: Maybe<Order_By>;
  meetup_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "meetup_user" */
export type Meetup_User_Mutation_Response = {
   __typename?: 'meetup_user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Meetup_User>;
};

/** input type for inserting object relation for remote table "meetup_user" */
export type Meetup_User_Obj_Rel_Insert_Input = {
  data: Meetup_User_Insert_Input;
  on_conflict?: Maybe<Meetup_User_On_Conflict>;
};

/** on conflict condition type for table "meetup_user" */
export type Meetup_User_On_Conflict = {
  constraint: Meetup_User_Constraint;
  update_columns: Array<Meetup_User_Update_Column>;
  where?: Maybe<Meetup_User_Bool_Exp>;
};

/** ordering options when selecting data from "meetup_user" */
export type Meetup_User_Order_By = {
  id?: Maybe<Order_By>;
  meetup?: Maybe<Meetup_Order_By>;
  meetup_id?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "meetup_user" */
export type Meetup_User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "meetup_user" */
export enum Meetup_User_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MeetupId = 'meetup_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "meetup_user" */
export type Meetup_User_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  meetup_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Meetup_User_Stddev_Fields = {
   __typename?: 'meetup_user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  meetup_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "meetup_user" */
export type Meetup_User_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  meetup_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Meetup_User_Stddev_Pop_Fields = {
   __typename?: 'meetup_user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  meetup_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "meetup_user" */
export type Meetup_User_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  meetup_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Meetup_User_Stddev_Samp_Fields = {
   __typename?: 'meetup_user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  meetup_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "meetup_user" */
export type Meetup_User_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  meetup_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Meetup_User_Sum_Fields = {
   __typename?: 'meetup_user_sum_fields';
  id?: Maybe<Scalars['Int']>;
  meetup_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "meetup_user" */
export type Meetup_User_Sum_Order_By = {
  id?: Maybe<Order_By>;
  meetup_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "meetup_user" */
export enum Meetup_User_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MeetupId = 'meetup_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Meetup_User_Var_Pop_Fields = {
   __typename?: 'meetup_user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  meetup_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "meetup_user" */
export type Meetup_User_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  meetup_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Meetup_User_Var_Samp_Fields = {
   __typename?: 'meetup_user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  meetup_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "meetup_user" */
export type Meetup_User_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  meetup_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Meetup_User_Variance_Fields = {
   __typename?: 'meetup_user_variance_fields';
  id?: Maybe<Scalars['Float']>;
  meetup_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "meetup_user" */
export type Meetup_User_Variance_Order_By = {
  id?: Maybe<Order_By>;
  meetup_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Meetup_Var_Pop_Fields = {
   __typename?: 'meetup_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "meetup" */
export type Meetup_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Meetup_Var_Samp_Fields = {
   __typename?: 'meetup_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "meetup" */
export type Meetup_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Meetup_Variance_Fields = {
   __typename?: 'meetup_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "meetup" */
export type Meetup_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
   __typename?: 'mutation_root';
  /** perform the action: "Signup" */
  Signup?: Maybe<SignupResponse>;
  /** delete data from the table: "meetup" */
  delete_meetup?: Maybe<Meetup_Mutation_Response>;
  /** delete single row from the table: "meetup" */
  delete_meetup_by_pk?: Maybe<Meetup>;
  /** delete data from the table: "meetup_comment" */
  delete_meetup_comment?: Maybe<Meetup_Comment_Mutation_Response>;
  /** delete single row from the table: "meetup_comment" */
  delete_meetup_comment_by_pk?: Maybe<Meetup_Comment>;
  /** delete data from the table: "meetup_user" */
  delete_meetup_user?: Maybe<Meetup_User_Mutation_Response>;
  /** delete single row from the table: "meetup_user" */
  delete_meetup_user_by_pk?: Maybe<Meetup_User>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "meetup" */
  insert_meetup?: Maybe<Meetup_Mutation_Response>;
  /** insert data into the table: "meetup_comment" */
  insert_meetup_comment?: Maybe<Meetup_Comment_Mutation_Response>;
  /** insert a single row into the table: "meetup_comment" */
  insert_meetup_comment_one?: Maybe<Meetup_Comment>;
  /** insert a single row into the table: "meetup" */
  insert_meetup_one?: Maybe<Meetup>;
  /** insert data into the table: "meetup_user" */
  insert_meetup_user?: Maybe<Meetup_User_Mutation_Response>;
  /** insert a single row into the table: "meetup_user" */
  insert_meetup_user_one?: Maybe<Meetup_User>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "meetup" */
  update_meetup?: Maybe<Meetup_Mutation_Response>;
  /** update single row of the table: "meetup" */
  update_meetup_by_pk?: Maybe<Meetup>;
  /** update data of the table: "meetup_comment" */
  update_meetup_comment?: Maybe<Meetup_Comment_Mutation_Response>;
  /** update single row of the table: "meetup_comment" */
  update_meetup_comment_by_pk?: Maybe<Meetup_Comment>;
  /** update data of the table: "meetup_user" */
  update_meetup_user?: Maybe<Meetup_User_Mutation_Response>;
  /** update single row of the table: "meetup_user" */
  update_meetup_user_by_pk?: Maybe<Meetup_User>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootSignupArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_MeetupArgs = {
  where: Meetup_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Meetup_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Meetup_CommentArgs = {
  where: Meetup_Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Meetup_Comment_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Meetup_UserArgs = {
  where: Meetup_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Meetup_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_MeetupArgs = {
  objects: Array<Meetup_Insert_Input>;
  on_conflict?: Maybe<Meetup_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meetup_CommentArgs = {
  objects: Array<Meetup_Comment_Insert_Input>;
  on_conflict?: Maybe<Meetup_Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meetup_Comment_OneArgs = {
  object: Meetup_Comment_Insert_Input;
  on_conflict?: Maybe<Meetup_Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meetup_OneArgs = {
  object: Meetup_Insert_Input;
  on_conflict?: Maybe<Meetup_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meetup_UserArgs = {
  objects: Array<Meetup_User_Insert_Input>;
  on_conflict?: Maybe<Meetup_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meetup_User_OneArgs = {
  object: Meetup_User_Insert_Input;
  on_conflict?: Maybe<Meetup_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_MeetupArgs = {
  _inc?: Maybe<Meetup_Inc_Input>;
  _set?: Maybe<Meetup_Set_Input>;
  where: Meetup_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Meetup_By_PkArgs = {
  _inc?: Maybe<Meetup_Inc_Input>;
  _set?: Maybe<Meetup_Set_Input>;
  pk_columns: Meetup_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Meetup_CommentArgs = {
  _inc?: Maybe<Meetup_Comment_Inc_Input>;
  _set?: Maybe<Meetup_Comment_Set_Input>;
  where: Meetup_Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Meetup_Comment_By_PkArgs = {
  _inc?: Maybe<Meetup_Comment_Inc_Input>;
  _set?: Maybe<Meetup_Comment_Set_Input>;
  pk_columns: Meetup_Comment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Meetup_UserArgs = {
  _inc?: Maybe<Meetup_User_Inc_Input>;
  _set?: Maybe<Meetup_User_Set_Input>;
  where: Meetup_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Meetup_User_By_PkArgs = {
  _inc?: Maybe<Meetup_User_Inc_Input>;
  _set?: Maybe<Meetup_User_Set_Input>;
  pk_columns: Meetup_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
   __typename?: 'query_root';
  /** perform the action: "Login" */
  Login?: Maybe<JsonWebToken>;
  /** fetch data from the table: "meetup" */
  meetup: Array<Meetup>;
  /** fetch aggregated fields from the table: "meetup" */
  meetup_aggregate: Meetup_Aggregate;
  /** fetch data from the table: "meetup" using primary key columns */
  meetup_by_pk?: Maybe<Meetup>;
  /** fetch data from the table: "meetup_comment" */
  meetup_comment: Array<Meetup_Comment>;
  /** fetch aggregated fields from the table: "meetup_comment" */
  meetup_comment_aggregate: Meetup_Comment_Aggregate;
  /** fetch data from the table: "meetup_comment" using primary key columns */
  meetup_comment_by_pk?: Maybe<Meetup_Comment>;
  /** fetch data from the table: "meetup_user" */
  meetup_user: Array<Meetup_User>;
  /** fetch aggregated fields from the table: "meetup_user" */
  meetup_user_aggregate: Meetup_User_Aggregate;
  /** fetch data from the table: "meetup_user" using primary key columns */
  meetup_user_by_pk?: Maybe<Meetup_User>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


/** query root */
export type Query_RootLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


/** query root */
export type Query_RootMeetupArgs = {
  distinct_on?: Maybe<Array<Meetup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meetup_Order_By>>;
  where?: Maybe<Meetup_Bool_Exp>;
};


/** query root */
export type Query_RootMeetup_AggregateArgs = {
  distinct_on?: Maybe<Array<Meetup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meetup_Order_By>>;
  where?: Maybe<Meetup_Bool_Exp>;
};


/** query root */
export type Query_RootMeetup_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootMeetup_CommentArgs = {
  distinct_on?: Maybe<Array<Meetup_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meetup_Comment_Order_By>>;
  where?: Maybe<Meetup_Comment_Bool_Exp>;
};


/** query root */
export type Query_RootMeetup_Comment_AggregateArgs = {
  distinct_on?: Maybe<Array<Meetup_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meetup_Comment_Order_By>>;
  where?: Maybe<Meetup_Comment_Bool_Exp>;
};


/** query root */
export type Query_RootMeetup_Comment_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootMeetup_UserArgs = {
  distinct_on?: Maybe<Array<Meetup_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meetup_User_Order_By>>;
  where?: Maybe<Meetup_User_Bool_Exp>;
};


/** query root */
export type Query_RootMeetup_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Meetup_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meetup_User_Order_By>>;
  where?: Maybe<Meetup_User_Bool_Exp>;
};


/** query root */
export type Query_RootMeetup_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_Root = {
   __typename?: 'subscription_root';
  /** perform the action: "Login" */
  Login?: Maybe<JsonWebToken>;
  /** fetch data from the table: "meetup" */
  meetup: Array<Meetup>;
  /** fetch aggregated fields from the table: "meetup" */
  meetup_aggregate: Meetup_Aggregate;
  /** fetch data from the table: "meetup" using primary key columns */
  meetup_by_pk?: Maybe<Meetup>;
  /** fetch data from the table: "meetup_comment" */
  meetup_comment: Array<Meetup_Comment>;
  /** fetch aggregated fields from the table: "meetup_comment" */
  meetup_comment_aggregate: Meetup_Comment_Aggregate;
  /** fetch data from the table: "meetup_comment" using primary key columns */
  meetup_comment_by_pk?: Maybe<Meetup_Comment>;
  /** fetch data from the table: "meetup_user" */
  meetup_user: Array<Meetup_User>;
  /** fetch aggregated fields from the table: "meetup_user" */
  meetup_user_aggregate: Meetup_User_Aggregate;
  /** fetch data from the table: "meetup_user" using primary key columns */
  meetup_user_by_pk?: Maybe<Meetup_User>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


/** subscription root */
export type Subscription_RootLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


/** subscription root */
export type Subscription_RootMeetupArgs = {
  distinct_on?: Maybe<Array<Meetup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meetup_Order_By>>;
  where?: Maybe<Meetup_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMeetup_AggregateArgs = {
  distinct_on?: Maybe<Array<Meetup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meetup_Order_By>>;
  where?: Maybe<Meetup_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMeetup_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootMeetup_CommentArgs = {
  distinct_on?: Maybe<Array<Meetup_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meetup_Comment_Order_By>>;
  where?: Maybe<Meetup_Comment_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMeetup_Comment_AggregateArgs = {
  distinct_on?: Maybe<Array<Meetup_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meetup_Comment_Order_By>>;
  where?: Maybe<Meetup_Comment_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMeetup_Comment_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootMeetup_UserArgs = {
  distinct_on?: Maybe<Array<Meetup_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meetup_User_Order_By>>;
  where?: Maybe<Meetup_User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMeetup_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Meetup_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meetup_User_Order_By>>;
  where?: Maybe<Meetup_User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMeetup_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
   __typename?: 'user';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An array relationship */
  meetup_comments: Array<Meetup_Comment>;
  /** An aggregated array relationship */
  meetup_comments_aggregate: Meetup_Comment_Aggregate;
  password: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  user_meetups: Array<Meetup_User>;
  /** An aggregated array relationship */
  user_meetups_aggregate: Meetup_User_Aggregate;
  username: Scalars['String'];
};


/** columns and relationships of "user" */
export type UserMeetup_CommentsArgs = {
  distinct_on?: Maybe<Array<Meetup_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meetup_Comment_Order_By>>;
  where?: Maybe<Meetup_Comment_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserMeetup_Comments_AggregateArgs = {
  distinct_on?: Maybe<Array<Meetup_Comment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meetup_Comment_Order_By>>;
  where?: Maybe<Meetup_Comment_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_MeetupsArgs = {
  distinct_on?: Maybe<Array<Meetup_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meetup_User_Order_By>>;
  where?: Maybe<Meetup_User_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Meetups_AggregateArgs = {
  distinct_on?: Maybe<Array<Meetup_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meetup_User_Order_By>>;
  where?: Maybe<Meetup_User_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
   __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
   __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  avg?: Maybe<User_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
  stddev?: Maybe<User_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Sum_Order_By>;
  var_pop?: Maybe<User_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Var_Samp_Order_By>;
  variance?: Maybe<User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
   __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user" */
export type User_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  meetup_comments?: Maybe<Meetup_Comment_Bool_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_meetups?: Maybe<Meetup_User_Bool_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for incrementing integer column in table "user" */
export type User_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  meetup_comments?: Maybe<Meetup_Comment_Arr_Rel_Insert_Input>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_meetups?: Maybe<Meetup_User_Arr_Rel_Insert_Input>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
   __typename?: 'user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
   __typename?: 'user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
   __typename?: 'user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meetup_comments_aggregate?: Maybe<Meetup_Comment_Aggregate_Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_meetups_aggregate?: Maybe<Meetup_User_Aggregate_Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: "user" */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
   __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user" */
export type User_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
   __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user" */
export type User_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
   __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user" */
export type User_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
   __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user" */
export type User_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
   __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user" */
export type User_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
   __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user" */
export type User_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
   __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user" */
export type User_Variance_Order_By = {
  id?: Maybe<Order_By>;
};


export type FindUserByUsernameQueryVariables = {
  username: Scalars['String'];
};


export type FindUserByUsernameQuery = (
  { __typename?: 'query_root' }
  & { user: Array<(
    { __typename?: 'user' }
    & Pick<User, 'id' | 'username' | 'password'>
  )> }
);

export type CreateUserMutationVariables = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type CreateUserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_user_one?: Maybe<(
    { __typename?: 'user' }
    & Pick<User, 'username' | 'password'>
  )> }
);


export const FindUserByUsernameDocument = gql`
    query findUserByUsername($username: String!) {
  user(where: {username: {_eq: $username}}) {
    id
    username
    password
  }
}
    `;
export const CreateUserDocument = gql`
    mutation createUser($username: String!, $password: String!) {
  insert_user_one(object: {username: $username, password: $password}) {
    username
    password
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    findUserByUsername(variables: FindUserByUsernameQueryVariables): Promise<FindUserByUsernameQuery> {
      return withWrapper(() => client.request<FindUserByUsernameQuery>(print(FindUserByUsernameDocument), variables));
    },
    createUser(variables: CreateUserMutationVariables): Promise<CreateUserMutation> {
      return withWrapper(() => client.request<CreateUserMutation>(print(CreateUserDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;