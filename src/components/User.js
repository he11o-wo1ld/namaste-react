import { useState, useEffect } from "react";

const User = ({name}) => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("React Mount & Unmount")
        }, 1000)
        console.log("Hello");

        return (() => {
            clearInterval(timer);
        })
    }, []);
    

    return (
        

        <div className="user-card">
            <h2>Name : Hello {name}</h2>
            <h3>Location : Bangalore</h3>
            <h4>Contact : @helloworld</h4>
        </div>
    );
};

export default User;