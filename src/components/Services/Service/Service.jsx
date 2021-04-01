import React from 'react'
import design from '../../../images/design.jpg'
import web from '../../../images/web.jpg'
import custom from '../../../images/custom.jpg'
import { ServiceCard } from './ServiceCard'

export const Service = () => {
    return (
        <>
        <div className="container">
            <div className="row">
            <ServiceCard title="DESIGN AND UI/UX" 
               paragraph="Your website has three (!) seconds to make a lasting impression. We all know first impressions are the ones that count. So, if the visitor isn't engaged by then, you've lost them. Straight to your competitors site." 
               image={design} />
            </div>
        <div className="row">
        <ServiceCard title="WEB DESIGN AND DEVELOPMENT" 
               paragraph="Your website has to look delightful to the eye. It must be handsome. It's your vital business card and your sales channel." 
               image={web} />
        </div>

        <div className="row">
            <ServiceCard title="Custom Solutions" 
               paragraph="You're special, and so is our business.
               You need special (an interactive order form,
               ad portal or something unique) for ypur site." 
               image={custom} />
                
        </div>

        </div>
        </>
    )
}
