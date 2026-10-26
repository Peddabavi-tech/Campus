import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <h1>Page not found</h1>
      <p>That address doesn't exist.</p>
      <Link className="button" to="/">Back to home</Link>
    </section>
  );
}