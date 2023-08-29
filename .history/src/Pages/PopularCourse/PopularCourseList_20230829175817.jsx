
const PopularCourseList = ({popucourses}) => {
    const { cover, coursesName,  pricePer } = popucourses;
    return (
        <div className='max-w-screen-xl mx-auto'>
         
         <div className="card w-70 h-85  shadow-xl grid gap-0 grid-cols-2 bg-primary  hover:bg-info">
         <div className="">
  <div className="w-half p-12">
    <img src={cover}/>
  </div>
</div>
  <div className="card-body items-start">
    <h2 className="card-title">{coursesName}</h2>
    <p>{pricePer}</p>
    <div className="card-actions">
      <button className="btn btn-neutral ">Enroll Now</button>
    </div>
  </div>
</div>
      </div>   
        
    );
};

export default PopularCourseList;