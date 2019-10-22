import React from 'react';
import './contact.css';

const Contact = (props) => {


    const takeANameFromContactNom = () => {
        let contactName;
        if (props.contact.nom != undefined) {
            contactName = props.contact.nom;
            contactName = contactName.split('-');
            // console.log(contactName[1]);
            return (<p>{contactName[1]}</p>)
        } else {
            console.log('contact ne contient pas d\'informations concernant le nom')
        }

    }

    return (
        <div className='contacts-entreprise'>
            <h3>Contacts de l'entreprise</h3>
            {props.contact
                ? <div className='company-details'>
                    {props.recruteur
                        ? <p>{props.recruteur.nom}</p>
                        : <p>{'pas de nom pr le recruteurs'}</p>
                    }
                    {takeANameFromContactNom()}
                    <p>{props.contact.courriel}</p>
                    {props.recruteur ?
                        <div className='company-link'>
                            {
                                props.recruteur.url
                                    ?
                                    <div>
                                        <a href={props.recruteur.url} target='blank'>
                                            <button>site de l'entreprise</button>
                                        </a>
                                    </div>
                                    :
                                    <p>no site registered</p>
                            }
                        </div>
                        :
                        <div><p>no data concerning recruiter</p></div>
                    }
                </div>
                : <div className='no-company-details'>
                    <p className='no-data'> not any contact information</p>
                </div>
            }
        </div>
    )
}
export default Contact;