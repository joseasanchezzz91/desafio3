import React from 'react';

const Table = (props) =>(
    <table className="characters-table">{props.children}</table>
);

export default Table;