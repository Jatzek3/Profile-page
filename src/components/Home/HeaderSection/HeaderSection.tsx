import React from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';


import './HeaderSection.scss';

let HeaderSection: any = (props: any) => {
    const {
        firstNameValue,
        lastNameValue,
        emailValue,
        titleValue,
    } = props;
    return (
        <header>
            <img className="picture" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" />
            <div className="info">
                <h1><span>{firstNameValue}</span>
                    <span>{lastNameValue}</span></h1>
                <p>{emailValue}</p>
                <p>{titleValue}</p>
            </div>
        </header>
    );
}


const selector = formValueSelector('user');
HeaderSection = connect(state => {
    const firstNameValue = selector(state, 'firstName');
    const lastNameValue = selector(state, 'lastName');
    const emailValue = selector(state, 'email');
    const titleValue = selector(state, 'title')
    return {
        firstNameValue,
        lastNameValue,
        emailValue,
        titleValue,
    }
})(HeaderSection)

export default HeaderSection;