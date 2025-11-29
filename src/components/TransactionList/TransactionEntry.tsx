import type { Entry } from "src/types";
import '@styles/TransactionEntry.scss';
import DeleteIcon from '@assets/icons/delete-icon.svg';
import EditIcon from '@assets/icons/edit-icon.svg'

export default function TransactionEntry({ type, title, category, amount, date }: Entry) {
    function formatAmount(type: string, amount: number) {
        const formattedAmount = new Intl.NumberFormat("en-PH", {
            style: "currency",
            currency: "PHP"
        }).format(amount);
        return type === 'income' ? formattedAmount : `-${formattedAmount}`;
    }

    return (
        <article className="transaction-entry">
            <section className="transaction-entry__section transaction-entry__overview">
                <header className="transaction-entry__section__header">
                    <span>{category}</span>
                    <time dateTime={date}>{new Date(date).toLocaleTimeString('en-PH', {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true,
                    })}</time>
                </header>
                <div className="transaction-entry__section__header">
                    <h3>{title}</h3>
                    <p data-role={`transaction-amount__${type}`} aria-label={`transaction amount: ${type === 'income' ? amount : `-${amount}`}`}>
                        <data value={amount}>
                            {formatAmount(type, amount)}
                        </data>
                    </p>
                </div>
            </section>
            <section className="transaction-entry__section transaction-entry__actions">
                <button
                    className="transaction-entry__button transaction-entry__button--edit"
                    aria-label="Edit transaction"
                >
                    <img src={EditIcon} alt="Edit transaction" aria-hidden="true" />
                </button>
                <button className="transaction-entry__button transaction-entry__button--delete"
                    aria-label="Delete transaction"
                >
                    <img src={DeleteIcon} alt="Delete transaction" aria-hidden="true" />
                </button>
            </section>
        </article>
    )
}