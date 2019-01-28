import { Component, OnInit } from '@angular/core';
import {SchoolService, Student} from './SchoolService';


@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

StudentService: SchoolService;

Student: Student = new Student();
Students: Array<Student>;

AddStudent() {

let student = new Student();

student.Exam1 = this.Student.Exam1;
student.Exam2 = this.Student.Exam2;
student.StudentId = this.Student.StudentId;

  this.StudentService.AddStudent(student);
}

constructor(studentService: SchoolService) {

  this.StudentService = studentService;

  this.Students = this.StudentService.GetStudents();
 }

  ngOnInit() {
  }

}
