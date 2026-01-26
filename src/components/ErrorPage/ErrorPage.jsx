import { FaExclamationTriangle, FaSearch, FaUndo } from "react-icons/fa";
import { Link } from "react-router-dom";
import './_errorpage.scss';
export default function ErrorPage() {
  return (
    <div className="error-container">
      <div className="error-wrapper-container">

        <FaExclamationTriangle className="error-icon" />


        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you’re looking for doesn’t exist or might have been moved.</p>

        <div className="reasons">
          <h3>Possible reasons:</h3>
          <ul>
            <li><FaSearch className="icon" /> The link might be broken or outdated.</li>
            <li><FaUndo className="icon" /> You may have typed the wrong URL.</li>
            <li><FaExclamationTriangle className="icon" /> The page may have been removed or renamed.</li>
          </ul>
        </div>
         <Link to={'/'} className='home-link'>Back to Home</Link>
      </div>
    </div>
  )
}
