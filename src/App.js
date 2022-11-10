import './App.css';

function App() {
  return (
    <div>
      <div className='banner'>
        <img src="images/ScpHeading.png" className='scpHeading' alt="" />
        <img src='images/ScpHeadingSmall.png' className='scpHeadingSmall' alt='' />
        <div className='linksDropdown'>
          <h2>FILES</h2>
          <div className='linksDropdown-Content' id='scpLinks'></div>
        </div>
      </div>
      <div id='scpDiv'>
        <div className='landingImgContainer'>
          <img src='images/scp_logo_transparent.png' className='landingImg' alt='' />
        </div>
      </div>
    </div>
  );
}

export default App;