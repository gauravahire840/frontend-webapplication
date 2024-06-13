import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface Task {
  title: string;
  description: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3000/api/tasks'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  addNewTasks(body: any,headers):Observable<any> {
    const apiurl = 'http://localhost:3000/api/tasks';
    const response = this.http
    .post(apiurl,body,headers)
    .pipe(
      map((response) => response)
    );
    return response;
  }

  deletemyTasks(taskid):Observable<any> {
    const apiurl = 'http://localhost:3000/api/tasks/'+taskid;
    const response = this.http
    .delete(apiurl)
    .pipe(
      map((response) => response)
    );
    return response;
  }
  
}
