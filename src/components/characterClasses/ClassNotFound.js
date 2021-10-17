import {useParams } from "react-router-dom";

function ClassNotFoundPage(props) {
    const { unsupported } = useParams();
    
    return (
      <div className="ClassNotFoundPage">
        <h2>Woops!</h2>
        <p>We don't have the {unsupported} class in our database.</p>
      </div>
    );
  }
  
  export default ClassNotFoundPage;