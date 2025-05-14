export default function Contact() {
  return (
    <div className="p-6 max-w-2xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <p>
        For official queries, visit the{" "}
        <a href="https://nielit.gov.in/" target="_blank" className="text-blue-600 underline">
          NIELIT website
        </a>.
      </p>
      <p>
        For project-related queries, contact the project team members:
        <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
          <li>Ujjwal Batrela</li>
          <li>Yatin Sharma</li>
          <li>Priyanshu Vasudeva</li>
        </ul>
      </p>
    </div>
  );
}
