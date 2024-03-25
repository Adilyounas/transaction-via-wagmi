import { useConnect, useDisconnect, useAccountEffect } from "wagmi";
import { useEffect, useState } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const navigate = useNavigate();

  const [status, setStatus] = useState(false);

  useAccountEffect({
    onConnect(data) {
      console.log("Connected!", data);
      setStatus(true);
    },
    onDisconnect() {
      console.log("Disconnected!");
      setStatus(false);
    },
  });

  useEffect(() => {
    if (status === true) {
      navigate("/sendingTransactions");
      console.log(status);
    }
  }, [navigate, status]);

  return (
    <>
      <div className="mainHomeContainer">
        <div className="btnContainer">
          {connectors.map((connector) => (
            <button key={connector.id} onClick={() => connect({ connector })}>
              {connector.name}
            </button>
          ))}

          {status && <button onClick={() => disconnect()}>Disconnect</button>}
        </div>
      </div>
    </>
  );
}

export default Home;
