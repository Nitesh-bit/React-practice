/* This is a challenge given by Jonas Schmedtmann in his React course*/

import { useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: true,
  acountClosed: false,
};

const depositAmount = 150;
const withdrawAmount = 50;
const loanAmount = 5000;

function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return { ...state, balance: 500, isActive: !state.isActive };
    case "deposit":
      return { ...state, balance: state.balance + depositAmount };
    case "withdraw":
      return {
        ...state,
        balance:
          state.balance - withdrawAmount >= 200
            ? state.balance - withdrawAmount
            : state.balance,
      };
    case "takeLoan":
      return {
        ...state,
        balance: state.balance + loanAmount,
        loan: loanAmount,
      };
    case "payLoan":
      return {
        ...state,
        balance:
          state.balance - loanAmount >= 200
            ? state.balance - loanAmount
            : state.balance,
        loan: state.balance - loanAmount >= 200 ? 0 : state.loan,
      };
    case "closeAccount": {
      {
        !state.acountClosed &&
          alert(
            `Account closed! You have withdrawn your balance i.e. ${state.balance} from bank. Thank you!`
          );
      }
      return initialState;
    }
    default:
      throw new Error("Unknow error!!");
  }
}

export default function UseReducerBankAccount() {
  const [{ balance, loan, isActive, acountClosed }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="App">
      <h1>
        useReducer Bank Account{" "}
        <span style={{ fontSize: "20px" }}>
          (Bank New Policy:{" "}
          <span style={{ fontSize: "15px" }}>
            "Please maintain min 200 as balance"
          </span>
          )
        </span>
      </h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button
          onClick={() => {
            dispatch({ type: "openAccount" });
          }}
          disabled={!isActive}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "deposit" });
          }}
          disabled={isActive}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            balance <= 200
              ? alert(
                  "Sorry you can't withdraw much. Insufficient Balance. Please follow Bank policy!"
                )
              : dispatch({ type: "withdraw" });
          }}
          disabled={isActive}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            loan > 0
              ? alert("You already have a loan.")
              : dispatch({ type: "takeLoan" });
          }}
          disabled={isActive}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            balance - loan < 200
              ? alert("You can't pay loan. Please follow Bank policy!")
              : dispatch({ type: "payLoan" });
          }}
          disabled={isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            loan > 0
              ? alert("Please pay your loan.")
              : dispatch({ type: "closeAccount" });
          }}
          disabled={isActive}
        >
          Close account
        </button>
      </p>
    </div>
  );
}
