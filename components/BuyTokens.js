import React from "react";

const styles = {
  intputAmount:
    "w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-transparent mt-6 text-white placeholder:text-white",
  formContainer: "flex items-center",
  select:
    "w-1/2 flex items-center justify-center border border-white rounded-lg p-2 ",
  options:
    'w-1/2" flex items-center justify-center border border-white rounded-lg p-2 bg-black mt-6 text-white placeholder:text-white',

};
function BuyTokens() {
  return (
    <form className={styles.formContainer}>
      <div className="flex h-full w-full flex-col items-center">
        <select className={styles.select}>
          <option
            className={styles.options}
            // value={BTC}
          >
            BTC
          </option>
          <option
            className={styles.options}
            // value={ETH}
          >
            ETH
          </option>
          <option
            className={styles.options}
            // value={SOL}
          >
            SOL
          </option>
          <option
            className={styles.options}
            // value={USDC}
          >
            USDC
          </option>
        </select>
        <input
          placeholder="Amount..."
          type="text"
          className={styles.intputAmount}
        />
        <button
          className={styles.noticeCTA}
          type="submit"
          onClick={() => console.log("mint")}
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default BuyTokens;
