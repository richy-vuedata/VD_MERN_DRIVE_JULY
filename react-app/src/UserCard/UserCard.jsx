import React from "react";

function UserCard(props){
    console.log(props)
    return(
        <>
            <tr>
                <td>
                    {`${props.firstName} ${props.lastName}`}
                </td>
                <td>
                    {props.email}
                </td>
            </tr>
        </>
    )
}
export default UserCard