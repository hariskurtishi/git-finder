function About() {
    return (
        <>
        <h1 className='text-6xl mb-4'>Github Finder</h1>
        <p className='mb-4 text-2xl font-light'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquam blanditiis voluptate odio quam assumenda magni! Harum explicabo iste sunt ad necessitatibus voluptatem in a porro ipsam ducimus? Eius, cupiditate?
          <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
            {' '}
            React Front To Back
          </a>{' '}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          <strong>
            <a href='https://traversymedia.com'> Haris Kurtishi</a>
          </strong>
          .
        </p>
        <p className='text-lg text-gray-400'>
          Version <span className='text-white'>1.0.0</span>
        </p>
        <p className='text-lg text-gray-400'>
          Layout By:
          <a className='text-white' href='https://twitter.com/hassibmoddasser'>
          Haris Kurtishi
          </a>
        </p>
      </>
    )
  }
  
  export default About