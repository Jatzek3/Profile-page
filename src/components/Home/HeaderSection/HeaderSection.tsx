import React from 'react';

import './HeaderSection.scss'

function HeaderSection() {
    return (
        <header>
            <img className="picture" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" />
            <div className="info">
                <h1>Jhon Doe</h1>
                <p>usdbsdudbsub@gmail.com<span>Administrator</span></p>
                <p>SomeOne in <span>Someplace</span></p>
            </div>
        </header>
    );
}

export default HeaderSection