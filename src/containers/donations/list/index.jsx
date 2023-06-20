import Donations from "@components/donations-list";
import clsx from "clsx";

const ActivityArea = ({ space, className, data }) => {

    return (
        <div
            className={clsx(
                "rn-activity-area",
                space === 1 && "rn-section-gapTop",
                className
            )}
        >
            <div className="container">
                <div className="row mb--30">
                    <h3 className="title mt--30">Impact Flow</h3>
                </div>
                <div className="row g-6 activity-direction">
                    <div className="col-lg-12 mb_dec--15">
                        {data?.map((donation, index) => (
                            <Donations key={index} data={donation} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivityArea;