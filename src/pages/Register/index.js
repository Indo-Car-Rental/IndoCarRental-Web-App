import "./style.scss";
import { FormGroup, Label, Input, Button } from "reactstrap";

const Register = () => {
    return (  
        <div className="register-wrap">
            <div className="row">
                <div className="col-lg-6">
                    <div className="left">
                        <div class="form-left-wrap">
                            <h4 className="mb-5">Sign Up</h4>
                            <FormGroup>
                                <Label for="Email">
                                    Email :
                                </Label>
                                <Input 
                                    type="email" 
                                    placeholder='example: youremail@mail.com'
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">
                                    Password :
                                </Label>
                                <Input 
                                    type="password" 
                                    placeholder='type your password'
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Button block className="mt-5 btn-cta-blue">Register</Button>
                            </FormGroup>
                            <p>Already have an account? <a href="#">Sign In here</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="right">
                        <h1>Indo Car Rental</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Register;