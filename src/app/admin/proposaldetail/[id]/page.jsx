'use client';

import DetailProposalCard from "@/app/components/DetailCollabCard/DetailProposalCard";
import ResponsiveDrawer from "@/app/components/Navigation/ResponsiveDrawer.jsx";
import ProposalStepper from "@/app/components/ProposalStepper/ProposalStepper";


export default function DetailProposalPage() {

    return (
        <>
            <ResponsiveDrawer>
                <DetailProposalCard />
                <ProposalStepper />
            </ResponsiveDrawer>
        </>
    )
}

