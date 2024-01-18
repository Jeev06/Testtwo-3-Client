import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CredentialService } from "src/app/shared/services/credential/credential.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(
    private _credentialService: CredentialService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  public logout(): void {
    this._credentialService.removeCredentials();
    this._router.navigate(["/auth/login"]);
  }
}
