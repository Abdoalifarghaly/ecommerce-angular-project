import { CanDeactivateFn } from '@angular/router';
import { RegisterComponent } from '../pages/register/register.component';

export const registerGuard: CanDeactivateFn<RegisterComponent> = (component, currentRoute, currentState, nextState) => {
  if(component.userRegister.valid){
    const alert=window.confirm("Data will be loas")
    return alert
  }
  return true;
};
