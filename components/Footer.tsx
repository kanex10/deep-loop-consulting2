export default function Footer() {
    return (
        <footer className="py-8 px-6 border-t border-white/10 bg-black text-center">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Deep Loop Consulting. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Twitter</a>
                </div>
            </div>
        </footer>
    );
}
