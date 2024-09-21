export default function ContactPage() {
  return (
    <div className="p-16">
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      <hr className="mt-12 mb-12 borer-1"></hr>
      <div className="grid grid-cols-3 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold">Phone Number</h2>
          <p>+92 (091) 2246851</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Email Address</h2>
          <p>info@bkt.org.pk</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Address</h2>
          <p>Bacha Khan Markaz, Pajaggi Road, Peshawar, Khyber Pakhtunkhwa, Pakistan.</p>
        </div>
      </div>
    </div>
  );
}
