import PageLayout from "../components/layout/PageLayout";
import CareerDetailHeader from "../components/sections/CareerDetail/CareerDetailHeader";
import RoleDetails from "../components/sections/CareerDetail/RoleDetails";
import ApplicationForm from "../components/sections/CareerDetail/ApplicationForm";

const CareerDetail = () => {
    return (
        <PageLayout>
            <CareerDetailHeader />
            <div className="bg-white dark:bg-brand-dark transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-0 pb-32 flex flex-col lg:flex-row gap-8 xl:gap-12 items-start justify-center font-inter select-none">
                    <div className="lg:w-[60%] xl:w-[65%] w-full">
                        <RoleDetails />
                    </div>
                    <div className="lg:w-[40%] xl:w-[35%] w-full lg:sticky lg:top-32">
                        <ApplicationForm />
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default CareerDetail