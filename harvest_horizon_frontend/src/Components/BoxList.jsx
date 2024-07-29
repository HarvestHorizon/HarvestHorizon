import React ,{useState , useEffect} from 'react';
import Box from './Box';


const BoxList= () => {
    const [boxes,setBoxes] =useState([]);

    useEffect(()=> {
        fetch('/data.json')
            .then(response =>response.json())
            .then(data =>setBoxes(data))
            .then(error =>console.error('Error fetching error',error))
    },[]);

    return(
        <div class-name="box-list">
            {boxes.map(box =>(
                <Box 
                key={box.id}
                title={box.name}
                description={box.description}
                backgroundColor={box.backgroundColor} />
            ))}
        </div>
    );
};

export default BoxList;