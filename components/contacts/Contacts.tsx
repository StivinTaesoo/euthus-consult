import ContactForm from "./ContactForm";

function Contacts() {
    return (
        <div className="flex flex-col items-center relative my-20 md:flex-row">
            <div
                className="w-full h-[600px] flex flex-col items-center justify-center gap-6 text-center text-white font-bold bg-blue-600 bg-no-repeat bg-cover md:items-start md:pl-10 md:w-[700px] md:h-[600px]"
                style={{
                    backgroundImage: `linear-gradient(
            rgba(1, 7, 59, 0.9),
            rgba(0, 4, 40, 0.9)
        ),
        url(./images/image-1.jpeg)`,
                }}
            >
                <h1 className="text-xl max-w-[90%]  md:text-2xl md:max-w-[60%] ">
                    Feel free to give us a call or send us an email
                </h1>
                <p className="text-2xl md:text-5xl ">+234 7039283570</p>
            </div>
            <ContactForm />
        </div>
    );
}

export default Contacts;
