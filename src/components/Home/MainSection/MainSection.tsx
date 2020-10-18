import React from 'react';
import { connect } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { nameNormalize, mobileNormalize } from './normalize'

import validate from './validate';

interface Props { };


const renderInput: React.FC = (field: any) => {
    return (
        <div>
            <label>{field.label}</label>
            <input
                {...field.input}
            />
            {field.meta.touched && <p /*className="text-danger"*/>{field.meta.error}</p>}
        </div>
    )

}
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

async function showResults(values: any) {
    await sleep(500) // simulate server latency
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
}


let MainSection: React.FC<Props & InjectedFormProps<{}, Props>> = (props: any) => {
    const { handleSubmit, submitting } = props;


    return (
        <form onSubmit={handleSubmit(showResults)} noValidate={true}>

            <div>
                <Field
                    name="firstName"
                    type="text"
                    component={renderInput}
                    // placeHolder="Enter User Name"
                    label="First Name"
                    normalize={nameNormalize}
                />
            </div>
            <div>
                <Field
                    name="lastName"
                    type="text"
                    component={renderInput}
                    // placeHolder="Enter User Name"
                    label="Last Name"
                    normalize={nameNormalize}
                />
            </div>
            <div>
                <Field
                    name="email"
                    type="text"
                    component={renderInput}
                    // placeHolder="Enter User Name"
                    label="Email"
                //  normalize={name}
                />
            </div>
            <div>
                <Field
                    name="mobileNumber"
                    type="text"
                    component={renderInput}
                    // placeHolder="Enter User Name"
                    label="Mobile"
                    normalize={mobileNormalize}
                />
            </div>
            <div>
                <Field
                    name="title"
                    type="text"
                    component={renderInput}
                    // placeHolder="Enter User Name"
                    label="Title"
                //  normalize={name}
                />
            </div>
            <div>
                <Field
                    name="language"
                    type="text"
                    component={renderInput}
                    // placeHolder="Enter User Name"
                    label="Language"
                //  normalize={name}
                />
            </div>
            <button type='submit' disabled={submitting}>Submit</button>

        </form>
    );
}

let form = reduxForm<{}, Props>({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,
    form: 'user',
    validate,
})(MainSection);


export default connect(null)(form);