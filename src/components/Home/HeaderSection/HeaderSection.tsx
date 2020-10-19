import React from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';


import './HeaderSection.scss';

let HeaderSection: React.FC = (props: any) => {
    const uploadedImage: any = React.useRef(null);
    const imageUploader: any = React.useRef(null);

    const {
        firstNameValue,
        lastNameValue,
        emailValue,
        titleValue,
    } = props;



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
                <p>Click to upload Image</p>
            </div>

            <div className="info">
                <p>{firstNameValue || "Your"} {lastNameValue || "Name"}</p>
                <p>{titleValue || "Job Title"}</p>
                <p className="info__email">{emailValue || "Email"}</p>
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