import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Trainee } from 'src/app/models/trainee';
import { TraineeService } from 'src/app/services/trainee.service';

@Component({
  selector: 'app-create-trainee',
  templateUrl: './create-trainee.component.html',
  styleUrls: ['./create-trainee.component.css']
})

export class CreateTraineeComponent implements OnInit {

  trainee: Trainee = new Trainee() ;

  constructor(private traineeService: TraineeService , private router: Router , private toastr: ToastrService) {}

  ngOnInit(): void {
      
  }

  public createNewTrainee() {
    this.traineeService.createNewTrainee(this.trainee).subscribe(response => {
      this.toastr.success("The trainee has been created with success");
      this.router.navigate(['/trainees']);
    })
  }

}
