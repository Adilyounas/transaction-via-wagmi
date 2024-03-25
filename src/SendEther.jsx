import React, { useState } from "react";
import { useSendTransaction, useWaitForTransactionReceipt } from "wagmi";
import { parseEther } from "viem";
import "./sendTransaction.css";

function SendTransaction() {
  const [to, setTo] = useState("");
  const [value, setValue] = useState("");
  const {
    data: hash,
    error,
    isPending,
    sendTransaction,
  } = useSendTransaction();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash });

  async function submit(e) {
    e.preventDefault();
    sendTransaction({ to, value: parseEther(value) });
  }

  return (
    <div className="main_Container">
      <form className="sendTransactionForm" onSubmit={submit}>
        <input
          name="address"
          placeholder="0xA0Cf…251e"
          required
          onChange={(e) => setTo(e.target.value)}
        />
        <input
          name="value"
          placeholder="0.05"
          required
          onChange={(e) => setValue(e.target.value)}
        />
        <button disabled={isPending} type="submit">
          {isPending ? "Confirming..." : "Send 💸"}
        </button>
        {hash && <div>Transaction Hash: {hash}</div>}
        {isConfirming && <div>Waiting for confirmation... 🕐</div>}
        {isConfirmed && <div>Transaction confirmed. 🎉</div>}
        {error && <div>Error: {error.message}</div>}
      </form>
    </div>
  );
}

export default SendTransaction;
