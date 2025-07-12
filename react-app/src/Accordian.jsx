import { useState } from "react";

const Accordian = () => {
    const [show, setShow] = useState(false);
    const accordionData = [
        { title: 'Section 1', content: 'Content of Section 1' },
        { title: 'Section 2', content: 'Content of Section 2' },
        { title: 'Section 3', content: 'Content of Section 3' },
    ];
    const expandValue = () => {
        if(show){
            setShow(false)
        }
        else{
            setShow(true)
        }
    }
    return (
        <div>
            {
                accordionData.map((value,index) => (
                    <div key={index}>
                        <div onClick={expandValue}>{value.title}</div>
                        {
                            show ? <div>{value.content}</div> : <></>
                        }
                    </div>
                ))
            }
        </div>)
}

export default Accordian;