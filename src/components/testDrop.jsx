

export default function TestDrop({ testName }) {
    return (
        <div className="inline-block bg-white px-4 py-3 m-2 border rounded-2xl shadow-md">
            <h3 className="text-sm">{ testName }</h3>
        </div>
    );
}