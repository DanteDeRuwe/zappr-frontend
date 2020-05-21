import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    this._dataService
      .login$(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (res) => console.log(res),
        (error) => console.log(error.message)
      );
  }
}