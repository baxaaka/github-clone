import React from 'react';

const Card = ({data:{title ,id}}) => {
   
    // let {urls}=proms ;

    return (
        <>
      
            <section className='section-card'>
               <div className="card">
                   {id}
               </div>
            </section>
            
        </>
    );
};

export default Card;