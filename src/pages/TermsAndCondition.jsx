import PageLayout from "../components/layout/PageLayout"
import PageHeader from "../components/common/PageHeader"
import TermsAndConditionDetails from "../components/sections/TermsAndCondition/TermsAndConditionDetails"

const TermsAndCondition = () => {
    return (
        <PageLayout>
            <PageHeader
                title="Terms and Condition"
                breadcrumbs={["Home", "Terms and Condition"]}
                className="relative pt-36 pb-16 md:pt-48 md:pb-16 mb-14 md:mb-36"
            />
            <TermsAndConditionDetails />
        </PageLayout>
    )
}
export default TermsAndCondition