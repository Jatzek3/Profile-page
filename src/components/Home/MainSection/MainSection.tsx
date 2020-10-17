import React from 'react';
import { connect } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

import showResults from './showResults'
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


const MainSection: React.FC<Props & InjectedFormProps<{}, Props>> = (props: any) => {
    const { handleSubmit, submitting } = props;


    return (
        <form onSubmit={handleSubmit(showResults)} noValidate={true}>
            <div>
                <Field
                    name="UserName"
                    type="text"
                    component={renderInput}
                    // placeHolder="Enter User Name"
                    label="UserName"
                //  normalize={name}
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
                    name="firstName"
                    type="text"
                    component={renderInput}
                    // placeHolder="Enter User Name"
                    label="First Name"
                //  normalize={name}
                />
            </div>
            <div>
                <Field
                    name="lastName"
                    type="text"
                    component={renderInput}
                    // placeHolder="Enter User Name"
                    label="Last Name"
                //  normalize={name}
                />
            </div>
            <div>
                <Field
                    name="title"
                    type="text"
                    component={renderInput}
                    placeHolder="Enter User Name"
                    label="Title"
                //  normalize={name}
                />
            </div>
            <div>
                <Field
                    name="language"
                    type="text"
                    component={renderInput}
                    placeHolder="Enter User Name"
                    label="Language"
                //  normalize={name}
                />
            </div>
            <button type='submit' disabled={submitting}>Submit</button>

        </form>
    );
}

const form = reduxForm<{}, Props>({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,
    form: 'user',
    validate,
})(MainSection);

export default connect(null)(form);