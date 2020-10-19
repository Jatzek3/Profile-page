import { FormErrors } from 'redux-form';
import { AddUserParams } from './userModel';

function validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validate = (values: AddUserParams): FormErrors<AddUserParams> => {
    const errors: FormErrors<AddUserParams> = {};

    if (!values.firstName) {
        errors.firstName = 'First name required';
    }
    if (!values.lastName) {
        errors.lastName = 'Last name required';
    }
    if (!values.email) {
        errors.email = 'Email required'
    }
    else if (!validateEmail(values.email)) {
        errors.email = 'Invalid Email'
    }

    return errors;
};
export default validate;