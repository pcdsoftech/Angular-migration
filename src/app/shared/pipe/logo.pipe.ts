import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'logo',
    standalone: false
})
export class LogoPipe implements PipeTransform {
  transform(value: string) {
    const nameArray = value.split('');
    const firstLetter = nameArray[0];
    return firstLetter.toUpperCase();
  }
}
