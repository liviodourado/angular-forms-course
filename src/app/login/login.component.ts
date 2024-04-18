import { Component, OnInit } from "@angular/core";
import { Form } from "@angular/forms";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  val = {
    email: "hello@gmail.com",
    password: "12345",
  };

  constructor() {}

  ngOnInit() {}

  login(form: Form, event: any) {
    console.log(form);
    console.log(event);
  }
}
