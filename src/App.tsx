import React from 'react';
import {useWalletConnect} from "@cityofzion/wallet-connect-sdk-react";

function App() {
  const walletConnectCtx = useWalletConnect()

  const connect = async () => {
    await walletConnectCtx.connect()
  }

  return (
    <div>
      {walletConnectCtx.loadingSession
        ? "Loading Session"
        : !walletConnectCtx.session ? <button
            onClick={connect}>Connect your Wallet</button>
        : "Connected"
      }
    </div>
  );
}

export default App;
