import styles from '../signIn/signIn.css';

export default function signIn() {
    return(
        <main className={styles.main}>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
        <div className="sign-in-container">
        <h2>Sign In</h2>
        <div>
          <label>Email:</label>
          <input type="email" id="email" placeholder="Enter your Email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" id="password" placeholder="Enter your Password" />
        </div>
        <button>Sign In</button>
  
        {/* Add the "Forgot Password" link */}
        <p>
          <a href="#">Forgot Password?</a>
        </p>
  
        {/* Add the "Create a New Account" link */}
        <p>
          Don't have an account? <a href="#">Create a New Account</a>
        </p>
      </div>
      </main>
    )
}