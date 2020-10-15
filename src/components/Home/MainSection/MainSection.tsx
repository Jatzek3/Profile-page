import React from 'react';
import { Field, reduxForm } from 'redux-form'

let MainSection = (props: any) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>

        </form>
    );
}
MainSection = reduxForm({
    // a unique name for the form
    form: 'profileInfo'
})(MainSection)

export default MainSection