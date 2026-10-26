import { Link } from "react-router-dom";
import campuses from "../data/campuses";

export default function HomePage() {
  return (
    <section>
      <h1>Metropolia University of Applied Sciences</h1>
      <p>
        Metropolia has {campuses.length} campuses in the Helsinki metropolitan
        area: {campuses.map((c) => c.name).join(", ")}.
      </p>
      <Link className="button" to="/campuses">View campuses</Link>
    </section>
  );
}