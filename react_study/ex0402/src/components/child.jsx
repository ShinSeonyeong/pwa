import React, {useEffect} from 'react';

const Child = (props) => {
    console.log(props);
    useEffect(() => {
        console.log('자식 child useEffect');
    }, [props.count]);
    return (
        <div>
            <h1>Child</h1>
        </div>
    );
};

export default Child;