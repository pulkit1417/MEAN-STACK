import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import User from '../datatypes/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute){}
  editUserId!: string
  ngOnInit(): void {
    this.editUserId = this.route.snapshot.params["id"];
    if(this.editUserId){
      this.userService.getUserById(this.editUserId).subscribe(result =>{
        this.userForm.patchValue(result);
      })
    }
  }

  name = new FormControl('', [Validators.required]);

  email = new FormControl('', [Validators.required]);

  age = new FormControl('', [Validators.required]);

  address = new FormControl('', [Validators.required]);

  password = new FormControl('', [Validators.required]);

  userForm: FormGroup = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    address: this.address,
    password: this.password
  });

  addUser() {
    if (!this.userForm.valid) {
      alert("Please fill all the fields with valid data")
    }
    const model: User = this.userForm.value; 
    this.userService.addUser(model).subscribe(()=>{
      alert("User Added Successfully")
      this.router.navigate(['/user']);
      this.userForm.reset();    
    });
  }

  editUser(id:string){
    if (!this.userForm.valid) {
      alert("Please fill all the fields with valid data")
    }
    const model: User = this.userForm.value; 
    this.userService.editUser(id, model).subscribe(()=>{
      alert("User Edited Successfully")
      this.router.navigate(['/user']);
      this.userForm.reset();    
    });
  }
}
