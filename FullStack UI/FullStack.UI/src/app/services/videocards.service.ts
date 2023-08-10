import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Videocard } from '../model/videocard.model';
import { Observable } from 'rxjs';
import { Producer } from '../model/producer.model';

@Injectable({
  providedIn: 'root'
})
export class VideocardsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllVideocards(): Observable<Videocard[]> {
    return this.http.get<Videocard[]>(this.baseApiUrl + '/api/Videocards');
  }

addVideocard(AddVideocardRequest: Videocard): Observable<Videocard>{
  AddVideocardRequest.id = '00000000-0000-0000-0000-000000000000';
  return this.http.post<Videocard>(this.baseApiUrl + '/api/Videocards', AddVideocardRequest);
}
  getVideocard(id: string): Observable<Videocard>{
    return this.http.get<Videocard>(this.baseApiUrl + '/api/Videocards/' + id)
  }

  updateVideocard(id: string, updateVideocardRequest: Videocard): 
  Observable<Videocard> {
    return this.http.put<Videocard>(this.baseApiUrl + '/api/Videocards/' + id, updateVideocardRequest);
  }
  
  deleteVideocard(id: string): Observable<Videocard>{
    return this.http.delete<Videocard>(this.baseApiUrl + '/api/Videocards/' + id);
  }
  getAllProducers(): Observable<Producer[]> {
    return this.http.get<Producer[]>(this.baseApiUrl + '/api/Videocards/GetProducers');
  }
  addProducer(AddProducerRequest:Producer): Observable<Producer>{
    AddProducerRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Producer>(this.baseApiUrl + '/api/Videocards/PostProducer', AddProducerRequest);
  }
  deleteProducer(id: string): Observable<Producer>{
    return this.http.delete<Producer>(this.baseApiUrl + '/api/Videocards/DeleteProducer/' + id);
  }
}
