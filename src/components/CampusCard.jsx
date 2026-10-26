export default function CampusCard({ campus, isSelected, onSelect }) {
  return (
    <button
      className={isSelected ? "card selected" : "card"}
      onClick={() => onSelect(campus.id)}
    >
      <h3>{campus.name}</h3>
      <p>{campus.city}</p>
    </button>
  );
}