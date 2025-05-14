import InfoCard from "../components/InfoCard";

export default function Home() {
  return (
    <div className="p-6 text-center space-y-6">
      <h1 className="text-4xl font-bold">Welcome to the NIELIT Chatbot</h1>
      <p className="text-lg">This AI chatbot helps you with queries related to NIELIT admissions, programs, and more.</p>
      <div className="grid md:grid-cols-2 gap-4">
        <InfoCard title="About NIELIT" description="An institution offering courses in IT, Electronics, and more under Govt. of India." />
        <InfoCard title="Admissions" description="Learn about the application process, deadlines, and eligibility." />
      </div>
    </div>
  );
}
