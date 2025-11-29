import '@styles/TransactionEntrySkeleton.scss'

export default function TransactionEntrySkeleton() {
    return (
        <article className="skelton__transaction-entry">
            <section>
                <header>
                    <span className="skeleton skeleton-text"></span>
                    <span className="skeleton skeleton-text"></span>
                </header>
                <div>
                    <span className="skeleton skeleton-text"></span>
                    <span className="skeleton skeleton-text"></span>
                </div>
            </section>
        </article>
    );
}
