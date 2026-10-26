import { useState } from "react";
import campuses from "../data/campuses";
import CampusCard from "../components/CampusCard";

export default function Campuses() {
  const [selectedId, setSelectedId] = useState(campuses[0].id);
  const selected = campuses.find((c) => c.id === selectedId);

  return (
    <section>
      <h1>Campuses</h1>

      <div className="card-list">
        {campuses.map((campus) => (
          <CampusCard
            key={campus.id}
            campus={campus}
            isSelected={campus.id === selectedId}
            onSelect={setSelectedId}
          />
        ))}
      </div>

      <article className="details">
        <h2>{selected.name}, {selected.city}</h2>
        <p>{selected.description}</p>
        <p><strong>Address:</strong> {selected.address}</p>
        <p><strong>Fields:</strong> {selected.fields.join(", ")}</p>
      </article>
    </section>
  );
}