import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  students: Student[] = this.StudentService.getStudents()
  constructor(private StudentService: StudentService){}

}
