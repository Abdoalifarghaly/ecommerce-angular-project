import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'new'
})
export class NewPipe implements PipeTransform {

  transform(value: string, wordlimit:number=3):string {
    if(!value) return ""
    const words=value.split(' ')
    if(words.length<=wordlimit){
return value
    }
      return words.slice(0,wordlimit).join(" ")+".."

  }

}
