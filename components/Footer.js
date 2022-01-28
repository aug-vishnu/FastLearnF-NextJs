import React from "react";

function Footer({ children }) {
  return (
    <div>
      <section className="mt-5 pt-5 footer">
        {children}
        <div class="container">
          <p class="text-muted mb-5">
            Unlimited access to 7,000+ world-class courses, hands-on projects,
            and job-ready certificate programs, for one all-inclusive
            subscription price
          </p>
          <div class="row">
            <div class="col-sm-6 col-lg-4 mb-3">
              <h6>Start or advance your career</h6>
              <p class="text-muted">
                CBSE <br></br>
                ICSE<br></br>
                CAT<br></br>
                IAS<br></br>
                JEE<br></br>
                NEET
              </p>
            </div>
            <div class="col-sm-6 col-lg-4 mb-3">
              <h6>Browse popular topics</h6>
              <p class="text-muted">
                CAT Exam<br></br>
                GATE Exam<br></br>
                IAS Exam<br></br>
                UPSC Exam<br></br>
                UPSC Syllabus<br></br>
                UPSC 2022<br></br>
                Bank Exam<br></br>
              </p>
            </div>
            <div class="col-sm-6 col-lg-4 mb-3">
              <h6>Popular courses and articles</h6>
              <p class="text-muted">
                FastLearn'S Answer<br></br>
                DSSL<br></br>
                Home Tuition<br></br>
                All Products<br></br>
                Calculators<br></br>
                Formulas
              </p>
            </div>
            <div class="col-sm-6 col-lg-4 mb-3">
              <h6>Community</h6>
              <p class="text-muted">
                Maharashtra<br></br>
                Gujarat<br></br>
                Tamil Nadu<br></br>
                Karnataka<br></br>
                Kerala<br></br>
                Andhra Pradesh<br></br>
              </p>
            </div>
            <div class="col-sm-6 col-lg-4 mb-3">
              <h6>Tools</h6>
              <p class="text-muted">
                FastLearn'S Answer<br></br>
                DSSL<br></br>
                Home Tuition<br></br>
                All Products<br></br>
                Calculators<br></br>
                Formulas.
              </p>
            </div>
            <div class="col-sm-6 col-lg-4 mb-3">
              <h6>Company</h6>
              <p class="text-muted">
                Our team <br></br> Privacy Policy <br></br>About Us<br></br>
                Contact Us<br></br>
                Investors<br></br>
                Careers<br></br>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
