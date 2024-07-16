import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/">
        Movies
      </Link>
      <Link className="link" to="/">
        TV Series
      </Link>
    </div>
  );
}

export default Header;
