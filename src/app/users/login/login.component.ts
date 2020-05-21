import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GraphQLError } from "graphql";

import { UsersdataService } from "../usersdata.service";
import { Router } from "@angular/router";

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
    private _dataService: UsersdataService,
    private _router: Router
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
        (token) => {
          this._dataService.auth(token);
        },
        (error: GraphQLError) =>
          (this.errorMessage = error.message.replace("GraphQL error: ", ""))
      );
  }
}
