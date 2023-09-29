export interface PostType {
  id: string;
  email: string;
  content: string;
  timestamp: Date;
  likes: number;
  comments: string[];
}
export interface PostProps {
  postData: PostType;
}

export interface RegisterDto {
  email: string;
  password: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface User {
  id: number | null;
  email: string;
  firstName: string;
  lastName: string;
  imageUrl: string | null;
  headline: string;
  country: string;
  city: string;
  company: string;
  industry: string;
  college: string;
  website: string;
  about: string;
  firstLogin: boolean;
  role: string;
  following: Connection[];
  followers: Connection[];
}

export interface Connection {
  id: number | null;
  email: string;
  firstName: string;
  lastName: string;
}

export interface UserDto {
  id: number | null;
  email: string;
  firstName: string;
  lastName: string;
  imageUrl: Blob;
  headline: string;
  country: string;
  city: string;
  company: string;
  industry: string;
  college: string;
  website: string;
  about: string;
  firstLogin: boolean;
  role: string;
  connections: User[];
}

export interface ConnectionDto {
  userEmail: string;
  targetEmail: string;
  follow: boolean;
}
