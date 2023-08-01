import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Videocard } from '../model/videocard.model';
import { Observable } from 'rxjs';

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
  
}
