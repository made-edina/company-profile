import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function WhoWeAre() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleNext = () => {
    if (index < 2) {
      setIndex(index + 1);
    } 
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    } 
    
  };

  return (
    <section id="whoweare">
    <Carousel activeIndex={index} onSelect={handleSelect} controls={false} interval={null} indicators={false}>
      <Carousel.Item>
        <Carousel.Caption>
          <h1>Who We Are</h1>
          <h3 className="who-title">Technology Company</h3>
          <p>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h1>What We Do</h1>
          <h3 className="who-title">Professional Brand Management</h3>
          <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h1>How We Do</h1>
          <h3 className="who-title">Strategize, Design, Collaborate</h3>
          <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur..</p>

        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    <Container>
      <Row>
        <Col className="d-flex align-items-center">
          <h2>0{index + 1}<span style={{color:"#C0C0C0"}}> / </span><span style={{color:"#C0C0C0", fontSize:"16px"}}>03</span></h2>
        </Col>
        <Col className="d-flex justify-content-end">
          <button className="next-button" onClick={handlePrev}><img src="../images/button/prev.png" alt="prev"/></button>
          <button className="next-button" onClick={handleNext}><img src="../images/button/next.png" alt="next"/></button>
        </Col>
      </Row>
    </Container>
    </section>
  );
}

export default WhoWeAre;