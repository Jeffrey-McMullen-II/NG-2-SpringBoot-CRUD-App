import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../shared/user.model";
import { UserService } from "../shared/user.service";



@Component({
  templateUrl: './update-user.component.html'
})
export class UpdateUserComponent {

  private route: ActivatedRoute;
  user: User;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
      this.user = this.userService.getSharedUser();
  }

  onUpdateClicked(): void {
    this.userService.updateUser(this.user)
        .subscribe(data => {
          alert("User updated successfully.");
          });
  };
}
