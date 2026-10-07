import ResumeContent from "../components/Resume.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

function ResumePage() {
  return (
    <section className="page-section section-wrap section-rule">
      <ResumeContent SectionHeading={SectionHeading} />
    </section>
  );
}

export default ResumePage;
