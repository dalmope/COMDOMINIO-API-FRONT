import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginUsuario } from "app/models/login-usuario";
import { AuthService } from "app/services/auth.service";
import { TokenService } from "app/services/token.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;

  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  isLogged = false;
  isAdmin = false;

  errMsj: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();
    this.nombreUsuario = this.tokenService.getUserName();
    console.log(this.nombreUsuario);
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      (data) => {
        this.tokenService.setToken(data.token);
      },
      (err) => {
        this.errMsj = err.error.message;
        this.toastr.error(this.errMsj, "Fail", {
          timeOut: 3000,
          positionClass: "toast-top-center",
        });
      }
    );
  }
}
