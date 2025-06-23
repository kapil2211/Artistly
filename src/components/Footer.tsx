import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About / Overview */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About Artistly</h3>
            <p className="text-sm leading-relaxed">
              Artistly is a platform connecting event planners with talented performers. Book singers, dancers, speakers, and DJs for your next event with ease.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/artists">Artists</Link></li>
              <li><Link href="/onboard">Onboard</Link></li>
              <li><Link href="/dashboard">Dashboard</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Artist Booking</li>
              <li>Manager Dashboard</li>
              <li>Event Planning Support</li>
              <li>Verified Profiles</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@artistly.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Location: Mumbai, India</li>
            </ul>
          </div>
        </div>

        {/* Optional bottom note */}
        <div className="mt-8 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Artistly. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
