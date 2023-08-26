
const AboutOption = ({abouts}) => {
    const[cover,title,desc]=abouts;
    return (
        <>
         <div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <img src={cover} alt="" />
    <h2 className="card-title">{title}</h2>
    <p>{desc}</p>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>   
        </>
    );
};

export default AboutOption;