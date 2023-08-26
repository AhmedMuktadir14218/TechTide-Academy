
const CourseList = ({courses}) => {
    const { cover, coursesName,  pricePer } = courses;
    
    return (
      <>
         <div className="card w-65 h-85 bg-accent shadow-xl grid gap-0 grid-cols-2 ">
         <div className="avatar">
  <div className="w-24 mask ">
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