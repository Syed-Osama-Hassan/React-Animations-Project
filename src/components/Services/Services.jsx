import React, { useState } from 'react'
import { Card } from './Card/Card'
import { Service } from './Service/Service'
import Fade from 'react-reveal/Fade'

export const Services = () => {
    const [reveal, setReveal] = useState(false)
    
    const revealService = () =>{
        if(window.scrollY >= 500){
            setReveal(true);
        }
        else{
            setReveal(false);
        }
    }

    window.addEventListener('scroll', revealService)
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <Fade left collapse when={reveal? true: false}>
                    <Card />
                    </Fade>
                </div>
                <div className="col-md">
                    <Fade right collapse when={reveal? true: false}>
                    <Service />
                    </Fade>
                </div>
            </div>            
        </div>
        </>
    )
}
