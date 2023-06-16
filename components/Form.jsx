import Link from "next/link";

const Form = ({ card, setCard, submitting, handleSubmit }) => {
    return (
        <section className="w-full max-w-full flex flex-ccol">
            <form 
                onSubmit={handleSubmit}
                className="mt-10 w-full max-w-lg flex flex-col gap-7 glassmorphism p-7"
            >
                <label>
                    <span className="font-bold text-2xl">
                        Site title
                    </span>
                    <input 
                        value={card.siteUrl}
                        onChange={(e) => setCard({ ...card, siteUrl: e.target.value })}
                        type="text" 
                        className="form_input"
                        placeholder="Insert site url or title"
                        required
                    />
                </label>
                <label>
                    <span className="font-bold text-2xl">
                        Email
                    </span>
                    <input 
                        value={card.email}
                        onChange={(e) => setCard({ ...card, email: e.target.value })}
                        type="text" 
                        className="form_input"
                        placeholder="Type your email"
                        required
                    />
                </label>
                <label>
                    <span className="font-bold text-2xl">
                        Password
                    </span>
                    <input 
                        value={card.password}
                        onChange={(e) => setCard({ ...card, password: e.target.value })}
                        type="text" 
                        className="form_input"
                        placeholder="Type your password"
                        required
                    />
                </label>
                <div className='flex items-center justify-end mx-3 mb-5 gap-4'>
                    <Link href='/' className='text-gray-500 text-sm'>
                        Cancel
                    </Link>

                    <button
                        type='submit'
                        disabled={submitting}
                        className='green_gradient_nt h-12 px-5 ml-3 rounded-full text-white'
                    >
                        {submitting ? "Adding password..." : "Add Password"}
                    </button>
                </div>
            </form>

        </section>
    )
}

export default Form