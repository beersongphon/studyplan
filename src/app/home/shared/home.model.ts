export interface User {
  User_ID: string;
  User_Name: string;
}

export interface Adding {
  Add_With_ID: string;
}

export interface Addings {
  Add_With_ID: string;
}

export interface Course {
  Course_ID: string;
}

export interface Institution {
  Institution_ID: string;
  Institution_Name: string;
}

export interface Student {
  Student_ID: string;
  Student_Name: string;
}

export interface SubjectGroup {
  Group_ID: string;
}

export interface Subject {
  Subject_ID: string;
}

export interface SubjectInstitution {
  Subject_Ins_ID: string;
  Subject_Ins_Name: string;
  Subject_Ins_Credit: string;
}

export interface Teacher {
  Teacher_ID: string;
  Teacher_Name: string;
}

export interface Transfer {
  Transfer_ID: string;
  Transfer_Name: string;
  Transfer_Credit: string;
}
