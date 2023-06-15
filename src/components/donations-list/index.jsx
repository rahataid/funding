import clsx from "clsx";
import Image from "next/image";

const Activity = ({ data, className }) => {
    return (
        <div
            className={clsx("single-donation-wrapper", className)}
            style={{ border: "1px solid #cccaca", borderRadius: "15px" }}
        >
            <div className="inner">
                <div className="status">{data.status ?? "Approved"}</div>
                <div className="read-content">
                    <div className="thumbnail">
                        <Image
                            src={
                                data.donorImg
                                    ? data.donor.profileImage
                                    : "/images/portfolio/rahat.jpeg"
                            }
                            alt={data?.donor?.name || "Nft_Profile"}
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="content">
                        <h6>
                            {data?.donor?.name} --{">"} {data?.donee?.name}
                        </h6>
                        <p>
                            {data?.description ||
                                "Donation for wounded soldiers of Ukraine.Donation for wounded soldiers of Ukraine."}
                        </p>
                        <div className="time-maintane">
                            <div className="time data">
                                <i className="feather-clock" />
                                <span>{data.date ?? "12 June 2023"}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="icone-area">
                    <span>${data.amount ?? "50,000"}</span>
                </div>
            </div>
        </div>
    );
};

export default Activity;
