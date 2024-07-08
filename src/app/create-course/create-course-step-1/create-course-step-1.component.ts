import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { CoursesService } from "../../services/courses.service";
import { courseTitleValidation } from "../../validators/course-title.validator";

interface CourseCategory {
  code: string;
  description: string;
}
@Component({
  selector: "create-course-step-1",
  templateUrl: "./create-course-step-1.component.html",
  styleUrls: ["./create-course-step-1.component.scss"],
})
export class CreateCourseStep1Component implements OnInit {
  form = this.fb.group({
    title: [
      "",
      {
        Validators: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(60),
        ],
        asyncValidators: [courseTitleValidation(this.courses)],
        udateOn: blur,
      },
    ],
    releaseAt: [new Date(), Validators.required],
    category: ["BEGINNER", Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: ["", [Validators.required, Validators.minLength(3)]],
  });

  courseCategories$: Observable<CourseCategory[]>;

  constructor(private fb: FormBuilder, private courses: CoursesService) {}

  ngOnInit() {
    this.courseCategories$ = this.courses.findCourseCategories();
  }

  getCourseTitle() {
    return this.form.controls["title"];
  }
}
