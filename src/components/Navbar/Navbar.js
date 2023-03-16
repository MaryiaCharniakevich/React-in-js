function Navbar(props) {
    const element = props
      .map(item => `
         <li class="nav-item">
           <a class="nav-link" id="link-${item}" key="${item}" href="#">${item}</a>></a>
        </li>
      `)
      .join('')
 

    return (
        `
        <nav class="navbar navbar-expand-lg bg-dark">
        <a class="navbar-brand" href="#">Navbar</a>
       
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            ${element}
          </ul>
        </div>
      </nav>
        `
    )
}

export default Navbar