import styles from '../signUpConsultant/signUpConsultant.css';

export default function signUpConsultant() {
    return(

    <main className={styles.main}>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
        <div class="container">
        <div class="left-column">
          <div class="signup-container">
          <h1 className="heading">Become an Advitify Consultant</h1>
            <div class="form-group">
              <label for="firstName">First Name:</label>
              <input type="text" id="firstName" placeholder="Enter your First Name"/>
            </div>
            <div class="form-group">
              <label for="lastName">Last Name:</label>
              <input type="text" id="lastName" placeholder="Enter your Last Name"/>
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" placeholder="Enter your Email"/>
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" id="password" placeholder="Enter your Password"/>
            </div>
            <div class="form-group">
              <label for="confirmPassword">Confirm Password:</label>
              <input type="password" id="confirmPassword" placeholder="Confirm your Password"/>
            </div>
            <div className="form-group">
              <label htmlFor="documents">Attach Documents/Certifications:</label>
              <div className="input-group">
                <div className="custom-file">
                  <input type="file" className="custom-file-input" id="documents" />
                  <label className="custom-file-label" htmlFor="documents">
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="experience">Experience:</label>
              <textarea
                id="experience"
                placeholder="Enter your experience details here..."
                rows="6"
              ></textarea>
            </div>
            <button class="signup-button">Sign Up</button>
          </div>
        </div>
        <div class="right-column">
        <img src='/contract_image.png' alt="Image Description" />
        </div>
      </div>
    </main>
    )
}