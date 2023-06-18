import SEO from "@components/seo";
import DonationsList from "@containers/donations/list";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "src/layout/wrapper";

// Demo data
import donation from "../../data/donations.json";

export default function Donations({ donations }) {
    return (
        <Wrapper>
            <SEO pageTitle="Donations" />
            <Header />
            <main id="main-content">
                <DonationsList data={donation} />
            </main>
            <Footer />
        </Wrapper>
    );
};

// export const getServerSideProps = wrapper.getServerSideProps(
//     (store) => async () => {
//         await store.dispatch(getDonations());
//         const serializedDonations = store.getState().donation.donations;
//         console.log(serializedDonations);
//         const serializedError = store.getState().donation.error;
//         return {
//             props: {
//                 donations: serializedDonations,
//                 error: serializedError,
//             },
//         };
//     }
// );
