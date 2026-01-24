export function loginInit() {}

export default function login() {
  return `
  <style>
  .login-wrapper {
    min-height: 100%;
    display: grid;
    place-items: center;
  }
  h2 {
    color: var(--heading-color);
    text-align: center;
    font-size: 32px;
    margin-top: 30px;
  }
  .login {
    background-color: var(--bg-color);
    width: 400px;
    margin: auto;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
  }
  form {
    display: flex;
    flex-direction:column;
    padding: 40px;
    gap: 20px;
  }
  .input-field {
    background-color: var(--secondary-bg-color);
    color: var(--heading-color);
      border: 1px solid transparent;
    padding: 15px;
    border-radius: 15px;
  }
  .input-field::placeholder {
    color: var(--text-color);
  }
  input:focus {
    outline: none;
    border-color: var(--primary-color);             
    box-shadow: 0 0 0 3px rgba(199, 227, 71, 0.25); 
  }
  .submit-btn {
    background-color: var(--primary-color);
    padding: 15px 0;
    border-radius: 15px; 
    border: none;
    font-size: 17px;
    font-weight: 600;
    margin-top: 5px;
    cursor: pointer;
  }
  form .suggest {
    text-align: center;
  }
  form .suggest a {
    color: var(--primary-color);
  }
  </style>
  <div class="login-wrapper">
    <div class="login">
    <h2>Welcome Back!</h2>
    <form action="" method="post">
        <input class="input-field" type="email" placeholder="Enter Your Email" />
        <input class="input-field" type="password" placeholder="Enter Your Password" />
        <input class="submit-btn" type="submit" value="Login" />
        <div class="suggest">
          <p>Don't have an account?</p>
          <a href="/signup">Signup Instead</a>
        </div>
    </form>
    </div>
  </div>`;
}
