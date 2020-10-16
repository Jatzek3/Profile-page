import React from 'react';
import { connect } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import showResults from './showResults'

interface Props { };

// const renderFields = () => (
//     <div>
//         <input type="text" />
//     </div>
// )


const MainSection: React.FC<Props & InjectedFormProps<{}, Props>> = (props: any) => {
    const { handleSubmit, submitting } = props;


    return (
        <form onSubmit={handleSubmit(showResults)} noValidate={true}>
            <div>
                <label>Username</label>
                <Field
                    name="UserName"
                    type="text"
                    component="input"
                    placeHolder="Enter User Name"
                //  normalize={name}
                />
            </div>
            <div>
                <label>Email</label>
                <Field
                    name="userName"
                    type="text"
                    component="input"
                    placeHolder="Enter User Name"
                //  normalize={name}
                />
            </div>
            <div>
                <label>Full Name</label>
                <Field
                    name="full name"
                    type="text"
                    component="input"
                    placeHolder="Enter User Name"
                //  normalize={name}
                />
            </div>
            <div>
                <label>Title</label>
                <Field
                    name="title"
                    type="text"
                    component="input"
                    placeHolder="Enter User Name"
                //  normalize={name}
                />
            </div>
            <div>
                <label>Language</label>
                <Field
                    name="language"
                    type="text"
                    component="input"
                    placeHolder="Enter User Name"
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
    // validate,
})(MainSection);

export default connect(null)(form);