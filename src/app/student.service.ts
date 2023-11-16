import { Injectable } from '@angular/core';
import { Student } from '../Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // constructor() { }
  students:Student[] = [
    {regNo:"1", name: "Amit", marks: 75 },
    {regNo:"2", name: "Anant", marks: 85 },
    {regNo:"3", name: "Vaibhav", marks: 80 },
    {regNo:"4", name: "Gyan", marks: 70 },
    {regNo:"5", name: "Rakesh", marks: 72 },
    
  ]

   getStudents():Student[]{
    return this.students;
  }

}
