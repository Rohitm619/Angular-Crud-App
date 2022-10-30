import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css'],
})
export class ListStudentComponent implements OnInit {
  constructor(
    private studentservice: StudentsService,
    private routes: Router
  ) {}

  ngOnInit(): void {
    this.loadStudent();
  }

  students: any;

  loadStudent() {
    this.studentservice.listStudent().subscribe((data: any) => {
      this.students = data;
    });
  }

  deleteStudent(student: any) {
    this.studentservice.delStudent(student._id).subscribe((data: any) => {
      this.students = this.students.filter((u: any) => u !== student);
    });
  }
}
