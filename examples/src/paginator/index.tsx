import { FC, useState } from "react";

import Paginator from "@bodynarf/react.components/components/paginator";
import { ElementPosition, ElementSize, usePagination } from "@bodynarf/react.components";

const ITEMS_100 = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

const PaginatorExamples: FC = () => {
    const [page1, setPage1] = useState(1);
    const [page2, setPage2] = useState(1);
    const [page3, setPage3] = useState(1);
    const [page4, setPage4] = useState(1);

    const [state, paginate] = usePagination(ITEMS_100.length, 10);
    const currentItems = paginate(ITEMS_100) as string[];

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Paginator</h1>

                {/* Basic */}
                <div className="box">
                    <p className="subtitle is-5">Basic</p>
                    <Paginator
                        count={50}
                        currentPage={page1}
                        onPageChange={setPage1}
                    />
                    <p className="help mt-2">Current page: <strong>{page1}</strong></p>
                </div>

                {/* With usePagination hook */}
                <div className="box">
                    <p className="subtitle is-5">With usePagination Hook (10 items/page)</p>
                    <div className="content mb-3">
                        <ul>
                            {currentItems.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                    <Paginator count={state.pagesCount} currentPage={state.currentPage} onPageChange={state.onPageChange} />
                </div>

                {/* Positions */}
                <div className="box">
                    <p className="subtitle is-5">Positions</p>
                    <p className="help mb-2">Left</p>
                    <Paginator count={20} currentPage={page2} position={ElementPosition.Left}   onPageChange={setPage2} />
                    <p className="help mt-3 mb-2">Center</p>
                    <Paginator count={20} currentPage={page2} position={ElementPosition.Center} onPageChange={setPage2} />
                    <p className="help mt-3 mb-2">Right</p>
                    <Paginator count={20} currentPage={page2} position={ElementPosition.Right}  onPageChange={setPage2} />
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    {[ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large].map(size => (
                        <div key={size} className="mb-3">
                            <p className="help mb-1">{size}</p>
                            <Paginator count={10} currentPage={1} size={size} onPageChange={() => {}} />
                        </div>
                    ))}
                </div>

                {/* Rounded */}
                <div className="box">
                    <p className="subtitle is-5">Rounded</p>
                    <Paginator count={15} currentPage={page3} rounded onPageChange={setPage3} />
                </div>

                {/* Near pages count */}
                <div className="box">
                    <p className="subtitle is-5">Near Pages Count</p>
                    <p className="help mb-2"><code>nearPagesCount=1</code> - shows only 1 page on each side of current</p>
                    <Paginator count={20} currentPage={page4} nearPagesCount={1} onPageChange={setPage4} />
                    <p className="help mt-3 mb-2"><code>nearPagesCount=3</code> - shows 3 pages on each side</p>
                    <Paginator count={20} currentPage={page4} nearPagesCount={3} onPageChange={setPage4} />
                </div>
            </div>
        </section>
    );
};

export default PaginatorExamples;
