import React from 'react';

const Scroll =(props) => {
    return(
        <div style={{overflowY:'scroll',border:'5px solid black',height:'600px'}}>
            {props.children}
        </div>
    )
}
export default Scroll;

// overflow-y is a CSS property that specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.
//for jsx use camelCase for css properties eg overflowY.