
const CourseList = ({courses}) => {
    const { cover, coursesName,  pricePer } = courses;
    
    return (
      <>
         <div className="card w-70 h-960 bg-accent shadow-xl">
  <figure className="px-10 pt-10">
    <img src={cover} alt="Shoes" className="rounded-xl" />
  </figure>
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