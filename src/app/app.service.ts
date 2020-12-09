import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  datatodo=[{id:1,date:"09/12/2020",title:"Attend SL Lab ",description:"Learn material design"},
{id:2,date:"09/12/2020",title:"Attend SE Lab ",description:"Learn software testing"},
{id:3,date:"09/12/2020",title:"Attend OS Lab ",description:"Learn uniprocessor"},]

  constructor() {}

}
