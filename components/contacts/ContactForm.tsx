function ContactForm() {
    return (
        <div className="w-[90%] bg-orange-300 p-5 rounded-lg md:w-[600px] right-[10rem] md:absolute md:p-10">
            <form action="" className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name here"
                        className="p-2 rounded"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder="Enter your email here"
                        className="p-2 rounded"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id=""
                        rows={4}
                        placeholder="Enter your message here"
                        className="p-2 rounded"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="button-eff bg-[#030e79] px-4 min-w-[200px] py-2 mt-2 text-white font-semibold   rounded hover:bg-[#0618b8] "
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
