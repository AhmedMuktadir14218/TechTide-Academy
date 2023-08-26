
const CourseList = ({courses}) => {
    const { cover, coursesName,  pricePer } = courses;
    
    return (
      <>
         <div className="card w-70 h-85  shadow-xl grid gap-0 grid-cols-2 bg-info hover:bg-primary">
         <div className="">
  <div className="w-half p-12">
    <img src={cover}/>
  </div>
</div>
  <div className="card-body items-start">
    <h2 className="card-title">{coursesName}</h2>
    <p>{pricePer}</p>
    <div className="card-actions">
      <button className="btn btn-blue-600 hover:">Enroll Now</button>
    </div>
  </div>
</div>
      </>
    );
};

export default CourseList;