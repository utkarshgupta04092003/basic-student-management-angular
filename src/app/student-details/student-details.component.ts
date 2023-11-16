import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Student } from '../../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {

  students: Student[] = this.StudentService.getStudents()
  constructor(private StudentService: StudentService){}

}
