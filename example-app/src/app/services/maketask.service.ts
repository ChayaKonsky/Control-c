import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Text } from '../class/Text';
@Injectable({
  providedIn: 'root'
})
export class MaketaskService {
configUrl = 'http://localhost:7500/Text/'
  constructor(private http: HttpClient) { }

  sendData(Text:Text):Observable<Text>{
    return this.http.post<Text>(this.configUrl,Text)
  }
  checkId(id:number):Observable<string>{
    const url=`${this.configUrl}${id}`
    return  this.http.get<string>(url)
  }
  checkPassword(password:string,id:string):Observable<string>{
    const url=`${this.configUrl}${password}/${id}`
    return this.http.get<string>(url)

  }
  getTextById(id:string):Observable<Text>{
    const url=`${this.configUrl}getById/${id}`
    return this.http.get<Text>(url)

  }
  getMaxId():Observable<{id:number}>{
    const url=`${this.configUrl}getMaxId/`
    return this.http.get<{id:number}>(url)
  }
}
