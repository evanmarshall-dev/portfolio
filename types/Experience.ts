export type Experience = {
  _id: string;
  _createdAt: Date;
  title: string;
  logo: string;
  company: string;
  startDate: Date;
  endDate: Date;
  currentJob: boolean;
  technologies: string[];
  points: string[];
};
