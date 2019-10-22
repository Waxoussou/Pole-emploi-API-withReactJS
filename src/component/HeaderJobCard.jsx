import React from 'react';

const HeaderJobCard = (props) => {
    return (
        <div className='job-card-header'>
            <h1>{props.name}</h1>
            <div className='logo-partenaire'>
                {
                    props.entreprise.partenaires[0]
                        ? <div>
                            <a href={props.entreprise.partenaires[0].url} target='blank'>
                                <img src={props.entreprise.partenaires[0].logo} alt="" />
                            </a>
                        </div>
                        : <div>
                            {props.recruteur
                                ? <div>
                                    <a href={props.entreprise.urlOrigine} target='blank'>
                                        <img src={props.recruteur.logo} alt="" />
                                    </a>
                                </div>
                                : <p>nothing to show</p>}
                        </div>
                }
            </div>
            <h4 className='job-location'>{props.address}</h4>
            <p className='date-de-diffusion'>diffusée le {props.date}</p>

        </div>
    )
}

export default HeaderJobCard;