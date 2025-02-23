import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string, ref } from "yup";

const signupValidationSchema = object({
  name: string().required("Name is required"),
  surname: string().required("Surname is required"),
  email: string().email("Email is invalid").required("Email is required"),
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  repeatpassword: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Repeat password is required"),
});
const SignUp = () => {
  return (
    // <!----------------------- Main Container -------------------------->
    <div className="container d-flex justify-content-center align-items-center min-vh-100 p-3 ">
      {/* <!----------------------- SignUp Container --------------------------> */}
      <SignUpContainer className="row border rounded-5 p-1 shadow box-areas">
        {/* <!--------------------------- Left Box -----------------------------> */}
        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
          <div className="featured-image  mt-3 mb-3">
            <img src="/ff-5.jpg" className="img-fluid " />
          </div>
          {/* <p className="text-white fs-2"  >Be Verified</p>
          <small className="text-white text-wrap text-center"  >Join experienced Designers on this platform.</small> */}
        </div>
        {/* <!-------------------- ------ Right Box ----------------------------> */}
        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <Formik
              initialValues={{
                name: "",
                surname: "",
                email: "",
                password: "",
                repeatpassword: "",
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={signupValidationSchema}
            >
              <Form>
                <div className="header-text mb-2 mt-4">
                  <h2>Sign Up</h2>
                </div>
                <div className="input-group mb-33">
                  <Field name="name">
                    {({ field, meta }) => (
                      <FormControl className='col' isInvalid={!!(meta.error && meta.touched)}>
                        <input
                          {...field}
                          name="name"
                          placeholder="FirstName"
                          type="text"
                          className="form-control form-control-lg form-control-sm bg-light fs-6 input"
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </div>
                <div className="input-group mb-3">
                  <Field name="surname">
                    {({ field, meta }) => (
                      <FormControl className='col' isInvalid={!!(meta.error && meta.touched)}>
                        <input
                          {...field}
                          name="surname"
                          type="text"
                          className="form-control form-control-lg bg-light fs-6 input"
                          placeholder="LastName"
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </div>
                <div className="input-group mb-3">
                  <Field name="email">
                    {({ field, meta }) => (
                      <FormControl className='col' isInvalid={!!(meta.error && meta.touched)}>
                        <input
                          {...field}
                          type="email"
                          name="email"
                          class="form-control form-control-lg bg-light fs-6 input"
                          placeholder="Email address"
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </div>
                <div className="input-group mb-3">
                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl className='col' isInvalid={!!(meta.error && meta.touched)}>
                        <input
                          {...field}
                          name="password"
                          type="password"
                          className="form-control form-control-lg bg-light fs-6 input"
                          placeholder="Enter your password...."
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </div>
                <div className="input-group mb-3">
                  <Field name="repeatpassword">
                    {({ field, meta }) => (
                      <FormControl className='col' isInvalid={!!(meta.error && meta.touched)}>
                        <input
                          {...field}
                          name="repeatpassword"
                          type="password"
                          className="form-control form-control-lg bg-light fs-6 input"
                          placeholder="RepeatPassword"
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </div>
                <div className="input-group mb-3 d-flex justify-content-between">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="formCheck"
                    />
                    <label
                      for="formCheck"
                      className="form-check-label text-secondary"
                    >
                      <small>Remember Me</small>
                    </label>
                  </div>
                </div>
                <div className="input-group mb-2 ">
                  <button className="btn w-100 fs-7">Sign Up</button>
                </div>
                <div className="row mb-3">
                  <small>
                    Already have account?{" "}
                    <StyledLink to="/signin">Sign In</StyledLink>
                  </small>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </SignUpContainer>
    </div>
  );
};
export default SignUp;
const SignUpContainer = styled.div`
 
  img {
    border-radius: 25px !important;
    height: 590px;
  }
  .left-box { 
    border-radius: 25px;
  }
  .right-box { 
     align-items: center;
    h2 {
      text-align: center;
    } 
    border-radius: 25px;
    input:focus {
      border: rgb(83, 39, 217) !important;
    }
    input:checked {
      background-color: rgb(83, 39, 217) !important;
      border-color: rgb(83, 39, 217) !important;
    }
    .input {
      margin-top: 10px;
      background-color: transparent;
      border: 1px solid rgb(83, 39, 217);
      color: rgb(83, 39, 217);
      border-radius: 5px;
      height: 40px; 
      font-size: 16px;
      padding: 0 10px;
      &::placeholder {
        color: #45346d;
      }
      &:focus {
        border: 1px solid rgb(83, 39, 217);
        outline: none;
      }
    }
  }
  button {
    background-color: rgb(83, 39, 217);
    color: #ecc297; 
    &:hover {
      background-color: rgb(83, 39, 217);
      color: #ecc297;
      outline: none;
    }
  }
  small {
    font-size: 1rem;
  }
 
  /*------------ For small screens------------*/
 @media only screen and (max-width: 599px) {
 
    .left-box {
      height: 100px;
      overflow: hidden;
      margin-top: 10px;
    }
     
  }  

` 
const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(60, 7, 219); 
  font-size: 1rem; 
  color: rgb(83, 39, 219);
  &:hover {
    color: rgb(60, 7, 219);
  }
`
const FormControl = styled.div` 
  width: 300px;  
`;
const FormErrorMessage = styled.span`
  color: red;
  font-size: small;
`;
