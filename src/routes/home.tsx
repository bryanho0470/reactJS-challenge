import { useNavigate } from "react-router-dom";
import { Title, Wrapper } from "../components/auth-component";
import { auth } from "../firebase";

export default function Home() {
  const navigate = useNavigate();
  const logOut = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <Wrapper>
      <Title>This is my Home!!!!!!!!!!!!!</Title>
      <h1>
        <button onClick={logOut}>Log Out</button>
      </h1>
    </Wrapper>
  );
}
