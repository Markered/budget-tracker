export default function TransactionListDate({ date }: { date: string }) {
    return (
        <time className="TransactionList__date" dateTime={date}>{new Date(date).toLocaleDateString('en-PH', {
            month: 'long',
            day: 'numeric'
        })}</time>
    )
}