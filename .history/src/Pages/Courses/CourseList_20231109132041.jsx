import { Link } from "react-router-dom";

const CourseList = ({courses}) => {
    const { _id , cover , coursesName ,  pricePer } = courses;
    const handleDetails = courses;
    return (
      <div >
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
      <button className="btn btn-neutral "  onClick={() => handleAddToCart(props.product)}><Link to={`/courses/${_id}`}>See More</Link></button>
    </div>
  </div>
</div>
      </div>
    );
};

export default CourseList;