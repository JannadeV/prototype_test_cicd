
import TestDrop from "../components/testDrop.jsx";

export default function PhaseBucket({phaseName, tests, onDragEnter}) {
    return (
        <div className="min-h-50 min-w-30 bg-gray-100 px-4 py-3 m-2 border rounded-2xl shadow-md" onDragEnter={onDragEnter}>
            <h3 className="font-semibold"> {phaseName} </h3>
            <section className="flex flex-row">
                {tests}
            </section>
        </div>
    );
}
