import React, { useEffect } from 'react'

const Navbar = ({ color }) => {

    // Case:1 Run on every render
    useEffect(() => {
        alert("I will run on very render")
    });

    // Case:2 Run only on first render
    useEffect(() => {
        alert("I will run only on first render")
    }, []);

    // Case:3 Run only when certain values changed
    useEffect(() => {
        alert("color was changed")
    }, [color]);

    // Example of cleanup function
    // Ye use Effect jab chlta hai jab component ko kisi jga se nikal diya jata hai
    useEffect(() => {
        alert("Welcome to my first page")
      
        return () => {
          alert("component was unmounted")
        }
      }, [])

    return (
        <div>
            This is a {color} color navbar
        </div>
    )
}

export default Navbar
