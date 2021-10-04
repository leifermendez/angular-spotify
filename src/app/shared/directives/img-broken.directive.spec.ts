import { ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';


//TODO La prueba de ImgBroken es la siguiente

describe('ImgBrokenDirective', () => {

  //TODO Deberia instanciar correctamente
  it('should create an instance', () => {
    const mockElement = new ElementRef('')
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

});
