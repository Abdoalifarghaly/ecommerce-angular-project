import { AbstractControl, ValidatorFn, ValidationErrors} from "@angular/forms";

export function passwordMatch():ValidatorFn{
    return(control:AbstractControl):ValidationErrors|null=>{
        let password=control.get('password')
        let confirmPassword=control.get('confirmPassword')
        if(!password||!confirmPassword||!password.value||!confirmPassword.value)
        {
            return null
        }
        let vallErr={'unMatchedPass':{'pass':password,'confi':confirmPassword}}
                return (password.value===confirmPassword.value)?null:vallErr
    }

}





















