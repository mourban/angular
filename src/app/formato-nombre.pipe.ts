import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoNombre'
})
export class FormatoNombrePipe implements PipeTransform {

  transform(parametro1: string, parametro2: string): any {
    return "[" + parametro1 + " -- " + parametro2 + "]";
  }

}
