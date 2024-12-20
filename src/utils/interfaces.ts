




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
  

  enabled: boolean;
}

export interface Image {
  public_id: string;
  url: string;
}



export interface Service {
  name: string;
  charge: string;
  desc: string;
  enabled: boolean;
  _id: string;
  image: Image;
}



export interface Timeline {
  company_name: string;
  summary: string;
  sequence: number;
  startDate: string;
  endDate:string;
  jobTitle: string;
  jobLocation: string;
  bulletPoints: string[];
  forEducation: boolean;
  enabled: boolean;
  _id: string;
}
