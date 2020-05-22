import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { GraphQLError } from "graphql";

import { UsersdataService } from "../usersdata.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public errorMessage: string = "";

  constructor(
    private fb: FormBuilder,
    private _dataService: UsersdataService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmpassword: ["", [Validators.required, Validators.minLength(8)]],
      fullname: ["", [Validators.required]],
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) return;

    let {
      fullname,
      email,
      password,
      confirmpassword,
    } = this.registerForm.value;

    if (password != confirmpassword) {
      this.errorMessage = "The passwords do not match";
      return;
    }

    this._dataService.register$(email, password, fullname).subscribe(
      (val) => this._router.navigate(["login"]),
      (error: GraphQLError) =>
        (this.errorMessage = error.message.replace("GraphQL error: ", ""))
    );
  }

  getValidationMessage(key: string): string {
    let { errors, touched } = this.registerForm.get(key);

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
