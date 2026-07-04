import PageLayout from "../components/layout/PageLayout"
import Error404Img from "../assets/icons/error.svg"
import Button from "../components/common/Button"

const Error = () => {
    return (
        <PageLayout>
            <div className="px-4 md:px-6 mb-28 md:mb-36">
                <div className="flex items-center justify-center pt-40 md:pt-56 pb-14"><img src={Error404Img} alt="404" /></div>
                <h1 className="text-2xl md:text-4xl font-manrope font-semibold text-center mb-[18px]">Opps! Looks like you’re lost in the code.</h1>
                <p className="text-sm md:text-base text-center mb-[30px]">The page you're looking for doesn’t exist, was moved or never made it to production.</p>
                <div className="flex items-center justify-center">
                    <Button to="/">Back to Home</Button>
                </div>
            </div>
        </PageLayout>
    )
}
export default Error