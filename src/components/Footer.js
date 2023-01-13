import Form from 'react-bootstrap/Form';

function Footer() {
    return (
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <img className="logo-white" src="../logo-white.png" alt="logo"/>
                    </div>
                    <div class="col-lg-5 address order-lg-last">
                        <Form.Select aria-label="Default select example">
                        <option>Technology Department</option>
                        <option value="1">Technology Department</option>
                        <option value="2">Technology Department</option>
                        <option value="3">Technology Department</option>
                        </Form.Select>
                        <h3>Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat</h3>
                    </div>
                    <div class="col-lg-4 d-flex justify-content-lg-center">
                        <ul>
                            <li><a href="#whoweare">Who We Are</a> </li>
                            <li><a href="#corevalue">Our Values</a> </li>
                            <li>The Perks</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            {/* <div className="address">
                
            </div> */}
            
        </footer>
    )
}
 
export default Footer;