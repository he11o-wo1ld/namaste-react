const Contact = () => {
    return (
        <div className="">
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>

            <form>
                <input text="text" className="border p-4 m-4 border-solid border-black rounded-lg hover:scale-110 transition-transform duration-300" placeholder="name"></input>
                <input text="text" className="border p-4 m-4 border-solid border-black rounded-lg hover:scale-110 transition-transform duration-300" placeholder="message"></input>
                <button className="p-4 bg-yellow-400 text-yellow-700 m-4 rounded-xl hover:scale-110 transition-transform duration-300 hover:text-yellow-800 hover:shadow-lg shadow-yellow-600">Submit</button>
            </form>
        </div>
    )
};

export default Contact;
