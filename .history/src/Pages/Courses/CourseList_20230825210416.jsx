
const CourseList = ({courses,courseTeacher}) => {
    const { cover, coursesName,  pricePer,dCover } = courses;
    return (
      <>
         <div className="card w-80 bg-accent shadow-xl">
  <figure className="px-10 pt-10">
    <img src={dCover} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      </>
    );
};

export default CourseList;