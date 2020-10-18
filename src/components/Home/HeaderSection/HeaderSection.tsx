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

    const uploadedImage: any = React.useRef(null);
    const imageUploader: any = React.useRef(null);

    const handleImageUpload = (e: any) => {
        const [file] = e.target.files;
        if (file) {
            const reader: any = new FileReader();
            uploadedImage.current.file = file;
            reader.onload = (e: any) => {
                uploadedImage.current.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    };

    return (
        <header>
            <div className="picture">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    ref={imageUploader} />
                <div
                    className="picture__input"
                    onClick={() => imageUploader.current.click()}>
                    <img alt="" ref={uploadedImage} />
                </div>
      Click to upload Image
    </div>

            <div className="info">
                <h1><span>{firstNameValue}</span>
                    <span> {lastNameValue}</span></h1>
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