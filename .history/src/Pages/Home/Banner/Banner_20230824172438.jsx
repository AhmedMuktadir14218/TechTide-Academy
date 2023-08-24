
import homebgimg from "../../../assets/hero-img1.png";
// import './Banner.css';
// import phone from '../../images/phone-28-24.png';
import { Link } from 'react-router-dom';
const Banner = () => {



  return (

<>
<section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise' />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
</>
  );
};

export default Banner;