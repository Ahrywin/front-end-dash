import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Test} from './../interfaces/test';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {
  private api='https://jsonplaceholder.typicode.com';

  constructor(private http:HttpClient) { }

  getjson()
  {
    const path= `${this.api}/todos/`;
    return this.http.get<Test[]>(path);
  }

  getunjson(id: string)
  {
    const path= `${this.api}/todos/${id}`;
    return this.http.get<Test>(path);
  }
  createTask(task:Test)
  {
    const path =`${this.api}/todos`;
    return this.http.post(path,task);

  }
  updateTask(task:Test)
  {
    const path=`${this.api}/todos/${task.id}`;
    return this.http.put<Test>(path,task);
  }
  DeleteTask(id:string)
  {
    const path=`${this.api}/todos/${id}`;
    return this.http.delete(path);

  }
}
