import ContactForm from "./ContactForm";

function Contacts() {
    return (
        <div className="flex flex-col gap-6 items-center relative my-20 md:flex-row">
            <div
                className="w-full h-[400px] flex flex-col items-center justify-center rounded-b-[2rem] gap-6 text-center text-white font-bold bg-blue-600 bg-no-repeat bg-cover md:items-start md:pl-10 md:w-[700px] md:h-[600px] lg:pl-[7rem] md:rounded-b-none md:rounded-r-[4rem]"
                style={{
                    backgroundImage: `linear-gradient(
            rgb(1, 7, 59),
            rgba(0, 4, 40, 0.9)
             ),
            url(./images/image-1.jpeg)`,
                }}
            >
                <h1 className="text-2xl max-w-[90%]  md:text-4xl md:max-w-[60%] ">
                    Feel free to give us a call or send us an email, we are
                    always prompt to respond
                </h1>
            </div>
            <ContactForm />
        </div>
    );
}

export default Contacts;
