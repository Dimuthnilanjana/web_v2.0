export interface UserObject {
  success: boolean;
  user: User;
}

export interface User {
  about: About;
  _id: string;
  username: string;
  email: string;
  role: string;
  timeline: Timeline[];
  skills: Skill[];
  youtube: any[];
  projects: Project[];
  social_handles: SocialHandle[];
  services: Service[];
  testimonials: Testimonial[];
  createdAt: string;
  updatedAt: string;
  refreshToken: string;
}

export interface About {
  name: string;
  title: string;
  subTitle: string;
  description: string;
  quote: string;
  
  
  
 
  avatar: Avatar;
 
}

export interface Avatar {
  public_id: string;
  url: string;
  _id: string;
}

export interface Skill {
  enabled: boolean;
  name: string;
  sequence: number;
  percentage: number;
  image: Avatar;
  _id: string;
}

export interface Project {

  title: string;

  image: {

    url: string;

  };

  description: string;

  liveUrl: string;
  techStack: string[];
  sequence: number;
}

export interface Image {
  public_id: string;
  url: string;
}

export interface SocialHandle {
  platform: string;
  url: string;
  image: Image;
  enabled: boolean;
  _id: string;
}

export interface Service {
  name: string;
  charge: string;
  desc: string;
  enabled: boolean;
  _id: string;
  image: Image;
}

export interface Testimonial {
  image: Image;
  name: string;
  review: string;
  position: string;
  enabled: boolean;
  _id: string;
}

export interface Timeline {
  company_name: string;
  summary: string;
  sequence: number;
  startDate: Date;
  endDate: Date;
  jobTitle: string;
  jobLocation: string;
  bulletPoints: string[];
  forEducation: boolean;
  enabled: boolean;
  _id: string;
}
