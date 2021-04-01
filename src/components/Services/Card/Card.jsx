import React from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

export const Card = () => {
    return (
        <>
        <div class="card text-dark bg-light mb-3" style={{maxWidth: "20rem"}}>
         <div class="card-header"><h2>What we're great at</h2></div>
            <div class="card-body">
                <p class="card-text">
                Fourteen years and 400+ finished web projects have gifted us a unique experience on how to create something that is easy to use, looks great and earns a profit for your company. 
                </p>
                <div class="d-grid gap-2 col-8 mx-auto">
                    <button class="btn btn-success mx-auto" type="button">
                        Explore full services
                    </button>
                    
                </div>
            </div>
         </div>
        </>
    )
}
