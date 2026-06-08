import { LuSend,LuMail } from "react-icons/lu";
import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";

const footer = [
    {
        title: "SHOPPING",
        Links: ["Wishlist", "Cart", "Shop by Category"]
    },
    {
        title: "INFORMATION",
        Links: ["Track My Order", "Corporate Enquires", "FAQs"]
    },
    {
        title: "ACCOUNT",
        Links: ["My Account", "My Order"]
    }
]
const socialMedia = [
    {
        icon: <FaFacebookF />
    },
    {
        icon: <FaTwitter />
    },
    {
        icon: <FaInstagram />
    }
]

export default function Footer(){
    return (
        <section className="bg-[#F6F6F6] ">
            <div className="w-[90%] mx-auto py-10 flex items-start justify-between">
                <div>
                    <h1 className="text-3xl tracking-[6px]"><span>KI</span><span className="text-orange-500">ZIL</span></h1>
                    <div className="mt-5">
                        <div className="flex items-center gap-2">
                            <LuSend />
                            <h3>29 SEA 2nd Ave, Miami Florida 33131, United States</h3>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                            <LuMail />
                            <h3>info@kinzil.com</h3>
                        </div>
                    </div>
                    <h2 className="mt-2 font-bold">(+92) 3942 7879</h2>
                </div>

                <div className="flex items-start gap-30">
                    {footer.map((item,index)=> (
                        <div key={index}>
                            <h2 className="mb-5">{item.title}</h2>
                            <div className="space-y-2">
                                {item.Links.map((link,idx)=> (
                                    <a key={idx} href="" className="block hover:text-yellow-300">{link}</a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <hr className="border-t border-gray-500 w-[90%] mx-auto" />

            <div className="w-[90%] mx-auto py-5  flex items-center items-start justify-between ">
                
                <div>
                    <div><h1>Copyright@ <span className="text-orange-500">350D Soul Limited 2026.</span> All rights reserved.</h1></div>
                </div>
                <div className="flex items-center gap-5 text-xl">
                    {socialMedia.map((item,idx)=> (
                        <a key={idx} href="#" className="hover:text-orange-500">{item.icon}</a>
                    ))}
                </div>
                <div className="flex items-center gap-5">
                    <a href="#" className="block hover:text-yellow-300"><h1>Teams & Conditions</h1></a>
                    <a href="#" className="block hover:text-yellow-300"><h1>Privacy & Policy</h1></a>
                    <a href="#" className="block hover:text-yellow-300"><h1>Refund Policy</h1></a>
                </div>

            </div>
            
        </section>
    )
}