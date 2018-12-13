// tslint:disable-next-line:eofline
import { Injectable } from '@angular/core';

export class Student {

    StudentId: number;
    Exam1: number;
    Exam2: number;
    Mean: number;
}


@Injectable()
export class SchoolService {

    private Students: Array<Student>;

    AddStudent(student: Student) {
        this.Students.push(student);
    }

    GetStudents(): Array<Student> {
        return this.Students;
    }

    constructor() {

        this.Students = new Array<Student>();
       console.log("SchoolService Eklendi");
    }

}
