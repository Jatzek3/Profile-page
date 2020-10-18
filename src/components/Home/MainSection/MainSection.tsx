import React from 'react';
import { connect } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { nameNormalize, mobileNormalize } from '../../../resources/normalize'
import { Gender } from '../../../resources/gender'
import { formInputTemplate, formSelectTemplate } from '../../../resources/templates'


import validate from '../../../resources/validate';

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
                    component={formInputTemplate}
                    label="First Name"
                    normalize={nameNormalize}
                />
            </div>
            <div>
                <Field
                    name="lastName"
                    component={formInputTemplate}
                    label="Last Name"
                    normalize={nameNormalize}
                />
            </div>
            <div>
                <Field
                    name="title"
                    component={formInputTemplate}
                    label="Job Title"
                    normalize={nameNormalize}
                />
            </div>
            <div>
                <Field
                    name="userGender"
                    datas={Gender}
                    component={formSelectTemplate}
                    label="Gender"
                />
            </div>
            <div>
                <Field
                    name="email"
                    component={formInputTemplate}
                    label="Email"
                />
            </div>
            <div>
                <Field
                    name="mobileNumber"
                    component={formInputTemplate}
                    label="Mobile"
                    normalize={mobileNormalize}
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