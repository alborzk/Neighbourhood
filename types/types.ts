import { CreateEventInput, CreatePostInput } from '@/src/API';

export enum Visibility {
  PUBLIC = 'PUBLIC',
  FRIENDS_ONLY = 'FRIENDS_ONLY',
  FRIENDS_OF_FRIENDS = 'FRIENDS_OF_FRIENDS',
  PRIVATE = 'PRIVATE',
}

export interface User {
  id: string;
  username: string;
  email: string;
  postalCode: string;
  firstName: string;
  lastName: string;
  communities: Community[];
  selectedCommunity: Community;
  posts: Post[];
  friends: User[];
  friendRequests: FriendRequest[];
  events: Event[];
  itemsForSale: ItemForSale[];
  likedPosts: Post[];
  likedEvents: Event[];
  likedItems: ItemForSale[];
  location: string;
  age: number;
  bio: string;
  profilePic: string;
  pets: number;
  kids: number;
}

export interface Community {
  id: string;
  name: string;
  location: string;
  postalCode: string;
  image: string;
  members: User[];
  posts: Post[];
}

export interface Post {
  id: string;
  author: User;
  community: Community;
  images: string[];
  content: string;
  likedBy: User[];
  comments: Comment[];
  visibility: Visibility;
}

export interface Comment {
  id: string;
  post: Post;
  author: User;
  content: string;
}

export interface Event {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
  datetime: Date;
  community: Community;
  organizer: User;
  attendees: User[];
  likedBy: User[];
  visibility: Visibility;
}

export interface ItemForSale {
  id: string;
  title: string;
  description: string;
  images: string[];
  contact: string;
  price: number;
  seller: User;
  community: Community;
  likedBy: User[];
  visibility: Visibility;
}

export interface FriendRequest {
  id: string;
  sender: User;
  receiver: User;
  status: FriendRequestStatus;
}

export type EventDataInput = Omit<CreateEventInput, 'userEventsId' | 'communityEventsId'>;
export type PostDataInput = Omit<CreatePostInput, 'userEventsId' | 'communityEventsId'>;
