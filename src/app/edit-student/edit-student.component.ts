import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private studentservice: StudentsService,
    private url: ActivatedRoute
  ) {
    this.addStudent = fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  id: any;
  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
    // console.log(this.id);
    this.studentservice.getSingleStudent(this.id).subscribe((data) => {
      this.addStudent.patchValue(data);
    });
  }

  addStudent: any;

  onSubmit() {
    // console.log(this.addStudent.value);
    // this.studentservice.addStudent(this.addStudent.value).subscribe((data) => {
    //   console.log(data);
    //   this.routes.navigate(['/']);
    // });
    // this.studentservice.getSingleStudent();
  }
}
