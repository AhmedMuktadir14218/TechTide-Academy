
const CourseList = ({courses}) => {
    const { cover, coursesName,  pricePer } = courses;
    return (
      <>
          <div className="card w-96 glass">
      <figure><img src={cover} alt="cardImage"/></figure>
      <div className="card-body">
        <h2 className="card-title">{coursesName}</h2>
        <p>{}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
      </>
    );
};

export default CourseList;