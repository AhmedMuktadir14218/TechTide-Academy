
const TeamList = ({teams}) => {
  const {cover,name,work}=teams;
    return (
        <>
         <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={cover} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{work}</p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>   
        </>
    );
};

export default TeamList;