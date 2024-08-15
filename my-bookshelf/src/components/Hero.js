import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero position-relative'>
      <div className='hero-wrapper'>
        <h1>
          <em>Organize your books quickly and easily</em>
        </h1>
        <Link className='btn btn-outline-warning' to='/add-book'>
          Add book
        </Link>
      </div>
    </div>
  );
};

export default Hero;
