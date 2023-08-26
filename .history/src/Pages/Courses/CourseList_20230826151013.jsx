
const CourseList = ({courses}) => {
    const { cover, coursesName,  pricePer } = courses;
    
    return (
      <>
         <div className="card w-65 h-85 bg-accent shadow-xl grid gap-0 grid-cols-2 ">
         <div className="">
  <div className="w-full">
    <img src={cover}/>
  </div>
</div>
  <div className="card-body items-start">
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