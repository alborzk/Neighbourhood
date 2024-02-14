/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
  postalCode: string,
  firstName: string,
  lastName: string,
  communities?: ModelUserCommunityConnection | null,
  selectedCommunity?: number | null,
  posts?: ModelPostConnection | null,
  friends?: ModelUserConnection | null,
  friendRequests?: ModelFriendRequestConnection | null,
  events?: ModelEventConnection | null,
  itemsForSale?: ModelItemForSaleConnection | null,
  likedPosts?: ModelUserLikedPostsConnection | null,
  likedEvents?: ModelUserLikedEventsConnection | null,
  likedItems?: ModelUserLikedItemsConnection | null,
  location?: string | null,
  age?: number | null,
  bio?: string | null,
  profilePic?: string | null,
  pets?: number | null,
  kids?: number | null,
  comments?: ModelCommentConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  userFriendsId?: string | null,
};

export type ModelUserCommunityConnection = {
  __typename: "ModelUserCommunityConnection",
  items:  Array<UserCommunity | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UserCommunity = {
  __typename: "UserCommunity",
  id: string,
  userId: string,
  communityId: string,
  user: User,
  community: Community,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Community = {
  __typename: "Community",
  id: string,
  name: string,
  location: string,
  postalCode: string,
  image?: string | null,
  members?: ModelUserCommunityConnection | null,
  posts?: ModelPostConnection | null,
  events?: ModelEventConnection | null,
  itemsForSale?: ModelItemForSaleConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  author: User,
  community: Community,
  images?: Array< string | null > | null,
  content: string,
  postType: PostType,
  likedBy?: ModelUserLikedPostsConnection | null,
  comments?: ModelCommentConnection | null,
  visibility: Visibility,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  userPostsId: string,
  communityPostsId: string,
};

export enum PostType {
  THOUGHT = "THOUGHT",
  EVENT_ANNOUNCEMENT = "EVENT_ANNOUNCEMENT",
  ITEM_FOR_SALE = "ITEM_FOR_SALE",
}


export type ModelUserLikedPostsConnection = {
  __typename: "ModelUserLikedPostsConnection",
  items:  Array<UserLikedPosts | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UserLikedPosts = {
  __typename: "UserLikedPosts",
  id: string,
  userId: string,
  postId: string,
  user: User,
  post: Post,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  post: Post,
  author: User,
  content: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  userCommentsId?: string | null,
  postCommentsId: string,
};

export enum Visibility {
  PUBLIC = "PUBLIC",
  FRIENDS_ONLY = "FRIENDS_ONLY",
  FRIENDS_OF_FRIENDS = "FRIENDS_OF_FRIENDS",
  PRIVATE = "PRIVATE",
}


export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  name: string,
  description: string,
  images?: Array< string | null > | null,
  location: string,
  datetime: string,
  community: Community,
  organizer: User,
  likedBy?: ModelUserLikedEventsConnection | null,
  visibility: Visibility,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  userEventsId: string,
  communityEventsId?: string | null,
};

export type ModelUserLikedEventsConnection = {
  __typename: "ModelUserLikedEventsConnection",
  items:  Array<UserLikedEvents | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UserLikedEvents = {
  __typename: "UserLikedEvents",
  id: string,
  userId: string,
  eventId: string,
  user: User,
  event: Event,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelItemForSaleConnection = {
  __typename: "ModelItemForSaleConnection",
  items:  Array<ItemForSale | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ItemForSale = {
  __typename: "ItemForSale",
  id: string,
  title: string,
  description: string,
  images?: Array< string | null > | null,
  contact: string,
  price: number,
  seller: User,
  community: Community,
  likedBy?: ModelUserLikedItemsConnection | null,
  visibility: Visibility,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  userItemsForSaleId: string,
  communityItemsForSaleId?: string | null,
};

export type ModelUserLikedItemsConnection = {
  __typename: "ModelUserLikedItemsConnection",
  items:  Array<UserLikedItems | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UserLikedItems = {
  __typename: "UserLikedItems",
  id: string,
  userId: string,
  itemForSaleId: string,
  user: User,
  itemForSale: ItemForSale,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelFriendRequestConnection = {
  __typename: "ModelFriendRequestConnection",
  items:  Array<FriendRequest | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type FriendRequest = {
  __typename: "FriendRequest",
  id: string,
  sender: User,
  receiver: User,
  status: FriendRequestStatus,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  userFriendRequestsId: string,
};

export enum FriendRequestStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  DECLINED = "DECLINED",
}


export type CreateFriendRequestInput = {
  id?: string | null,
  status: FriendRequestStatus,
  _version?: number | null,
  userFriendRequestsId: string,
};

export type ModelFriendRequestConditionInput = {
  status?: ModelFriendRequestStatusInput | null,
  and?: Array< ModelFriendRequestConditionInput | null > | null,
  or?: Array< ModelFriendRequestConditionInput | null > | null,
  not?: ModelFriendRequestConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  userFriendRequestsId?: ModelIDInput | null,
};

export type ModelFriendRequestStatusInput = {
  eq?: FriendRequestStatus | null,
  ne?: FriendRequestStatus | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateFriendRequestInput = {
  id: string,
  status?: FriendRequestStatus | null,
  _version?: number | null,
  userFriendRequestsId?: string | null,
};

export type DeleteFriendRequestInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
  postalCode: string,
  firstName: string,
  lastName: string,
  selectedCommunity?: number | null,
  location?: string | null,
  age?: number | null,
  bio?: string | null,
  profilePic?: string | null,
  pets?: number | null,
  kids?: number | null,
  _version?: number | null,
  userFriendsId?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  postalCode?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  selectedCommunity?: ModelIntInput | null,
  location?: ModelStringInput | null,
  age?: ModelIntInput | null,
  bio?: ModelStringInput | null,
  profilePic?: ModelStringInput | null,
  pets?: ModelIntInput | null,
  kids?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  userFriendsId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  postalCode?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  selectedCommunity?: number | null,
  location?: string | null,
  age?: number | null,
  bio?: string | null,
  profilePic?: string | null,
  pets?: number | null,
  kids?: number | null,
  _version?: number | null,
  userFriendsId?: string | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateCommunityInput = {
  id?: string | null,
  name: string,
  location: string,
  postalCode: string,
  image?: string | null,
  _version?: number | null,
};

export type ModelCommunityConditionInput = {
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  postalCode?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelCommunityConditionInput | null > | null,
  or?: Array< ModelCommunityConditionInput | null > | null,
  not?: ModelCommunityConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateCommunityInput = {
  id: string,
  name?: string | null,
  location?: string | null,
  postalCode?: string | null,
  image?: string | null,
  _version?: number | null,
};

export type DeleteCommunityInput = {
  id: string,
  _version?: number | null,
};

export type CreatePostInput = {
  id?: string | null,
  images?: Array< string | null > | null,
  content: string,
  postType: PostType,
  visibility: Visibility,
  _version?: number | null,
  userPostsId: string,
  communityPostsId: string,
};

export type ModelPostConditionInput = {
  images?: ModelStringInput | null,
  content?: ModelStringInput | null,
  postType?: ModelPostTypeInput | null,
  visibility?: ModelVisibilityInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  userPostsId?: ModelIDInput | null,
  communityPostsId?: ModelIDInput | null,
};

export type ModelPostTypeInput = {
  eq?: PostType | null,
  ne?: PostType | null,
};

export type ModelVisibilityInput = {
  eq?: Visibility | null,
  ne?: Visibility | null,
};

export type UpdatePostInput = {
  id: string,
  images?: Array< string | null > | null,
  content?: string | null,
  postType?: PostType | null,
  visibility?: Visibility | null,
  _version?: number | null,
  userPostsId?: string | null,
  communityPostsId?: string | null,
};

export type DeletePostInput = {
  id: string,
  _version?: number | null,
};

export type CreateCommentInput = {
  id?: string | null,
  content: string,
  _version?: number | null,
  userCommentsId?: string | null,
  postCommentsId: string,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  userCommentsId?: ModelIDInput | null,
  postCommentsId?: ModelIDInput | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  _version?: number | null,
  userCommentsId?: string | null,
  postCommentsId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
  _version?: number | null,
};

export type CreateEventInput = {
  id?: string | null,
  name: string,
  description: string,
  images?: Array< string | null > | null,
  location: string,
  datetime: string,
  visibility: Visibility,
  _version?: number | null,
  userEventsId: string,
  communityEventsId?: string | null,
};

export type ModelEventConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  images?: ModelStringInput | null,
  location?: ModelStringInput | null,
  datetime?: ModelStringInput | null,
  visibility?: ModelVisibilityInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  userEventsId?: ModelIDInput | null,
  communityEventsId?: ModelIDInput | null,
};

export type UpdateEventInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  images?: Array< string | null > | null,
  location?: string | null,
  datetime?: string | null,
  visibility?: Visibility | null,
  _version?: number | null,
  userEventsId?: string | null,
  communityEventsId?: string | null,
};

export type DeleteEventInput = {
  id: string,
  _version?: number | null,
};

export type CreateItemForSaleInput = {
  id?: string | null,
  title: string,
  description: string,
  images?: Array< string | null > | null,
  contact: string,
  price: number,
  visibility: Visibility,
  _version?: number | null,
  userItemsForSaleId: string,
  communityItemsForSaleId?: string | null,
};

export type ModelItemForSaleConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  images?: ModelStringInput | null,
  contact?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  visibility?: ModelVisibilityInput | null,
  and?: Array< ModelItemForSaleConditionInput | null > | null,
  or?: Array< ModelItemForSaleConditionInput | null > | null,
  not?: ModelItemForSaleConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  userItemsForSaleId?: ModelIDInput | null,
  communityItemsForSaleId?: ModelIDInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateItemForSaleInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  images?: Array< string | null > | null,
  contact?: string | null,
  price?: number | null,
  visibility?: Visibility | null,
  _version?: number | null,
  userItemsForSaleId?: string | null,
  communityItemsForSaleId?: string | null,
};

export type DeleteItemForSaleInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserCommunityInput = {
  id?: string | null,
  userId: string,
  communityId: string,
  _version?: number | null,
};

export type ModelUserCommunityConditionInput = {
  userId?: ModelIDInput | null,
  communityId?: ModelIDInput | null,
  and?: Array< ModelUserCommunityConditionInput | null > | null,
  or?: Array< ModelUserCommunityConditionInput | null > | null,
  not?: ModelUserCommunityConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateUserCommunityInput = {
  id: string,
  userId?: string | null,
  communityId?: string | null,
  _version?: number | null,
};

export type DeleteUserCommunityInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserLikedPostsInput = {
  id?: string | null,
  userId: string,
  postId: string,
  _version?: number | null,
};

export type ModelUserLikedPostsConditionInput = {
  userId?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  and?: Array< ModelUserLikedPostsConditionInput | null > | null,
  or?: Array< ModelUserLikedPostsConditionInput | null > | null,
  not?: ModelUserLikedPostsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateUserLikedPostsInput = {
  id: string,
  userId?: string | null,
  postId?: string | null,
  _version?: number | null,
};

export type DeleteUserLikedPostsInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserLikedEventsInput = {
  id?: string | null,
  userId: string,
  eventId: string,
  _version?: number | null,
};

export type ModelUserLikedEventsConditionInput = {
  userId?: ModelIDInput | null,
  eventId?: ModelIDInput | null,
  and?: Array< ModelUserLikedEventsConditionInput | null > | null,
  or?: Array< ModelUserLikedEventsConditionInput | null > | null,
  not?: ModelUserLikedEventsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateUserLikedEventsInput = {
  id: string,
  userId?: string | null,
  eventId?: string | null,
  _version?: number | null,
};

export type DeleteUserLikedEventsInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserLikedItemsInput = {
  id?: string | null,
  userId: string,
  itemForSaleId: string,
  _version?: number | null,
};

export type ModelUserLikedItemsConditionInput = {
  userId?: ModelIDInput | null,
  itemForSaleId?: ModelIDInput | null,
  and?: Array< ModelUserLikedItemsConditionInput | null > | null,
  or?: Array< ModelUserLikedItemsConditionInput | null > | null,
  not?: ModelUserLikedItemsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateUserLikedItemsInput = {
  id: string,
  userId?: string | null,
  itemForSaleId?: string | null,
  _version?: number | null,
};

export type DeleteUserLikedItemsInput = {
  id: string,
  _version?: number | null,
};

export type ModelFriendRequestFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelFriendRequestStatusInput | null,
  and?: Array< ModelFriendRequestFilterInput | null > | null,
  or?: Array< ModelFriendRequestFilterInput | null > | null,
  not?: ModelFriendRequestFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  userFriendRequestsId?: ModelIDInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  postalCode?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  selectedCommunity?: ModelIntInput | null,
  location?: ModelStringInput | null,
  age?: ModelIntInput | null,
  bio?: ModelStringInput | null,
  profilePic?: ModelStringInput | null,
  pets?: ModelIntInput | null,
  kids?: ModelIntInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  userFriendsId?: ModelIDInput | null,
};

export type ModelCommunityFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  postalCode?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelCommunityFilterInput | null > | null,
  or?: Array< ModelCommunityFilterInput | null > | null,
  not?: ModelCommunityFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelCommunityConnection = {
  __typename: "ModelCommunityConnection",
  items:  Array<Community | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  images?: ModelStringInput | null,
  content?: ModelStringInput | null,
  postType?: ModelPostTypeInput | null,
  visibility?: ModelVisibilityInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  userPostsId?: ModelIDInput | null,
  communityPostsId?: ModelIDInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  userCommentsId?: ModelIDInput | null,
  postCommentsId?: ModelIDInput | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  images?: ModelStringInput | null,
  location?: ModelStringInput | null,
  datetime?: ModelStringInput | null,
  visibility?: ModelVisibilityInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  userEventsId?: ModelIDInput | null,
  communityEventsId?: ModelIDInput | null,
};

export type ModelItemForSaleFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  images?: ModelStringInput | null,
  contact?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  visibility?: ModelVisibilityInput | null,
  and?: Array< ModelItemForSaleFilterInput | null > | null,
  or?: Array< ModelItemForSaleFilterInput | null > | null,
  not?: ModelItemForSaleFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  userItemsForSaleId?: ModelIDInput | null,
  communityItemsForSaleId?: ModelIDInput | null,
};

export type ModelUserCommunityFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  communityId?: ModelIDInput | null,
  and?: Array< ModelUserCommunityFilterInput | null > | null,
  or?: Array< ModelUserCommunityFilterInput | null > | null,
  not?: ModelUserCommunityFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserLikedPostsFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  and?: Array< ModelUserLikedPostsFilterInput | null > | null,
  or?: Array< ModelUserLikedPostsFilterInput | null > | null,
  not?: ModelUserLikedPostsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserLikedEventsFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  eventId?: ModelIDInput | null,
  and?: Array< ModelUserLikedEventsFilterInput | null > | null,
  or?: Array< ModelUserLikedEventsFilterInput | null > | null,
  not?: ModelUserLikedEventsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserLikedItemsFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  itemForSaleId?: ModelIDInput | null,
  and?: Array< ModelUserLikedItemsFilterInput | null > | null,
  or?: Array< ModelUserLikedItemsFilterInput | null > | null,
  not?: ModelUserLikedItemsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionFriendRequestFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFriendRequestFilterInput | null > | null,
  or?: Array< ModelSubscriptionFriendRequestFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  postalCode?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  selectedCommunity?: ModelSubscriptionIntInput | null,
  location?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionIntInput | null,
  bio?: ModelSubscriptionStringInput | null,
  profilePic?: ModelSubscriptionStringInput | null,
  pets?: ModelSubscriptionIntInput | null,
  kids?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCommunityFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  postalCode?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCommunityFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommunityFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  images?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  postType?: ModelSubscriptionStringInput | null,
  visibility?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionEventFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  images?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  datetime?: ModelSubscriptionStringInput | null,
  visibility?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEventFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionItemForSaleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  images?: ModelSubscriptionStringInput | null,
  contact?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  visibility?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionItemForSaleFilterInput | null > | null,
  or?: Array< ModelSubscriptionItemForSaleFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionUserCommunityFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  communityId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserCommunityFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserCommunityFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionUserLikedPostsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  postId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserLikedPostsFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserLikedPostsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionUserLikedEventsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  eventId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserLikedEventsFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserLikedEventsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionUserLikedItemsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  itemForSaleId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserLikedItemsFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserLikedItemsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type SwitchCommunityMutationVariables = {
  userId: string,
  communityId: string,
};

export type SwitchCommunityMutation = {
  switchCommunity?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    postalCode: string,
    firstName: string,
    lastName: string,
    communities?:  {
      __typename: "ModelUserCommunityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    selectedCommunity?: number | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friends?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    itemsForSale?:  {
      __typename: "ModelItemForSaleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedPosts?:  {
      __typename: "ModelUserLikedPostsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedEvents?:  {
      __typename: "ModelUserLikedEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedItems?:  {
      __typename: "ModelUserLikedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    location?: string | null,
    age?: number | null,
    bio?: string | null,
    profilePic?: string | null,
    pets?: number | null,
    kids?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendsId?: string | null,
  } | null,
};

export type JoinCommunityMutationVariables = {
  userId: string,
  communityId: string,
};

export type JoinCommunityMutation = {
  joinCommunity?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    postalCode: string,
    firstName: string,
    lastName: string,
    communities?:  {
      __typename: "ModelUserCommunityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    selectedCommunity?: number | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friends?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    itemsForSale?:  {
      __typename: "ModelItemForSaleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedPosts?:  {
      __typename: "ModelUserLikedPostsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedEvents?:  {
      __typename: "ModelUserLikedEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedItems?:  {
      __typename: "ModelUserLikedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    location?: string | null,
    age?: number | null,
    bio?: string | null,
    profilePic?: string | null,
    pets?: number | null,
    kids?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendsId?: string | null,
  } | null,
};

export type LikePostMutationVariables = {
  postId: string,
};

export type LikePostMutation = {
  likePost?:  {
    __typename: "Post",
    id: string,
    author:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    images?: Array< string | null > | null,
    content: string,
    postType: PostType,
    likedBy?:  {
      __typename: "ModelUserLikedPostsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userPostsId: string,
    communityPostsId: string,
  } | null,
};

export type UnlikePostMutationVariables = {
  postId: string,
};

export type UnlikePostMutation = {
  unlikePost?:  {
    __typename: "Post",
    id: string,
    author:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    images?: Array< string | null > | null,
    content: string,
    postType: PostType,
    likedBy?:  {
      __typename: "ModelUserLikedPostsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userPostsId: string,
    communityPostsId: string,
  } | null,
};

export type CommentOnPostMutationVariables = {
  postId: string,
  authorId: string,
  content: string,
};

export type CommentOnPostMutation = {
  commentOnPost?:  {
    __typename: "Comment",
    id: string,
    post:  {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      content: string,
      postType: PostType,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userPostsId: string,
      communityPostsId: string,
    },
    author:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCommentsId?: string | null,
    postCommentsId: string,
  } | null,
};

export type SellItemMutationVariables = {
  title: string,
  description: string,
  price: number,
  sellerId: string,
  communityId: string,
  images?: Array< string | null > | null,
  contact: string,
  visibility: Visibility,
};

export type SellItemMutation = {
  sellItem?:  {
    __typename: "ItemForSale",
    id: string,
    title: string,
    description: string,
    images?: Array< string | null > | null,
    contact: string,
    price: number,
    seller:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    likedBy?:  {
      __typename: "ModelUserLikedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userItemsForSaleId: string,
    communityItemsForSaleId?: string | null,
  } | null,
};

export type AddFriendMutationVariables = {
  userId: string,
  friendId: string,
};

export type AddFriendMutation = {
  addFriend?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    postalCode: string,
    firstName: string,
    lastName: string,
    communities?:  {
      __typename: "ModelUserCommunityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    selectedCommunity?: number | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friends?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    itemsForSale?:  {
      __typename: "ModelItemForSaleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedPosts?:  {
      __typename: "ModelUserLikedPostsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedEvents?:  {
      __typename: "ModelUserLikedEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedItems?:  {
      __typename: "ModelUserLikedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    location?: string | null,
    age?: number | null,
    bio?: string | null,
    profilePic?: string | null,
    pets?: number | null,
    kids?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendsId?: string | null,
  } | null,
};

export type LikeEventMutationVariables = {
  userId: string,
  eventId: string,
};

export type LikeEventMutation = {
  likeEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description: string,
    images?: Array< string | null > | null,
    location: string,
    datetime: string,
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    organizer:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    likedBy?:  {
      __typename: "ModelUserLikedEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userEventsId: string,
    communityEventsId?: string | null,
  } | null,
};

export type UnlikeEventMutationVariables = {
  userId: string,
  eventId: string,
};

export type UnlikeEventMutation = {
  unlikeEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description: string,
    images?: Array< string | null > | null,
    location: string,
    datetime: string,
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    organizer:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    likedBy?:  {
      __typename: "ModelUserLikedEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userEventsId: string,
    communityEventsId?: string | null,
  } | null,
};

export type LikeItemForSaleMutationVariables = {
  userId: string,
  itemId: string,
};

export type LikeItemForSaleMutation = {
  likeItemForSale?:  {
    __typename: "ItemForSale",
    id: string,
    title: string,
    description: string,
    images?: Array< string | null > | null,
    contact: string,
    price: number,
    seller:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    likedBy?:  {
      __typename: "ModelUserLikedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userItemsForSaleId: string,
    communityItemsForSaleId?: string | null,
  } | null,
};

export type UnlikeItemForSaleMutationVariables = {
  userId: string,
  itemId: string,
};

export type UnlikeItemForSaleMutation = {
  unlikeItemForSale?:  {
    __typename: "ItemForSale",
    id: string,
    title: string,
    description: string,
    images?: Array< string | null > | null,
    contact: string,
    price: number,
    seller:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    likedBy?:  {
      __typename: "ModelUserLikedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userItemsForSaleId: string,
    communityItemsForSaleId?: string | null,
  } | null,
};

export type SendFriendRequestMutationVariables = {
  senderId: string,
  receiverId: string,
};

export type SendFriendRequestMutation = {
  sendFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    sender:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    receiver:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    status: FriendRequestStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendRequestsId: string,
  } | null,
};

export type AcceptFriendRequestMutationVariables = {
  requestId: string,
};

export type AcceptFriendRequestMutation = {
  acceptFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    sender:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    receiver:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    status: FriendRequestStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendRequestsId: string,
  } | null,
};

export type DeclineFriendRequestMutationVariables = {
  requestId: string,
};

export type DeclineFriendRequestMutation = {
  declineFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    sender:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    receiver:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    status: FriendRequestStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendRequestsId: string,
  } | null,
};

export type CreateFriendRequestMutationVariables = {
  input: CreateFriendRequestInput,
  condition?: ModelFriendRequestConditionInput | null,
};

export type CreateFriendRequestMutation = {
  createFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    sender:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    receiver:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    status: FriendRequestStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendRequestsId: string,
  } | null,
};

export type UpdateFriendRequestMutationVariables = {
  input: UpdateFriendRequestInput,
  condition?: ModelFriendRequestConditionInput | null,
};

export type UpdateFriendRequestMutation = {
  updateFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    sender:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    receiver:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    status: FriendRequestStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendRequestsId: string,
  } | null,
};

export type DeleteFriendRequestMutationVariables = {
  input: DeleteFriendRequestInput,
  condition?: ModelFriendRequestConditionInput | null,
};

export type DeleteFriendRequestMutation = {
  deleteFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    sender:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    receiver:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    status: FriendRequestStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendRequestsId: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    postalCode: string,
    firstName: string,
    lastName: string,
    communities?:  {
      __typename: "ModelUserCommunityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    selectedCommunity?: number | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friends?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    itemsForSale?:  {
      __typename: "ModelItemForSaleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedPosts?:  {
      __typename: "ModelUserLikedPostsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedEvents?:  {
      __typename: "ModelUserLikedEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedItems?:  {
      __typename: "ModelUserLikedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    location?: string | null,
    age?: number | null,
    bio?: string | null,
    profilePic?: string | null,
    pets?: number | null,
    kids?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendsId?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    postalCode: string,
    firstName: string,
    lastName: string,
    communities?:  {
      __typename: "ModelUserCommunityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    selectedCommunity?: number | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friends?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    itemsForSale?:  {
      __typename: "ModelItemForSaleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedPosts?:  {
      __typename: "ModelUserLikedPostsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedEvents?:  {
      __typename: "ModelUserLikedEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedItems?:  {
      __typename: "ModelUserLikedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    location?: string | null,
    age?: number | null,
    bio?: string | null,
    profilePic?: string | null,
    pets?: number | null,
    kids?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendsId?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    postalCode: string,
    firstName: string,
    lastName: string,
    communities?:  {
      __typename: "ModelUserCommunityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    selectedCommunity?: number | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friends?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    itemsForSale?:  {
      __typename: "ModelItemForSaleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedPosts?:  {
      __typename: "ModelUserLikedPostsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedEvents?:  {
      __typename: "ModelUserLikedEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedItems?:  {
      __typename: "ModelUserLikedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    location?: string | null,
    age?: number | null,
    bio?: string | null,
    profilePic?: string | null,
    pets?: number | null,
    kids?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendsId?: string | null,
  } | null,
};

export type CreateCommunityMutationVariables = {
  input: CreateCommunityInput,
  condition?: ModelCommunityConditionInput | null,
};

export type CreateCommunityMutation = {
  createCommunity?:  {
    __typename: "Community",
    id: string,
    name: string,
    location: string,
    postalCode: string,
    image?: string | null,
    members?:  {
      __typename: "ModelUserCommunityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    itemsForSale?:  {
      __typename: "ModelItemForSaleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCommunityMutationVariables = {
  input: UpdateCommunityInput,
  condition?: ModelCommunityConditionInput | null,
};

export type UpdateCommunityMutation = {
  updateCommunity?:  {
    __typename: "Community",
    id: string,
    name: string,
    location: string,
    postalCode: string,
    image?: string | null,
    members?:  {
      __typename: "ModelUserCommunityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    itemsForSale?:  {
      __typename: "ModelItemForSaleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCommunityMutationVariables = {
  input: DeleteCommunityInput,
  condition?: ModelCommunityConditionInput | null,
};

export type DeleteCommunityMutation = {
  deleteCommunity?:  {
    __typename: "Community",
    id: string,
    name: string,
    location: string,
    postalCode: string,
    image?: string | null,
    members?:  {
      __typename: "ModelUserCommunityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    itemsForSale?:  {
      __typename: "ModelItemForSaleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    author:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    images?: Array< string | null > | null,
    content: string,
    postType: PostType,
    likedBy?:  {
      __typename: "ModelUserLikedPostsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userPostsId: string,
    communityPostsId: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    author:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    images?: Array< string | null > | null,
    content: string,
    postType: PostType,
    likedBy?:  {
      __typename: "ModelUserLikedPostsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userPostsId: string,
    communityPostsId: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    author:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    images?: Array< string | null > | null,
    content: string,
    postType: PostType,
    likedBy?:  {
      __typename: "ModelUserLikedPostsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userPostsId: string,
    communityPostsId: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    post:  {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      content: string,
      postType: PostType,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userPostsId: string,
      communityPostsId: string,
    },
    author:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCommentsId?: string | null,
    postCommentsId: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    post:  {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      content: string,
      postType: PostType,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userPostsId: string,
      communityPostsId: string,
    },
    author:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCommentsId?: string | null,
    postCommentsId: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    post:  {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      content: string,
      postType: PostType,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userPostsId: string,
      communityPostsId: string,
    },
    author:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCommentsId?: string | null,
    postCommentsId: string,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description: string,
    images?: Array< string | null > | null,
    location: string,
    datetime: string,
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    organizer:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    likedBy?:  {
      __typename: "ModelUserLikedEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userEventsId: string,
    communityEventsId?: string | null,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description: string,
    images?: Array< string | null > | null,
    location: string,
    datetime: string,
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    organizer:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    likedBy?:  {
      __typename: "ModelUserLikedEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userEventsId: string,
    communityEventsId?: string | null,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description: string,
    images?: Array< string | null > | null,
    location: string,
    datetime: string,
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    organizer:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    likedBy?:  {
      __typename: "ModelUserLikedEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userEventsId: string,
    communityEventsId?: string | null,
  } | null,
};

export type CreateItemForSaleMutationVariables = {
  input: CreateItemForSaleInput,
  condition?: ModelItemForSaleConditionInput | null,
};

export type CreateItemForSaleMutation = {
  createItemForSale?:  {
    __typename: "ItemForSale",
    id: string,
    title: string,
    description: string,
    images?: Array< string | null > | null,
    contact: string,
    price: number,
    seller:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    likedBy?:  {
      __typename: "ModelUserLikedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userItemsForSaleId: string,
    communityItemsForSaleId?: string | null,
  } | null,
};

export type UpdateItemForSaleMutationVariables = {
  input: UpdateItemForSaleInput,
  condition?: ModelItemForSaleConditionInput | null,
};

export type UpdateItemForSaleMutation = {
  updateItemForSale?:  {
    __typename: "ItemForSale",
    id: string,
    title: string,
    description: string,
    images?: Array< string | null > | null,
    contact: string,
    price: number,
    seller:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    likedBy?:  {
      __typename: "ModelUserLikedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userItemsForSaleId: string,
    communityItemsForSaleId?: string | null,
  } | null,
};

export type DeleteItemForSaleMutationVariables = {
  input: DeleteItemForSaleInput,
  condition?: ModelItemForSaleConditionInput | null,
};

export type DeleteItemForSaleMutation = {
  deleteItemForSale?:  {
    __typename: "ItemForSale",
    id: string,
    title: string,
    description: string,
    images?: Array< string | null > | null,
    contact: string,
    price: number,
    seller:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    likedBy?:  {
      __typename: "ModelUserLikedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userItemsForSaleId: string,
    communityItemsForSaleId?: string | null,
  } | null,
};

export type CreateUserCommunityMutationVariables = {
  input: CreateUserCommunityInput,
  condition?: ModelUserCommunityConditionInput | null,
};

export type CreateUserCommunityMutation = {
  createUserCommunity?:  {
    __typename: "UserCommunity",
    id: string,
    userId: string,
    communityId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserCommunityMutationVariables = {
  input: UpdateUserCommunityInput,
  condition?: ModelUserCommunityConditionInput | null,
};

export type UpdateUserCommunityMutation = {
  updateUserCommunity?:  {
    __typename: "UserCommunity",
    id: string,
    userId: string,
    communityId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserCommunityMutationVariables = {
  input: DeleteUserCommunityInput,
  condition?: ModelUserCommunityConditionInput | null,
};

export type DeleteUserCommunityMutation = {
  deleteUserCommunity?:  {
    __typename: "UserCommunity",
    id: string,
    userId: string,
    communityId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserLikedPostsMutationVariables = {
  input: CreateUserLikedPostsInput,
  condition?: ModelUserLikedPostsConditionInput | null,
};

export type CreateUserLikedPostsMutation = {
  createUserLikedPosts?:  {
    __typename: "UserLikedPosts",
    id: string,
    userId: string,
    postId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    post:  {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      content: string,
      postType: PostType,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userPostsId: string,
      communityPostsId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserLikedPostsMutationVariables = {
  input: UpdateUserLikedPostsInput,
  condition?: ModelUserLikedPostsConditionInput | null,
};

export type UpdateUserLikedPostsMutation = {
  updateUserLikedPosts?:  {
    __typename: "UserLikedPosts",
    id: string,
    userId: string,
    postId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    post:  {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      content: string,
      postType: PostType,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userPostsId: string,
      communityPostsId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserLikedPostsMutationVariables = {
  input: DeleteUserLikedPostsInput,
  condition?: ModelUserLikedPostsConditionInput | null,
};

export type DeleteUserLikedPostsMutation = {
  deleteUserLikedPosts?:  {
    __typename: "UserLikedPosts",
    id: string,
    userId: string,
    postId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    post:  {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      content: string,
      postType: PostType,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userPostsId: string,
      communityPostsId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserLikedEventsMutationVariables = {
  input: CreateUserLikedEventsInput,
  condition?: ModelUserLikedEventsConditionInput | null,
};

export type CreateUserLikedEventsMutation = {
  createUserLikedEvents?:  {
    __typename: "UserLikedEvents",
    id: string,
    userId: string,
    eventId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    event:  {
      __typename: "Event",
      id: string,
      name: string,
      description: string,
      images?: Array< string | null > | null,
      location: string,
      datetime: string,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userEventsId: string,
      communityEventsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserLikedEventsMutationVariables = {
  input: UpdateUserLikedEventsInput,
  condition?: ModelUserLikedEventsConditionInput | null,
};

export type UpdateUserLikedEventsMutation = {
  updateUserLikedEvents?:  {
    __typename: "UserLikedEvents",
    id: string,
    userId: string,
    eventId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    event:  {
      __typename: "Event",
      id: string,
      name: string,
      description: string,
      images?: Array< string | null > | null,
      location: string,
      datetime: string,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userEventsId: string,
      communityEventsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserLikedEventsMutationVariables = {
  input: DeleteUserLikedEventsInput,
  condition?: ModelUserLikedEventsConditionInput | null,
};

export type DeleteUserLikedEventsMutation = {
  deleteUserLikedEvents?:  {
    __typename: "UserLikedEvents",
    id: string,
    userId: string,
    eventId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    event:  {
      __typename: "Event",
      id: string,
      name: string,
      description: string,
      images?: Array< string | null > | null,
      location: string,
      datetime: string,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userEventsId: string,
      communityEventsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserLikedItemsMutationVariables = {
  input: CreateUserLikedItemsInput,
  condition?: ModelUserLikedItemsConditionInput | null,
};

export type CreateUserLikedItemsMutation = {
  createUserLikedItems?:  {
    __typename: "UserLikedItems",
    id: string,
    userId: string,
    itemForSaleId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    itemForSale:  {
      __typename: "ItemForSale",
      id: string,
      title: string,
      description: string,
      images?: Array< string | null > | null,
      contact: string,
      price: number,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userItemsForSaleId: string,
      communityItemsForSaleId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserLikedItemsMutationVariables = {
  input: UpdateUserLikedItemsInput,
  condition?: ModelUserLikedItemsConditionInput | null,
};

export type UpdateUserLikedItemsMutation = {
  updateUserLikedItems?:  {
    __typename: "UserLikedItems",
    id: string,
    userId: string,
    itemForSaleId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    itemForSale:  {
      __typename: "ItemForSale",
      id: string,
      title: string,
      description: string,
      images?: Array< string | null > | null,
      contact: string,
      price: number,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userItemsForSaleId: string,
      communityItemsForSaleId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserLikedItemsMutationVariables = {
  input: DeleteUserLikedItemsInput,
  condition?: ModelUserLikedItemsConditionInput | null,
};

export type DeleteUserLikedItemsMutation = {
  deleteUserLikedItems?:  {
    __typename: "UserLikedItems",
    id: string,
    userId: string,
    itemForSaleId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    itemForSale:  {
      __typename: "ItemForSale",
      id: string,
      title: string,
      description: string,
      images?: Array< string | null > | null,
      contact: string,
      price: number,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userItemsForSaleId: string,
      communityItemsForSaleId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type SearchPostsQueryVariables = {
  communityId: string,
  keyword: string,
};

export type SearchPostsQuery = {
  searchPosts:  Array< {
    __typename: "Post",
    id: string,
    author:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    images?: Array< string | null > | null,
    content: string,
    postType: PostType,
    likedBy?:  {
      __typename: "ModelUserLikedPostsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userPostsId: string,
    communityPostsId: string,
  } >,
};

export type SearchPeopleQueryVariables = {
  communityId: string,
  keyword: string,
};

export type SearchPeopleQuery = {
  searchPeople:  Array< {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    postalCode: string,
    firstName: string,
    lastName: string,
    communities?:  {
      __typename: "ModelUserCommunityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    selectedCommunity?: number | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friends?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    itemsForSale?:  {
      __typename: "ModelItemForSaleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedPosts?:  {
      __typename: "ModelUserLikedPostsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedEvents?:  {
      __typename: "ModelUserLikedEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedItems?:  {
      __typename: "ModelUserLikedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    location?: string | null,
    age?: number | null,
    bio?: string | null,
    profilePic?: string | null,
    pets?: number | null,
    kids?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendsId?: string | null,
  } >,
};

export type GetCommunityPostsQueryVariables = {
  communityId: string,
};

export type GetCommunityPostsQuery = {
  getCommunityPosts:  Array< {
    __typename: "Post",
    id: string,
    author:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    images?: Array< string | null > | null,
    content: string,
    postType: PostType,
    likedBy?:  {
      __typename: "ModelUserLikedPostsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userPostsId: string,
    communityPostsId: string,
  } >,
};

export type GetUserFriendsQueryVariables = {
  userId: string,
};

export type GetUserFriendsQuery = {
  getUserFriends:  Array< {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    postalCode: string,
    firstName: string,
    lastName: string,
    communities?:  {
      __typename: "ModelUserCommunityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    selectedCommunity?: number | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friends?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    itemsForSale?:  {
      __typename: "ModelItemForSaleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedPosts?:  {
      __typename: "ModelUserLikedPostsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedEvents?:  {
      __typename: "ModelUserLikedEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedItems?:  {
      __typename: "ModelUserLikedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    location?: string | null,
    age?: number | null,
    bio?: string | null,
    profilePic?: string | null,
    pets?: number | null,
    kids?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendsId?: string | null,
  } >,
};

export type PendingFriendRequestsQueryVariables = {
  userId: string,
};

export type PendingFriendRequestsQuery = {
  pendingFriendRequests:  Array< {
    __typename: "FriendRequest",
    id: string,
    sender:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    receiver:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    status: FriendRequestStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendRequestsId: string,
  } >,
};

export type SentFriendRequestsQueryVariables = {
  userId: string,
};

export type SentFriendRequestsQuery = {
  sentFriendRequests:  Array< {
    __typename: "FriendRequest",
    id: string,
    sender:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    receiver:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    status: FriendRequestStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendRequestsId: string,
  } >,
};

export type GetFriendRequestQueryVariables = {
  id: string,
};

export type GetFriendRequestQuery = {
  getFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    sender:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    receiver:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    status: FriendRequestStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendRequestsId: string,
  } | null,
};

export type ListFriendRequestsQueryVariables = {
  filter?: ModelFriendRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFriendRequestsQuery = {
  listFriendRequests?:  {
    __typename: "ModelFriendRequestConnection",
    items:  Array< {
      __typename: "FriendRequest",
      id: string,
      status: FriendRequestStatus,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendRequestsId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFriendRequestsQueryVariables = {
  filter?: ModelFriendRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFriendRequestsQuery = {
  syncFriendRequests?:  {
    __typename: "ModelFriendRequestConnection",
    items:  Array< {
      __typename: "FriendRequest",
      id: string,
      status: FriendRequestStatus,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendRequestsId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    postalCode: string,
    firstName: string,
    lastName: string,
    communities?:  {
      __typename: "ModelUserCommunityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    selectedCommunity?: number | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friends?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    itemsForSale?:  {
      __typename: "ModelItemForSaleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedPosts?:  {
      __typename: "ModelUserLikedPostsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedEvents?:  {
      __typename: "ModelUserLikedEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedItems?:  {
      __typename: "ModelUserLikedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    location?: string | null,
    age?: number | null,
    bio?: string | null,
    profilePic?: string | null,
    pets?: number | null,
    kids?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendsId?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCommunityQueryVariables = {
  id: string,
};

export type GetCommunityQuery = {
  getCommunity?:  {
    __typename: "Community",
    id: string,
    name: string,
    location: string,
    postalCode: string,
    image?: string | null,
    members?:  {
      __typename: "ModelUserCommunityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    itemsForSale?:  {
      __typename: "ModelItemForSaleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCommunitiesQueryVariables = {
  filter?: ModelCommunityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommunitiesQuery = {
  listCommunities?:  {
    __typename: "ModelCommunityConnection",
    items:  Array< {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCommunitiesQueryVariables = {
  filter?: ModelCommunityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCommunitiesQuery = {
  syncCommunities?:  {
    __typename: "ModelCommunityConnection",
    items:  Array< {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    author:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    images?: Array< string | null > | null,
    content: string,
    postType: PostType,
    likedBy?:  {
      __typename: "ModelUserLikedPostsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userPostsId: string,
    communityPostsId: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      content: string,
      postType: PostType,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userPostsId: string,
      communityPostsId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPostsQuery = {
  syncPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      content: string,
      postType: PostType,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userPostsId: string,
      communityPostsId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    post:  {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      content: string,
      postType: PostType,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userPostsId: string,
      communityPostsId: string,
    },
    author:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCommentsId?: string | null,
    postCommentsId: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCommentsId?: string | null,
      postCommentsId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCommentsQuery = {
  syncComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCommentsId?: string | null,
      postCommentsId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description: string,
    images?: Array< string | null > | null,
    location: string,
    datetime: string,
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    organizer:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    likedBy?:  {
      __typename: "ModelUserLikedEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userEventsId: string,
    communityEventsId?: string | null,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      name: string,
      description: string,
      images?: Array< string | null > | null,
      location: string,
      datetime: string,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userEventsId: string,
      communityEventsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEventsQuery = {
  syncEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      name: string,
      description: string,
      images?: Array< string | null > | null,
      location: string,
      datetime: string,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userEventsId: string,
      communityEventsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetItemForSaleQueryVariables = {
  id: string,
};

export type GetItemForSaleQuery = {
  getItemForSale?:  {
    __typename: "ItemForSale",
    id: string,
    title: string,
    description: string,
    images?: Array< string | null > | null,
    contact: string,
    price: number,
    seller:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    likedBy?:  {
      __typename: "ModelUserLikedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userItemsForSaleId: string,
    communityItemsForSaleId?: string | null,
  } | null,
};

export type ListItemForSalesQueryVariables = {
  filter?: ModelItemForSaleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemForSalesQuery = {
  listItemForSales?:  {
    __typename: "ModelItemForSaleConnection",
    items:  Array< {
      __typename: "ItemForSale",
      id: string,
      title: string,
      description: string,
      images?: Array< string | null > | null,
      contact: string,
      price: number,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userItemsForSaleId: string,
      communityItemsForSaleId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncItemForSalesQueryVariables = {
  filter?: ModelItemForSaleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncItemForSalesQuery = {
  syncItemForSales?:  {
    __typename: "ModelItemForSaleConnection",
    items:  Array< {
      __typename: "ItemForSale",
      id: string,
      title: string,
      description: string,
      images?: Array< string | null > | null,
      contact: string,
      price: number,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userItemsForSaleId: string,
      communityItemsForSaleId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserCommunityQueryVariables = {
  id: string,
};

export type GetUserCommunityQuery = {
  getUserCommunity?:  {
    __typename: "UserCommunity",
    id: string,
    userId: string,
    communityId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserCommunitiesQueryVariables = {
  filter?: ModelUserCommunityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserCommunitiesQuery = {
  listUserCommunities?:  {
    __typename: "ModelUserCommunityConnection",
    items:  Array< {
      __typename: "UserCommunity",
      id: string,
      userId: string,
      communityId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserCommunitiesQueryVariables = {
  filter?: ModelUserCommunityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserCommunitiesQuery = {
  syncUserCommunities?:  {
    __typename: "ModelUserCommunityConnection",
    items:  Array< {
      __typename: "UserCommunity",
      id: string,
      userId: string,
      communityId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserLikedPostsQueryVariables = {
  id: string,
};

export type GetUserLikedPostsQuery = {
  getUserLikedPosts?:  {
    __typename: "UserLikedPosts",
    id: string,
    userId: string,
    postId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    post:  {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      content: string,
      postType: PostType,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userPostsId: string,
      communityPostsId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserLikedPostsQueryVariables = {
  filter?: ModelUserLikedPostsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserLikedPostsQuery = {
  listUserLikedPosts?:  {
    __typename: "ModelUserLikedPostsConnection",
    items:  Array< {
      __typename: "UserLikedPosts",
      id: string,
      userId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserLikedPostsQueryVariables = {
  filter?: ModelUserLikedPostsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserLikedPostsQuery = {
  syncUserLikedPosts?:  {
    __typename: "ModelUserLikedPostsConnection",
    items:  Array< {
      __typename: "UserLikedPosts",
      id: string,
      userId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserLikedEventsQueryVariables = {
  id: string,
};

export type GetUserLikedEventsQuery = {
  getUserLikedEvents?:  {
    __typename: "UserLikedEvents",
    id: string,
    userId: string,
    eventId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    event:  {
      __typename: "Event",
      id: string,
      name: string,
      description: string,
      images?: Array< string | null > | null,
      location: string,
      datetime: string,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userEventsId: string,
      communityEventsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserLikedEventsQueryVariables = {
  filter?: ModelUserLikedEventsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserLikedEventsQuery = {
  listUserLikedEvents?:  {
    __typename: "ModelUserLikedEventsConnection",
    items:  Array< {
      __typename: "UserLikedEvents",
      id: string,
      userId: string,
      eventId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserLikedEventsQueryVariables = {
  filter?: ModelUserLikedEventsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserLikedEventsQuery = {
  syncUserLikedEvents?:  {
    __typename: "ModelUserLikedEventsConnection",
    items:  Array< {
      __typename: "UserLikedEvents",
      id: string,
      userId: string,
      eventId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserLikedItemsQueryVariables = {
  id: string,
};

export type GetUserLikedItemsQuery = {
  getUserLikedItems?:  {
    __typename: "UserLikedItems",
    id: string,
    userId: string,
    itemForSaleId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    itemForSale:  {
      __typename: "ItemForSale",
      id: string,
      title: string,
      description: string,
      images?: Array< string | null > | null,
      contact: string,
      price: number,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userItemsForSaleId: string,
      communityItemsForSaleId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserLikedItemsQueryVariables = {
  filter?: ModelUserLikedItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserLikedItemsQuery = {
  listUserLikedItems?:  {
    __typename: "ModelUserLikedItemsConnection",
    items:  Array< {
      __typename: "UserLikedItems",
      id: string,
      userId: string,
      itemForSaleId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserLikedItemsQueryVariables = {
  filter?: ModelUserLikedItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserLikedItemsQuery = {
  syncUserLikedItems?:  {
    __typename: "ModelUserLikedItemsConnection",
    items:  Array< {
      __typename: "UserLikedItems",
      id: string,
      userId: string,
      itemForSaleId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UserCommunitiesByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserCommunityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserCommunitiesByUserIdQuery = {
  userCommunitiesByUserId?:  {
    __typename: "ModelUserCommunityConnection",
    items:  Array< {
      __typename: "UserCommunity",
      id: string,
      userId: string,
      communityId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UserCommunitiesByCommunityIdQueryVariables = {
  communityId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserCommunityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserCommunitiesByCommunityIdQuery = {
  userCommunitiesByCommunityId?:  {
    __typename: "ModelUserCommunityConnection",
    items:  Array< {
      __typename: "UserCommunity",
      id: string,
      userId: string,
      communityId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UserLikedPostsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserLikedPostsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserLikedPostsByUserIdQuery = {
  userLikedPostsByUserId?:  {
    __typename: "ModelUserLikedPostsConnection",
    items:  Array< {
      __typename: "UserLikedPosts",
      id: string,
      userId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UserLikedPostsByPostIdQueryVariables = {
  postId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserLikedPostsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserLikedPostsByPostIdQuery = {
  userLikedPostsByPostId?:  {
    __typename: "ModelUserLikedPostsConnection",
    items:  Array< {
      __typename: "UserLikedPosts",
      id: string,
      userId: string,
      postId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UserLikedEventsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserLikedEventsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserLikedEventsByUserIdQuery = {
  userLikedEventsByUserId?:  {
    __typename: "ModelUserLikedEventsConnection",
    items:  Array< {
      __typename: "UserLikedEvents",
      id: string,
      userId: string,
      eventId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UserLikedEventsByEventIdQueryVariables = {
  eventId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserLikedEventsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserLikedEventsByEventIdQuery = {
  userLikedEventsByEventId?:  {
    __typename: "ModelUserLikedEventsConnection",
    items:  Array< {
      __typename: "UserLikedEvents",
      id: string,
      userId: string,
      eventId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UserLikedItemsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserLikedItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserLikedItemsByUserIdQuery = {
  userLikedItemsByUserId?:  {
    __typename: "ModelUserLikedItemsConnection",
    items:  Array< {
      __typename: "UserLikedItems",
      id: string,
      userId: string,
      itemForSaleId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UserLikedItemsByItemForSaleIdQueryVariables = {
  itemForSaleId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserLikedItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserLikedItemsByItemForSaleIdQuery = {
  userLikedItemsByItemForSaleId?:  {
    __typename: "ModelUserLikedItemsConnection",
    items:  Array< {
      __typename: "UserLikedItems",
      id: string,
      userId: string,
      itemForSaleId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateFriendRequestSubscriptionVariables = {
  filter?: ModelSubscriptionFriendRequestFilterInput | null,
};

export type OnCreateFriendRequestSubscription = {
  onCreateFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    sender:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    receiver:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    status: FriendRequestStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendRequestsId: string,
  } | null,
};

export type OnUpdateFriendRequestSubscriptionVariables = {
  filter?: ModelSubscriptionFriendRequestFilterInput | null,
};

export type OnUpdateFriendRequestSubscription = {
  onUpdateFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    sender:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    receiver:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    status: FriendRequestStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendRequestsId: string,
  } | null,
};

export type OnDeleteFriendRequestSubscriptionVariables = {
  filter?: ModelSubscriptionFriendRequestFilterInput | null,
};

export type OnDeleteFriendRequestSubscription = {
  onDeleteFriendRequest?:  {
    __typename: "FriendRequest",
    id: string,
    sender:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    receiver:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    status: FriendRequestStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendRequestsId: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    postalCode: string,
    firstName: string,
    lastName: string,
    communities?:  {
      __typename: "ModelUserCommunityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    selectedCommunity?: number | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friends?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    itemsForSale?:  {
      __typename: "ModelItemForSaleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedPosts?:  {
      __typename: "ModelUserLikedPostsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedEvents?:  {
      __typename: "ModelUserLikedEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedItems?:  {
      __typename: "ModelUserLikedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    location?: string | null,
    age?: number | null,
    bio?: string | null,
    profilePic?: string | null,
    pets?: number | null,
    kids?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendsId?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    postalCode: string,
    firstName: string,
    lastName: string,
    communities?:  {
      __typename: "ModelUserCommunityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    selectedCommunity?: number | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friends?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    itemsForSale?:  {
      __typename: "ModelItemForSaleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedPosts?:  {
      __typename: "ModelUserLikedPostsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedEvents?:  {
      __typename: "ModelUserLikedEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedItems?:  {
      __typename: "ModelUserLikedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    location?: string | null,
    age?: number | null,
    bio?: string | null,
    profilePic?: string | null,
    pets?: number | null,
    kids?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendsId?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    postalCode: string,
    firstName: string,
    lastName: string,
    communities?:  {
      __typename: "ModelUserCommunityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    selectedCommunity?: number | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friends?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    friendRequests?:  {
      __typename: "ModelFriendRequestConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    itemsForSale?:  {
      __typename: "ModelItemForSaleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedPosts?:  {
      __typename: "ModelUserLikedPostsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedEvents?:  {
      __typename: "ModelUserLikedEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    likedItems?:  {
      __typename: "ModelUserLikedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    location?: string | null,
    age?: number | null,
    bio?: string | null,
    profilePic?: string | null,
    pets?: number | null,
    kids?: number | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userFriendsId?: string | null,
  } | null,
};

export type OnCreateCommunitySubscriptionVariables = {
  filter?: ModelSubscriptionCommunityFilterInput | null,
};

export type OnCreateCommunitySubscription = {
  onCreateCommunity?:  {
    __typename: "Community",
    id: string,
    name: string,
    location: string,
    postalCode: string,
    image?: string | null,
    members?:  {
      __typename: "ModelUserCommunityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    itemsForSale?:  {
      __typename: "ModelItemForSaleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCommunitySubscriptionVariables = {
  filter?: ModelSubscriptionCommunityFilterInput | null,
};

export type OnUpdateCommunitySubscription = {
  onUpdateCommunity?:  {
    __typename: "Community",
    id: string,
    name: string,
    location: string,
    postalCode: string,
    image?: string | null,
    members?:  {
      __typename: "ModelUserCommunityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    itemsForSale?:  {
      __typename: "ModelItemForSaleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCommunitySubscriptionVariables = {
  filter?: ModelSubscriptionCommunityFilterInput | null,
};

export type OnDeleteCommunitySubscription = {
  onDeleteCommunity?:  {
    __typename: "Community",
    id: string,
    name: string,
    location: string,
    postalCode: string,
    image?: string | null,
    members?:  {
      __typename: "ModelUserCommunityConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    itemsForSale?:  {
      __typename: "ModelItemForSaleConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    author:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    images?: Array< string | null > | null,
    content: string,
    postType: PostType,
    likedBy?:  {
      __typename: "ModelUserLikedPostsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userPostsId: string,
    communityPostsId: string,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    author:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    images?: Array< string | null > | null,
    content: string,
    postType: PostType,
    likedBy?:  {
      __typename: "ModelUserLikedPostsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userPostsId: string,
    communityPostsId: string,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    author:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    images?: Array< string | null > | null,
    content: string,
    postType: PostType,
    likedBy?:  {
      __typename: "ModelUserLikedPostsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userPostsId: string,
    communityPostsId: string,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    post:  {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      content: string,
      postType: PostType,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userPostsId: string,
      communityPostsId: string,
    },
    author:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCommentsId?: string | null,
    postCommentsId: string,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    post:  {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      content: string,
      postType: PostType,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userPostsId: string,
      communityPostsId: string,
    },
    author:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCommentsId?: string | null,
    postCommentsId: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    post:  {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      content: string,
      postType: PostType,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userPostsId: string,
      communityPostsId: string,
    },
    author:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCommentsId?: string | null,
    postCommentsId: string,
  } | null,
};

export type OnCreateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description: string,
    images?: Array< string | null > | null,
    location: string,
    datetime: string,
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    organizer:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    likedBy?:  {
      __typename: "ModelUserLikedEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userEventsId: string,
    communityEventsId?: string | null,
  } | null,
};

export type OnUpdateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description: string,
    images?: Array< string | null > | null,
    location: string,
    datetime: string,
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    organizer:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    likedBy?:  {
      __typename: "ModelUserLikedEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userEventsId: string,
    communityEventsId?: string | null,
  } | null,
};

export type OnDeleteEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description: string,
    images?: Array< string | null > | null,
    location: string,
    datetime: string,
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    organizer:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    likedBy?:  {
      __typename: "ModelUserLikedEventsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userEventsId: string,
    communityEventsId?: string | null,
  } | null,
};

export type OnCreateItemForSaleSubscriptionVariables = {
  filter?: ModelSubscriptionItemForSaleFilterInput | null,
};

export type OnCreateItemForSaleSubscription = {
  onCreateItemForSale?:  {
    __typename: "ItemForSale",
    id: string,
    title: string,
    description: string,
    images?: Array< string | null > | null,
    contact: string,
    price: number,
    seller:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    likedBy?:  {
      __typename: "ModelUserLikedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userItemsForSaleId: string,
    communityItemsForSaleId?: string | null,
  } | null,
};

export type OnUpdateItemForSaleSubscriptionVariables = {
  filter?: ModelSubscriptionItemForSaleFilterInput | null,
};

export type OnUpdateItemForSaleSubscription = {
  onUpdateItemForSale?:  {
    __typename: "ItemForSale",
    id: string,
    title: string,
    description: string,
    images?: Array< string | null > | null,
    contact: string,
    price: number,
    seller:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    likedBy?:  {
      __typename: "ModelUserLikedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userItemsForSaleId: string,
    communityItemsForSaleId?: string | null,
  } | null,
};

export type OnDeleteItemForSaleSubscriptionVariables = {
  filter?: ModelSubscriptionItemForSaleFilterInput | null,
};

export type OnDeleteItemForSaleSubscription = {
  onDeleteItemForSale?:  {
    __typename: "ItemForSale",
    id: string,
    title: string,
    description: string,
    images?: Array< string | null > | null,
    contact: string,
    price: number,
    seller:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    likedBy?:  {
      __typename: "ModelUserLikedItemsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    visibility: Visibility,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userItemsForSaleId: string,
    communityItemsForSaleId?: string | null,
  } | null,
};

export type OnCreateUserCommunitySubscriptionVariables = {
  filter?: ModelSubscriptionUserCommunityFilterInput | null,
};

export type OnCreateUserCommunitySubscription = {
  onCreateUserCommunity?:  {
    __typename: "UserCommunity",
    id: string,
    userId: string,
    communityId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserCommunitySubscriptionVariables = {
  filter?: ModelSubscriptionUserCommunityFilterInput | null,
};

export type OnUpdateUserCommunitySubscription = {
  onUpdateUserCommunity?:  {
    __typename: "UserCommunity",
    id: string,
    userId: string,
    communityId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserCommunitySubscriptionVariables = {
  filter?: ModelSubscriptionUserCommunityFilterInput | null,
};

export type OnDeleteUserCommunitySubscription = {
  onDeleteUserCommunity?:  {
    __typename: "UserCommunity",
    id: string,
    userId: string,
    communityId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    community:  {
      __typename: "Community",
      id: string,
      name: string,
      location: string,
      postalCode: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserLikedPostsSubscriptionVariables = {
  filter?: ModelSubscriptionUserLikedPostsFilterInput | null,
};

export type OnCreateUserLikedPostsSubscription = {
  onCreateUserLikedPosts?:  {
    __typename: "UserLikedPosts",
    id: string,
    userId: string,
    postId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    post:  {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      content: string,
      postType: PostType,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userPostsId: string,
      communityPostsId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserLikedPostsSubscriptionVariables = {
  filter?: ModelSubscriptionUserLikedPostsFilterInput | null,
};

export type OnUpdateUserLikedPostsSubscription = {
  onUpdateUserLikedPosts?:  {
    __typename: "UserLikedPosts",
    id: string,
    userId: string,
    postId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    post:  {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      content: string,
      postType: PostType,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userPostsId: string,
      communityPostsId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserLikedPostsSubscriptionVariables = {
  filter?: ModelSubscriptionUserLikedPostsFilterInput | null,
};

export type OnDeleteUserLikedPostsSubscription = {
  onDeleteUserLikedPosts?:  {
    __typename: "UserLikedPosts",
    id: string,
    userId: string,
    postId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    post:  {
      __typename: "Post",
      id: string,
      images?: Array< string | null > | null,
      content: string,
      postType: PostType,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userPostsId: string,
      communityPostsId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserLikedEventsSubscriptionVariables = {
  filter?: ModelSubscriptionUserLikedEventsFilterInput | null,
};

export type OnCreateUserLikedEventsSubscription = {
  onCreateUserLikedEvents?:  {
    __typename: "UserLikedEvents",
    id: string,
    userId: string,
    eventId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    event:  {
      __typename: "Event",
      id: string,
      name: string,
      description: string,
      images?: Array< string | null > | null,
      location: string,
      datetime: string,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userEventsId: string,
      communityEventsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserLikedEventsSubscriptionVariables = {
  filter?: ModelSubscriptionUserLikedEventsFilterInput | null,
};

export type OnUpdateUserLikedEventsSubscription = {
  onUpdateUserLikedEvents?:  {
    __typename: "UserLikedEvents",
    id: string,
    userId: string,
    eventId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    event:  {
      __typename: "Event",
      id: string,
      name: string,
      description: string,
      images?: Array< string | null > | null,
      location: string,
      datetime: string,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userEventsId: string,
      communityEventsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserLikedEventsSubscriptionVariables = {
  filter?: ModelSubscriptionUserLikedEventsFilterInput | null,
};

export type OnDeleteUserLikedEventsSubscription = {
  onDeleteUserLikedEvents?:  {
    __typename: "UserLikedEvents",
    id: string,
    userId: string,
    eventId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    event:  {
      __typename: "Event",
      id: string,
      name: string,
      description: string,
      images?: Array< string | null > | null,
      location: string,
      datetime: string,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userEventsId: string,
      communityEventsId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserLikedItemsSubscriptionVariables = {
  filter?: ModelSubscriptionUserLikedItemsFilterInput | null,
};

export type OnCreateUserLikedItemsSubscription = {
  onCreateUserLikedItems?:  {
    __typename: "UserLikedItems",
    id: string,
    userId: string,
    itemForSaleId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    itemForSale:  {
      __typename: "ItemForSale",
      id: string,
      title: string,
      description: string,
      images?: Array< string | null > | null,
      contact: string,
      price: number,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userItemsForSaleId: string,
      communityItemsForSaleId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserLikedItemsSubscriptionVariables = {
  filter?: ModelSubscriptionUserLikedItemsFilterInput | null,
};

export type OnUpdateUserLikedItemsSubscription = {
  onUpdateUserLikedItems?:  {
    __typename: "UserLikedItems",
    id: string,
    userId: string,
    itemForSaleId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    itemForSale:  {
      __typename: "ItemForSale",
      id: string,
      title: string,
      description: string,
      images?: Array< string | null > | null,
      contact: string,
      price: number,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userItemsForSaleId: string,
      communityItemsForSaleId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserLikedItemsSubscriptionVariables = {
  filter?: ModelSubscriptionUserLikedItemsFilterInput | null,
};

export type OnDeleteUserLikedItemsSubscription = {
  onDeleteUserLikedItems?:  {
    __typename: "UserLikedItems",
    id: string,
    userId: string,
    itemForSaleId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      postalCode: string,
      firstName: string,
      lastName: string,
      selectedCommunity?: number | null,
      location?: string | null,
      age?: number | null,
      bio?: string | null,
      profilePic?: string | null,
      pets?: number | null,
      kids?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userFriendsId?: string | null,
    },
    itemForSale:  {
      __typename: "ItemForSale",
      id: string,
      title: string,
      description: string,
      images?: Array< string | null > | null,
      contact: string,
      price: number,
      visibility: Visibility,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userItemsForSaleId: string,
      communityItemsForSaleId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
