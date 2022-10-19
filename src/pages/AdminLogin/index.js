import { Alert } from "reactstrap";
import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { postLoginAdmin } from "../../redux/actions/postAuth";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { status } = useSelector((state) => state);
  const dispatch = useDispatch();

  const redirect = useCallback(
    () => navigate("/admin/car-list", { replace: true }),
    [navigate]
  );

  useEffect(() => {
    const checkIfLogin = () => {
      const token = localStorage.getItem("admin-token");
      if (!token) return;
      redirect();
    };
    checkIfLogin();
  }, [redirect]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault(email, password);

    const payload = {
      email,
      password,
    };

    dispatch(postLoginAdmin(payload));
  };

  const aminToken = localStorage.getItem("admin-token");
  if (aminToken) {
    navigate("/admin/dashboard", { replace: true });
  }

  return (
    <section id="adminLogin">
      <div className="wrapper">
        <div className="col-12 col-md-12 col-lg-8 bg-car"></div>
        <div className="col-12 col-md-12 col-lg-4 form-login">
          <div className="form-login-wrapper">
            <div className="logo"></div>
            <div>
              <h1>Welcome, Admin BCR</h1>
            </div>
            {!!status.loginErrorStatus.message && (
              <Alert color="danger">{status.loginErrorStatus.message}</Alert>
            )}
            <div className="form-input">
              <label>Email</label>
              <input
                type="text"
                placeholder="Contoh: johndee@gmail.com"
                onChange={(e) => handleEmail(e)}
              />
            </div>
            <div className="form-input">
              <label>Password</label>
              <input
                type="password"
                placeholder="6+ karakter"
                onChange={(e) => handlePassword(e)}
              />
            </div>
            <div className="btn-login">
              <button onClick={handleSignIn}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
