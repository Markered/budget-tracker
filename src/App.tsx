import '@styles/App.css';
import '@styles/form.scss';

interface Transaction {
  type: 'income' | 'expense',
  title: string | null,
  amount: number,
  createdAt: Date,
};

const data: Transaction[] = [];

function App() {
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
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

        <fieldset className="form__fieldset form__fieldset--title">
          <label className="form__label" htmlFor="form__title">Title</label>
          <input className="form__input" type="text" id="form__title" name="title" />
        </fieldset>

        <fieldset className="form__fieldset form__fieldset--amount">
          <label className="form__label" htmlFor="form__amount">Amount</label>
          <input className="form__input" type="number" id="form__amount" name="amount" placeholder='0' />
        </fieldset>

        <button className="form__button" type="submit">Add Transaction</button>
      </form>
    </>
  )
}

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const transactionType = formData.get('type') as 'income' | 'expense';
  const title = formData.get('title') as string | null;
  const amount = formData.get('amount') as string;

  data.push({
    type: transactionType,
    title: title,
    amount: parseFloat(amount),
    createdAt: new Date(),
  });

  form.reset();
}

export default App
