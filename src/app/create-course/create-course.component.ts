import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "create-course",
  templateUrl: "./create-course.component.html",
  styleUrls: ["./create-course.component.scss"],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class CreateCourseComponent implements OnInit {
  ngOnInit() {}

  submit(step1: FormControl, step2: FormControl, step3: FormControl) {
    console.log(step1.value, step2.value, step3.value);
  }
}
