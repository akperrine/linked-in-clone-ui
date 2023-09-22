export interface PostType {
  _id: string;
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
  imageUrl: string;
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

export interface UserDto {
  id: number | null;
  email: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
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
