import React, {Fragment}  from 'react';
const Card = ({name,email,id}) =>{
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robots'/>
            <>
                <h2>{name}</h2>
                <p>{email}</p>
            </>
        </div>
    );
}
export default Card;
// tc= text center, dib= display inline block, br3= border radius 3, 
//pa3= padding 3, ma2= margin 2, grow= grow on hover, 
//bw2= border width 2, shadow-5= shadow 5
