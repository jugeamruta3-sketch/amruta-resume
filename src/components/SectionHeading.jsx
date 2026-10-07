function SectionHeading({ eyebrow, children, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{children}</h1>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export default SectionHeading;
