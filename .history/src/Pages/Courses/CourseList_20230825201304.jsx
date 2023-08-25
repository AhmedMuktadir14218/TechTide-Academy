
// eslint-disable-next-line react/prop-types
const CourseList = ({courses}) => {
    const { cover, coursesName,  pricePer } = courses;
    return (
      <div>
        <div className="card w-86 bg-accent shadow-xl">
          <figure className="ap_figure px-8 pt-8">
            <img src={cover} alt=" " className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{coursesName}</h2>
            <p>{pricePer}</p>
            <div className="card-actions">
  
  
              {/* <label htmlFor="booking-modal" onClick={() => setService(appointmentOption)} className="btn btn-primary">Buy Now</label> */}
            </div>
  
  
  
          </div>
        </div>
      </div>
    );
};

export default CourseList;