
const CourseList = ({courses}) => {
    // const { cover, coursesName,  pricePer } = courses;
    return (
      <>
       <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={details.dcover} alt='' />
                          </div>
                          <div className='para'>
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button className='outline-btn'>ENROLL NOW !</button>
            </div>
          ))}
        </div>
      </section>
      </>
    );
};

export default CourseList;


{/* <div className="card w-86 bg-accent shadow-xl">
          <figure className="ap_figure px-8 pt-8">
            <img src={cover} alt=" " className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{coursesName}</h2>
            <p>{pricePer}</p>
            <div className="card-actions">
  
  
              {/* <label htmlFor="booking-modal" onClick={() => setService(appointmentOption)} className="btn btn-primary">Buy Now</label> */}
            // </div>
  
  
  
          // </div>
        // </div> */}