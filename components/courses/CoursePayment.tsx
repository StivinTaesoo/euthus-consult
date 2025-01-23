import Link from "next/link";

function CoursePayment() {
    return (
        <div className="w-full  max-w-[700px] mx-auto p-10 text-center md:text-left">
            <h1 className="uppercase font-bold text-2xl text-[#010191] text-center md:text-3xl">
                payment information
            </h1>
            <p className="text-[18px] mt-4">
                All payment should be made to the account details provided below
            </p>
            <div className="text-[18px] flex flex-col gap-3 mt-6">
                <h2 className="font-bold uppercase text-[#5e5d5d]">
                    Account Details
                </h2>
                <div className="flex gap-x-6 flex-col md:flex-row">
                    <p className="font-semibold">Account Number:</p>
                    <p className="uppercase">Akor-Ikpam Abraham</p>
                </div>
                <div className="flex gap-x-6 flex-col md:flex-row">
                    <p className="font-semibold">Account Name:</p>
                    <p>xxxx xxx xxx</p>
                </div>
                <div className="flex gap-x-6 flex-col md:flex-row">
                    <p className="font-semibold">Bank Name:</p>
                    <p className="uppercase">Access Bank</p>
                </div>
            </div>

            <p className="text-[18px] my-4">
                After payment, please{" "}
                <Link href="https://wa.link/r1z26k" className="text-[#010191]">
                    click confirm payment
                </Link>{" "}
                and forward the following details:
            </p>
            <ul className="text-[18px]">
                <li>Your functional email address</li>
                <li>Your WhatsApp number</li>
                <li>Full name</li>
                <li>Payment receipt</li>
            </ul>
            <div className="text-center w-full">
                <Link href="https://chat.whatsapp.com/Es5TWvCebsYEbpXzPz50iD">
                    <button className="button-eff px-4 w-full py-2 mt-8 mx-auto text-white font-semibold rounded bg-[orangered] hover:border-[1px] hover:text-[whitesmoke] hover:bg-[#ff7300]">
                        Confirm Payment
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default CoursePayment;
