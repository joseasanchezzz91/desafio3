import React from 'react';

const Tr = (props) =>(
    <tr className={props.kill}>{props.children}</tr>
);

export default Tr;