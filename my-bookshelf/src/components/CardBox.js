const CardBox = ({ children }) => {
  return (
    <div className='container' style={{ width: 'min(71.25rem, 85vw)' }}>
      <div className='row justify-content-center gy-5'>{children}</div>
    </div>
  );
};

export default CardBox;
