import React from 'react';
import { connect } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

interface Props { };

// const renderFields = () => (
//     <div>
//         <input type="text" />
//     </div>
// )


const MainSection: React.FC<Props & InjectedFormProps<{}, Props>> = (props: any) => {
    const { handleSubmit } = props;


    return (
        <form onSubmit={handleSubmit} noValidate={true}>
            <label>userName</label>
            <Field
                name="userName"
                type="text"
                component="input"
                placeHolder="Enter User Name"
            // normalize={name}
            />

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