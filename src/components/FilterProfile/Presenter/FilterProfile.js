import React from 'react';
import logo from '../../../assets/images/logo.png';
import '../../../assets/css/components/style.scss';

const FilterProfile = props => {
    const { onChange, username, onKeyDown } = props;

    return (
        <div className="filter__account">
            <div className="grid__container">
                <div />
                
                <div className="filter__content">
                <div className="logo-ryad"> 
                <img
                    className="header-local-event-img"
                    src={`${logo}`}
                    alt="plage-palombaggia"
                />
                </div>
                    <div id="myForm">
                        <div className="form-group">
                            <div className="title-page">
                            <label htmlFor="username">
                                Afficher votre profil Github
                            </label>
                            </div>
                            
                            <div>
                            <input
                                type="text"
                                className="form-control profile__input"
                                name="username"
                                value={username}
                                onChange={onChange}
                                onKeyDown={onKeyDown}
                                id="username"
                                required
                            />
                            </div> 
                            
                        </div>
                        <div className="text-description">
                                <p>Un look revisité de votre profil GitHub</p>
                                <p>Il montre vos principaux référentiels et une visualisation de vos languages les plus utilisées ainsi que les référentiels étoilés</p>
                        </div>
                    </div>
                </div>
                <div />
            </div>
        </div>
    );
};

export default FilterProfile;
