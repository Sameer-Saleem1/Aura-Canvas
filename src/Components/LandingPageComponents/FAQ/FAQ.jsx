import "./FAQ.css";
import Accordion from "react-bootstrap/Accordion";

function FAQ() {
  return (
    <div className="FAQ-container">
      <div className="FAQ-heading">
        <h2>FAQ</h2>
      </div>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5 className="qs">What services does Aura Canvas offer?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <h6 className="ans">
              Aura Canvas provides celebrities, influencers, athletes, and more
              icons with opportunities to realize their entrepreneurial dreams
              through collaborations and partnerships in clothing, cosmetics,
              brand merchandising, and data-driven strategies.
            </h6>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5 className="qs"> How can I collaborate with Aura Canvas?</h5>
          </Accordion.Header>
          <Accordion.Body>
            <h6 className="ans">
              You can collaborate with Aura Canvas by reaching out to us through
              our contact form on the website or by emailing our team directly.
            </h6>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h5 className="qs">
              Can individuals who are not celebrities or influencers work with
              Aura Canvas?
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            <h6 className="ans">
              Yes, Aura Canvas is open to working with individuals who have a
              passion for entrepreneurship and are looking to expand their brand
              through collaborations and partnerships.
            </h6>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h5 className="qs">
              What sets Aura Canvas apart from other similar platforms?
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            <h6 className="ans">
              Aura Canvas stands out by offering personalized support and
              tailored strategies to help clients succeed in their
              entrepreneurial ventures. We prioritize building long-term
              relationships and fostering growth for our partners.
            </h6>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h5 className="qs">
              How does Aura Canvas help clients with data-driven strategies?
            </h5>
          </Accordion.Header>
          <Accordion.Body>
            <h6 className="ans">
              Aura Canvas utilizes data analytics and market research to provide
              insights that help clients make informed decisions about their
              business ventures. We offer guidance on leveraging data to
              optimize performance and drive growth.
            </h6>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FAQ;
