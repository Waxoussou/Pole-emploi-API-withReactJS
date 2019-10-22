import React, { useEffect, useState } from 'react';
import SkillList from './SkillList';

function JobDescription(props) {

    let menu = document.querySelector('.header');
    let position = menu.offsetTop;
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > position) {
            menu.classList.add('headerStick');
        }
        else {
            menu.classList.remove('headerStick');
        }
    })


    const [dropdown, setDropdown] = useState(false);
    const [hasClass, setClass] = useState('is-close');
    const showDropdown = (e) => {
        if (hasClass == 'is-close') {
            setClass('is-active')
        } else {
            setClass('is-close')
        }
    }

    let skillsList = ['javascript', 'node', 'html', 'css', 'php', 'sql', 'mongodb', 'git', 'python', 'besoins']

    const checkIfSkillIsRequired = (sentence, skill) => {

        if (sentence.includes(skill)) {
            return skill;
        } else {
            return false
        }
    }

    const emphasizeSkillRequired = (content, skills) => {
        skills.forEach((skill) => {
            if (typeof content == 'string' && checkIfSkillIsRequired(content, skill) != undefined) {
                // let splitText = content.substring(0, content.search(skill).length + 1);
                let wordPosition = content.search(skill)
                let hasSkill = content.slice(wordPosition, (wordPosition + skill.length));
                hasSkill = hasSkill.split(' ');
                // console.log(wordPosition);
            }
            else {
                if (typeof content == 'object' && content != '') {
                    content.forEach((tache) => {
                        if (checkIfSkillIsRequired(tache.libelle, skill) == skill) {
                            console.log(``);
                        };
                    })

                }
            }
        })
    }

    let contentDesc = props.content;
    // console.log(checkIfSkillIsRequired('php, no but mongodb is the best'));

    emphasizeSkillRequired(contentDesc, skillsList)


    return (
        <div className={` dropdown-container ${hasClass}`} >

            <h3 onClick={(e) => showDropdown()} > {props.title} </h3>
            <div className='animation'>

                {
                    !dropdown
                        ? <div >
                            {typeof props.content == 'object'
                                ? <SkillList competences={props.content} />
                                : <div>
                                    {typeof props.content == 'string'
                                        ? <p className='mission-content'>{props.content}</p>
                                        : <p>'neither skills or description available'</p>
                                    }
                                </div>
                            }
                        </div>
                        : <div>

                        </div>
                }
            </div>

        </div >

    )
}

export default JobDescription;