const Filter = () => {
  return (
    <div className='input'>
      <div className='filter'>
        <select name='country' id='country'>
          <option value='all'>Filter By Region</option>
          <option value='africa'>Africa</option>
          <option value='america'>America</option>
          <option value='asia'>Asia</option>
          <option value='europe'>Europe</option>
          <option value='oceania'>Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
