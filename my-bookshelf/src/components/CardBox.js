import { Link } from 'react-router-dom';

const CardBox = ({ children }) => {
  return (
    <div className='container' style={{ width: 'min(71.25rem, 85vw)' }}>
      <Link to='/book'>
        <div className='row justify-content-center gy-5'>{children}</div>
      </Link>
    </div>
  );
};

export default CardBox;
