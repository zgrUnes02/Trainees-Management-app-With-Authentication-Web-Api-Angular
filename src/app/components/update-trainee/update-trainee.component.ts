import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Trainee } from 'src/app/models/trainee';
import { TraineeService } from 'src/app/services/trainee.service';

@Component({
  selector: 'app-update-trainee',
  templateUrl: './update-trainee.component.html',
  styleUrls: ['./update-trainee.component.css']
})
export class UpdateTraineeComponent implements OnInit {

  trainee: any = new Trainee() ;
  id: any ;

  constructor(private toastr: ToastrService , private traineeService: TraineeService , private router: Router , private activatedRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params['id'] ;
    this.traineeService.getSingleTrainee(this.id).subscribe(response => {
      this.trainee = response ;
    })
  }

  public updateTrainee() {
    this.traineeService.updateTrainee(this.id , this.trainee).subscribe(response => {
      this.toastr.success("The trainee has been updated with success") ;
      this.router.navigate(['/trainees']) ;
    });
  }

}
