const Footer = () => {
    return (
        <div>
            <footer className="text-center bg-neutral text-neutral-content py-10">
                <h1 className="text-3xl font-bold mb-3">Gadget Vault</h1>
                <p className="text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
            </footer>
            <hr className=" text-gray-600" />
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <h1></h1>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shopping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;