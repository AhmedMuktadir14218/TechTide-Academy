
const CourseList = ({course}) => {
    const { cover, coursesName,  pricePer } = course;
    return (
      <div>
        <div className="card w-86 bg-neutral shadow-xl">
          <figure className="ap_figure px-8 pt-8">
            <img src={cover} alt=" " className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{coursesName}</h2>
            {/* <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p> */}
            <p>{pricePer}</p>
            <div className="card-actions">
  
  
              <label htmlFor="booking-modal" onClick={() => setService(appointmentOption)} className="btn btn-primary">Buy Now</label>
            </div>
  
  
  
          </div>
        </div>
      </div>
    );
};

export default CourseList;