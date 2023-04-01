import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
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
              <button>ログインする。</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
