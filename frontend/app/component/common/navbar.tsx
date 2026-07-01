import image from "next/image";
export default function Navbar(){
  return(
   
      <nav className="w-full px-8 py-3 flex justify-between items-center border-b border-[#11C9F2]/10 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center ">
            {/* Logo Image */}
            <img src="logo1.png" alt="ScanVault logo " width={80} height={80} className="object-contain"></img>
        
      {/* 1.Logo */}
      <div className="text-xl font-bold tracking-[0.2em] text-white">SCAN
        <span className="text-cyan-400">VAULT</span>
      </div>
      </div>
      {/* 2.Links */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
        <a href="#" className="hover:text-white transition-colors">Home</a>
        <a href="#" className="hover:text-white transition-colors">Scan</a>
        <a href="#" className="hover:text-white transition-colors">Form</a>
        <a href="#" className="hover:text-white transition-colors">Records</a>
        <a href="#" className="hover:text-white transition-colors">Dashboard</a>
      </div>
      {/* 3.Button */}
      <button className=" bg-gradient-to-r from-cyan-400 to-blue-700  hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
        Start Scan
        </button>
      </nav>

  );
}