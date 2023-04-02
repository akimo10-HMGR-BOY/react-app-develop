import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import liff from "@line/liff";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [idToken, setIdToken] = useState({ name: "未取得", email: "未取得" });

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onLineLogin = async () => {
    try {
      await liff.init({ liffId: "1657805697-LRX2n17a" });
      if (!liff.isLoggedIn()) {
        liff.login();
      }
      const userProfile = await liff.getProfile();
      const idToken = await liff.getIDToken();
      console.log(idToken);
      console.log(userProfile);
      setIdToken({ name: idToken.name, email: idToken.email });
      const response = await fetch(
        `https://api.line.me/oauth2/v2.1/verify?access_token=${liff.getAccessToken()}`
      );
      const json = await response.json();
      const email = json.email;
      setEmail(email);
      setToken(liff.getAccessToken());
    } catch (error) {
      console.error(error);
      setErrorMessage(error);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Test</h1>
      <div className="card">
        <button onClick={openModal}>LIFFログイン</button>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <button onClick={closeModal}>×</button>
              <p>
                「このアプリでは、LINEログインを使用してメールアドレスを取得します。
                <br />
                取得したメールアドレスは、アプリ内でのみ使用され、第三者に提供されることはありません。
                <br />
                LINEアカウントに登録されているメールアドレスが自動的に使用されます。
                <br />
                ログインすることで、上記の内容に同意したものと見なされます。」
              </p>
              <button onClick={onLineLogin}>ログインする。</button>
            </div>
          </div>
        )}
        <p>{token}</p>
        <p>{email}</p>
        <p>{errorMessage}</p>
        <p>{idToken.name}</p>
        <p>{idToken.email}</p>
      </div>
    </div>
  );
}

export default App;
