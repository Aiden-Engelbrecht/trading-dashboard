export default function MarketCard({ title, value }) {
    return (
        <div className="bg-slate-800 rounded-xl p-6 shadow-md">
            <h2 className="text-xl">{title}</h2>

            <p className="text-3xl font-bold mt-4">
                {value}
            </p>
        </div>
    );
}