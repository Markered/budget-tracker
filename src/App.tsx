import TransactionList from '@components/TransactionList/TransactionList';
import '@styles/App.css';
import '@styles/form.scss';
import { useEffect, useState } from 'react';

interface Transaction {
  type: 'income' | 'expense',
  amount: number,
  createdAt: string,
};

function App() {
  // const [data, setData] = useState<Transaction[]>([]);

  // function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();

  //   const form = e.currentTarget;
  //   const formData = new FormData(form);

  //   const transactionType = formData.get('type') as 'income' | 'expense';
  //   const amount = formData.get('amount') as string;

  //   setData(prev => [...prev, {
  //     type: transactionType,
  //     amount: parseFloat(amount),
  //     createdAt: new Date().toISOString(),
  //   }])

  //   form.reset();
  // }

  return (
    <>
      {/* <form className="form" onSubmit={handleSubmit}>
        <fieldset className="form__fieldset form__fieldset--type">
          <label className="form__label" htmlFor="form__type-income">
            <input className="form__input" type="radio" id="form__type-income" name="type" value={"income"} required />
            Income
          </label>
          <label className="form__label" htmlFor="form__type-expense">
            <input className="form__input" type="radio" id="form__type-expense" name="type" value={"expense"} />
            Expense
          </label>
        </fieldset>

        <fieldset className="form__fieldset form__fieldset--amount">
          <input className="form__input" type="number" min={0} id="form__amount" name="amount" placeholder='0' />
        </fieldset>

        <button className="form__button" type='button'>Cancel</button>
        <button className="form__button" type="submit">Add Transaction</button>
      </form> */}
      <TransactionList />
    </>
  )
}

export default App
