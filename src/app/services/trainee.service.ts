import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainee } from '../models/trainee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TraineeService {

  url: string = "https://localhost:7083/api/Trainee" ;

  constructor(private httpClient: HttpClient) { }

  //! Get all trainee
  public getAllTrainee(){
    return this.httpClient.get<Trainee[]>(`${this.url}`) ;
  }

  //! Get single trainee
  public getSingleTrainee(id: any) {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  //! Create new trainee
  public createNewTrainee(trainee: Trainee) {
    return this.httpClient.post(`${this.url}` , trainee) ;
  }

  //! Update trainee
  public updateTrainee(id: any , trainee: Trainee) {
    return this.httpClient.put(`${this.url}/${id}` , trainee) ;
  }

  //! Delete trainee
  public deleteTrainee(id: any) {
    return this.httpClient.delete(`${this.url}/${id}`) ;
  }
}
