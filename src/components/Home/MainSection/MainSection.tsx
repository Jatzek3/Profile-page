import React from 'react';
import { connect } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { nameNormalize, mobileNormalize } from './normalize'
import { Gender } from './gender'
import { formInputTemplate, formSelectTemplate } from './templates'


import validate from './validate';

interface Props { };




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
                    component={formInputTemplate}
                    // placeHolder="Enter User Name"
                    label="First Name"
                    normalize={nameNormalize}
                />
            </div>
            <div>
                <Field
                    name="lastName"
                    type="text"
                    component={formInputTemplate}
                    // placeHolder="Enter User Name"
                    label="Last Name"
                    normalize={nameNormalize}
                />
            </div>
            <div>
                <Field
                    name="userGender"
                    type="text"
                    datas={Gender}
                    component={formSelectTemplate}
                    label="Gender"
                    placeHolder="Select Gender"
                />
            </div>
            <div>
                <Field
                    name="email"
                    type="text"
                    component={formInputTemplate}
                    // placeHolder="Enter User Name"
                    label="Email"
                />
            </div>
            <div>
                <Field
                    name="mobileNumber"
                    type="text"
                    component={formInputTemplate}
                    // placeHolder="Enter User Name"
                    label="Mobile"
                    normalize={mobileNormalize}
                />
            </div>
            <div>
                <Field
                    name="title"
                    type="text"
                    component={formInputTemplate}
                    // placeHolder="Enter User Name"
                    label="Title"
                //  normalize={name}
                />
            </div>
            <div>
                <Field
                    name="language"
                    type="text"
                    component={formInputTemplate}
                    // placeHolder="Enter User Name"
                    label="Language"
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