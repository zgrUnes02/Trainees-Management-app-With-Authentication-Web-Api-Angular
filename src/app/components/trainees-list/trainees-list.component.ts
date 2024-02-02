import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Trainee } from 'src/app/models/trainee';
import { TraineeService } from 'src/app/services/trainee.service';

@Component({
  selector: 'app-trainees-list',
  templateUrl: './trainees-list.component.html',
  styleUrls: ['./trainees-list.component.css']
})
export class TraineesListComponent implements OnInit {

  public trainees: Trainee[] = [] ;
  public p = 1 ;

  constructor(private traineeService: TraineeService , private router: Router , private toastr: ToastrService) {}

  ngOnInit(): void {
    this.traineeService.getAllTrainee().subscribe(response => {
      this.trainees = response ;
    })
  }

  public editTrainee(id: any) {
    this.router.navigate(['trainees/edit' , id]) ;
  }

  public deleteTrainee(id: any) {
    this.traineeService.deleteTrainee(id).subscribe(response => {
      this.toastr.success("The trainee has been deleted with success") ;
      this.trainees = this.trainees.filter(trainee => trainee.id != id) ;
    })
  }

}
