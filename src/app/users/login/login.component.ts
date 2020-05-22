import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GraphQLError } from "graphql";

import { UsersdataService } from "../usersdata.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public errorMessage: string = "";

  constructor(
    private fb: FormBuilder,
    private _dataService: UsersdataService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  onSubmit() {
    this._dataService
      .login$(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (token) => this._dataService.authenticate(token),
        (error: GraphQLError) =>
          (this.errorMessage = error.message.replace("GraphQL error: ", ""))
      );
  }

  getValidationMessage(key: string): string {
    let { errors, touched } = this.loginForm.get(key);

    if (errors && touched) {
      if (errors.required) return "This is a required field";
      if (errors.minlength)
        return `Minimum length is ${errors.minlength.requiredLength} characters`;
      if (errors.email) return "Please provide a valid email address";
    } else {
      return "";
    }
  }
}
