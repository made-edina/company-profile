import Carousel from 'react-bootstrap/Carousel';

function OurSpeciality() {
  return (
    <section id="our-speciality" className="our-speciality">
        <div className="container px-lg-5 speciality-desc">
            <h2>
                Our Speciality
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
            </p>
            <Carousel id="our-speciality" interval={null}>
                <Carousel.Item>
                    <Carousel.Caption>
                    <img
                    className="speciality-img d-block"
                    src="../images/acc1.png"
                    alt="First slide"
                    />
                    <h3 className="spec-title">Accesories</h3>
                    <p className="spec-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                    <img
                    className="speciality-img d-block"
                    src="../images/acc2.png"
                    alt="Second slide"
                    />
                    <h3 className="spec-title">Speed Improvement</h3>
                    <p className="spec-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                    <img
                    className="speciality-img d-block "
                    src="../images/acc3.png"
                    alt="Third slide"
                    />
                    <h3 className="spec-title">Exhaust</h3>
                    <p className="spec-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </section>
    
  );
}

export default OurSpeciality;