import type { Entry } from "src/types";

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
            <header className="transaction-entry__header">
                <span>{category}</span>
                <time dateTime={date}>{new Date(date).toLocaleTimeString('en-PH', {
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true,
                })}</time>
            </header>
            <div className="transaction-entry__body">
                <h3>{title}</h3>
                <p aria-label={`transaction amount: ${type === 'income' ? amount : `-${amount}`}`}>
                    <data value={amount}>
                        {formatAmount(type, amount)}
                    </data>
                </p>
            </div>
        </article>
    )
}