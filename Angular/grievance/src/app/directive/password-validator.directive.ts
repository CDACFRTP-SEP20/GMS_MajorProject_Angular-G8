import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:PasswordValidatorDirective,
    multi:true  
  }]
})
export class PasswordValidatorDirective {
//   @Input() appPasswordValidator:string
//   constructor() { }
//   validate(control: AbstractControl):{[key:string] :any} | null {
//    const controlToCompare= control.parent.get(this.appPasswordValidator)
//  if(controlToCompare && controlToCompare.value !==control.value){
//    return{'notEqual':true}
//  }
//  return null;
 
//    }
}
