
const CourseList = ({courses}) => {
    const { cover, coursesName,  pricePer } = courses;
    
    return (
      <>
         <div className="card w-70 h-85 bg-accent shadow-xl avatar">
         <div className="avatar">
  <div className="w-24 mask mask-squircle">
    <img src={cover}/>
  </div>
</div>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{coursesName}</h2>
    <p>{pricePer}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      </>
    );
};

export default CourseList;