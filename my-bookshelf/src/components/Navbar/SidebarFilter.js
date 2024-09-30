import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const SidebarFilter = ({
  genreItems,
  roomItems,
  tempAlpha,
  tempCheckedGenre,
  tempCheckedRoom,
  tempCheckedStar,
  onAlphaOrder,
  onGenreChange,
  onRoomChange,
  onStarChange,
  onApplyFilters,
  onClearFilters,
}) => {
  const [collapseGenre, setCollapseGenre] = useState([]);
  const [collapseRoom, setCollapseRoom] = useState([]);
  const starNum = 5;
  const isChecked = (el, tempChecked) => tempChecked.includes(el);

  function addCollapseGenre() {
    if (collapseGenre.length === 0)
      setCollapseGenre((prevCollapse) => [
        ...prevCollapse,
        '#collapseOne',
        'collapseOne',
      ]);
    else setCollapseGenre([]);
  }

  function addCollapseRoom() {
    if (collapseRoom.length === 0)
      setCollapseRoom((prevCollapse) => [
        ...prevCollapse,
        '#collapseTwo',
        'collapseTwo',
      ]);
    else setCollapseRoom([]);
  }

  function handleClearAll() {
    onClearFilters();
    setCollapseGenre([]);
    setCollapseRoom([]);
  }

  console.log(collapseGenre, collapseRoom);

  return (
    <>
      <div
        className='offcanvas offcanvas-end'
        tabIndex='-1'
        id='offcanvasRight'
        aria-labelledby='offcanvasRightLabel'
        style={{ maxWidth: '70vw' }}
      >
        <div className='offcanvas-header'>
          <h4 className='offcanvas-title' id='offcanvasRightLabel'>
            Filters
          </h4>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <div className='offcanvas-body'>
          {/* Alphabetical */}
          <div className='vstack gap-3'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                value={tempAlpha}
                id='alphabetical'
                checked={tempAlpha}
                onChange={onAlphaOrder}
              />
              <label className='form-check-label' htmlFor='alphabetical'>
                Alphabetical order
              </label>
            </div>
            {/* Genre */}
            <div className='accordion' id='accordion'>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='genre'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='false'
                    aria-controls='collapseOne'
                    onClick={addCollapseGenre}
                  >
                    Genre
                  </button>
                </h2>
                <div
                  id='collapseOne'
                  className='accordion-collapse collapse'
                  aria-labelledby='genre'
                  data-bs-parent='#accordion'
                >
                  <div className='accordion-body'>
                    <div
                      className='vstack gap-2 overflow-auto'
                      style={{ height: '10rem' }}
                    >
                      <div>
                        {genreItems.map((item, i) => (
                          <div className='form-check' key={i + item}>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value={item}
                              id={item}
                              checked={isChecked(item, tempCheckedGenre)}
                              onChange={onGenreChange}
                            />
                            <label className='form-check-label' htmlFor={item}>
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Room */}
            <div className='accordion' id='accordion-room'>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='room'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseTwo'
                    aria-expanded='false'
                    aria-controls='collapseTwo'
                    onClick={addCollapseRoom}
                  >
                    Where am I?
                  </button>
                </h2>
                <div
                  id='collapseTwo'
                  className='accordion-collapse collapse'
                  aria-labelledby='room'
                  data-bs-parent='#accordion-room'
                >
                  <div className='accordion-body'>
                    <div className='vstack gap-2 overflow-auto'>
                      <div>
                        {roomItems.map((item, i) => (
                          <div className='form-check' key={i + item}>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value={item}
                              id={item}
                              checked={isChecked(item, tempCheckedRoom)}
                              onChange={onRoomChange}
                            />
                            <label className='form-check-label' htmlFor={item}>
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Star Rating */}
            {Array.from({ length: starNum }, (_, i) => {
              const starValue = starNum - i;
              const isStarChecked = tempCheckedStar.includes(
                starValue.toString()
              );

              return (
                <div
                  key={starValue}
                  className='form-check d-flex align-items-center'
                >
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value={starValue}
                    id={`${starValue}-star`}
                    checked={isStarChecked}
                    onChange={onStarChange}
                  />
                  <label
                    className='form-check-label ps-2'
                    htmlFor={`${starValue}-star`}
                  >
                    {Array.from({ length: starValue }, (_, i) => (
                      <FaStar key={i} style={{ color: '#ffc107' }} />
                    ))}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        {/* Filter btns */}
        <div className='d-grid gap-2 col-6 mx-auto my-4'>
          <button
            onClick={handleClearAll}
            className='btn btn-outline-warning outlined-btns'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target={`${collapseGenre[0]}, ${collapseRoom[0]}`}
            aria-controls={`${collapseGenre[1]}, ${collapseRoom[1]}`}
            aria-expanded='false'
          >
            Clear
          </button>
          <button
            onClick={onApplyFilters}
            className='btn full-btns'
            type='button'
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default SidebarFilter;
