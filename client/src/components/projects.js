const Projects = () => {
  return (
    <div className='content' id='projects'>
      <h2>Projects</h2>
      <div className='projects-card'>
        <img src='/images/calendar-view.png' alt='brogress-calendar' className='img-left' />
        <div className='project-detail'>
          <h3>Brogress</h3>
          <h4>Individual Project | 1 Week</h4>
          <h5>React | SASS | Django | PostgreSQL</h5>
          <p>
            10 day solo project with the aim of making a full-stack CRUD app from
            scratch. Designed to let you track what exercises you did by letting you
            add notes to a calendar and add exercises. Used Django and PSQL to
            create my own API, React and React Calendar for the front-end.
          </p>
        </div>

      </div>
      <div className='projects-card'>
        <div className='project-detail'>
          <h3>Seeded</h3>
          <h4>3 Person Team | 1 Week</h4>
          <h5>React | SASS | Express | MongoDB</h5>
          <p>
            10 day project in a 3 person team to create an index website of our
            favorite house plants.Back-end: Mainly focused on creating the user
            model, routing and reverse relationships. Front-end: Handled the
            favorites function, profile page and search/navbar using React and
            Bootstrap.
          </p>
        </div>
        <img src='/images/plants-overview.PNG' alt='plant index overview' />
      </div>

      <div className='projects-card'>
        <img src='/images/pokemon-index.PNG' alt='pokedex overview' className='img-left' />
        <div className='project-detail'>
          <h3>PokeDex</h3>
          <h4>2 Person Team | 2 Week</h4>
          <h5>React | SASS</h5>
          <p>
            2 day pair project that used an external API to display all existing
            Pokemon in an index format. Mainly focused on requests to API and
            sorting through the data.
          </p>
        </div>

      </div>
      <div className='projects-card'>
        <div className='project-detail'>
          <h3>Bug CATastrophe</h3>
          <h4>Individual Project | 1 Week</h4>
          <h5>HTML | CSS | JS</h5>
          <p>
            Solo project to develop a different version of the classic Space Invaders
            game in 1 week, with the aim of learning DOM and interval timings.
          </p>
        </div>
        <img src='/images/game-start.PNG' alt='game start screen' />
      </div>
    </div>
  )
}

export default Projects