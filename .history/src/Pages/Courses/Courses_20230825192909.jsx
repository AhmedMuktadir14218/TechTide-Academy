import { useState } from "react";

const Courses = () => {
    const {Course,setCourse}= useState()
    return (
        <>
             <div className='c_padding grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <
                        key={option._id} appointmentOption={option} setService={setService}
                    >

                    </>)
                }
        </>
    );
};

export default Courses;