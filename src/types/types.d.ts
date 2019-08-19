import { GraphQLResolveInfo } from "graphql";
import { Context } from "./context";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateRestaurantInput = {
  name: Scalars["String"];
  pictureURL: Scalars["String"];
  location: Scalars["String"];
  user: Scalars["String"];
};

export type CreateReviewInput = {
  rating: Scalars["Int"];
  description: Scalars["String"];
  author: Scalars["String"];
  restaurant: Scalars["String"];
};

export type CreateUserInput = {
  username: Scalars["String"];
  email: Scalars["String"];
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  profilePictureURL: Scalars["String"];
};

export type LoginInput = {
  username: Scalars["String"];
  email: Scalars["String"];
};

export type LoginResponse = {
  __typename?: "LoginResponse";
  token?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: "Mutation";
  register: User;
  login: LoginResponse;
  createUser: User;
  updateUser: User;
  deleteUser: User;
  createRestaurant: Restaurant;
  updateRestaurant: Restaurant;
  deleteRestaurant: Restaurant;
  createReview: Review;
  updateReview: Review;
  deleteReview: Review;
};

export type MutationRegisterArgs = {
  input?: Maybe<RegisterInput>;
};

export type MutationLoginArgs = {
  input?: Maybe<LoginInput>;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type MutationDeleteUserArgs = {
  id: Scalars["String"];
};

export type MutationCreateRestaurantArgs = {
  input: CreateRestaurantInput;
};

export type MutationUpdateRestaurantArgs = {
  input: UpdateRestaurantInput;
};

export type MutationDeleteRestaurantArgs = {
  id: Scalars["String"];
};

export type MutationCreateReviewArgs = {
  input: CreateReviewInput;
};

export type MutationUpdateReviewArgs = {
  input: UpdateReviewInput;
};

export type MutationDeleteReviewArgs = {
  id: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  users: Array<User>;
  user?: Maybe<User>;
  reviews: Array<Review>;
  review?: Maybe<Review>;
  restaurants: Array<Restaurant>;
  restaurant?: Maybe<Restaurant>;
};

export type QueryUserArgs = {
  id: Scalars["String"];
};

export type QueryReviewArgs = {
  id: Scalars["String"];
};

export type QueryRestaurantArgs = {
  id: Scalars["String"];
};

export type RegisterInput = {
  username: Scalars["String"];
  email: Scalars["String"];
};

export type Restaurant = {
  __typename?: "Restaurant";
  id: Scalars["String"];
  createdAt: Scalars["String"];
  name: Scalars["String"];
  pictureURL: Scalars["String"];
  location: Scalars["String"];
  reviews?: Maybe<Array<Review>>;
  author?: Maybe<User>;
};

export type RestaurantInput = {
  name: Scalars["String"];
};

export type Review = {
  __typename?: "Review";
  id: Scalars["ID"];
  createdAt: Scalars["String"];
  rating: Scalars["Int"];
  description: Scalars["String"];
  author: User;
  restaurant: Restaurant;
};

export type UpdateRestaurantInput = {
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  pictureURL?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
};

export type UpdateReviewInput = {
  id: Scalars["String"];
  rating?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  restaurant?: Maybe<Scalars["String"]>;
};

export type UpdateUserInput = {
  id?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  profilePictureURL: Scalars["String"];
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  email: Scalars["String"];
  username: Scalars["String"];
  createdAt: Scalars["String"];
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  profilePictureURL: Scalars["String"];
  reviews?: Maybe<Array<Review>>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Review: ResolverTypeWrapper<Review>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Restaurant: ResolverTypeWrapper<Restaurant>;
  Mutation: ResolverTypeWrapper<{}>;
  RegisterInput: RegisterInput;
  LoginInput: LoginInput;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  CreateUserInput: CreateUserInput;
  UpdateUserInput: UpdateUserInput;
  CreateRestaurantInput: CreateRestaurantInput;
  UpdateRestaurantInput: UpdateRestaurantInput;
  CreateReviewInput: CreateReviewInput;
  UpdateReviewInput: UpdateReviewInput;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  RestaurantInput: RestaurantInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  User: User;
  ID: Scalars["ID"];
  String: Scalars["String"];
  Review: Review;
  Int: Scalars["Int"];
  Restaurant: Restaurant;
  Mutation: {};
  RegisterInput: RegisterInput;
  LoginInput: LoginInput;
  LoginResponse: LoginResponse;
  CreateUserInput: CreateUserInput;
  UpdateUserInput: UpdateUserInput;
  CreateRestaurantInput: CreateRestaurantInput;
  UpdateRestaurantInput: UpdateRestaurantInput;
  CreateReviewInput: CreateReviewInput;
  UpdateReviewInput: UpdateReviewInput;
  Boolean: Scalars["Boolean"];
  RestaurantInput: RestaurantInput;
};

export type LoginResponseResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["LoginResponse"] = ResolversParentTypes["LoginResponse"]
> = {
  token?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  register?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    MutationRegisterArgs
  >;
  login?: Resolver<
    ResolversTypes["LoginResponse"],
    ParentType,
    ContextType,
    MutationLoginArgs
  >;
  createUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    MutationCreateUserArgs
  >;
  updateUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    MutationUpdateUserArgs
  >;
  deleteUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    MutationDeleteUserArgs
  >;
  createRestaurant?: Resolver<
    ResolversTypes["Restaurant"],
    ParentType,
    ContextType,
    MutationCreateRestaurantArgs
  >;
  updateRestaurant?: Resolver<
    ResolversTypes["Restaurant"],
    ParentType,
    ContextType,
    MutationUpdateRestaurantArgs
  >;
  deleteRestaurant?: Resolver<
    ResolversTypes["Restaurant"],
    ParentType,
    ContextType,
    MutationDeleteRestaurantArgs
  >;
  createReview?: Resolver<
    ResolversTypes["Review"],
    ParentType,
    ContextType,
    MutationCreateReviewArgs
  >;
  updateReview?: Resolver<
    ResolversTypes["Review"],
    ParentType,
    ContextType,
    MutationUpdateReviewArgs
  >;
  deleteReview?: Resolver<
    ResolversTypes["Review"],
    ParentType,
    ContextType,
    MutationDeleteReviewArgs
  >;
};

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  users?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
  user?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    QueryUserArgs
  >;
  reviews?: Resolver<Array<ResolversTypes["Review"]>, ParentType, ContextType>;
  review?: Resolver<
    Maybe<ResolversTypes["Review"]>,
    ParentType,
    ContextType,
    QueryReviewArgs
  >;
  restaurants?: Resolver<
    Array<ResolversTypes["Restaurant"]>,
    ParentType,
    ContextType
  >;
  restaurant?: Resolver<
    Maybe<ResolversTypes["Restaurant"]>,
    ParentType,
    ContextType,
    QueryRestaurantArgs
  >;
};

export type RestaurantResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Restaurant"] = ResolversParentTypes["Restaurant"]
> = {
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  pictureURL?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  location?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  reviews?: Resolver<
    Maybe<Array<ResolversTypes["Review"]>>,
    ParentType,
    ContextType
  >;
  author?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
};

export type ReviewResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Review"] = ResolversParentTypes["Review"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  author?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  restaurant?: Resolver<ResolversTypes["Restaurant"], ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  firstName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  lastName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  profilePictureURL?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  reviews?: Resolver<
    Maybe<Array<ResolversTypes["Review"]>>,
    ParentType,
    ContextType
  >;
};

export type Resolvers<ContextType = Context> = {
  LoginResponse?: LoginResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Restaurant?: RestaurantResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
