export default function InfoCard({ title, description }) {
  return (
    <div className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 bg-white hover:bg-blue-50/50 group">
      <h3 className="font-bold text-xl mb-3 text-blue-700 group-hover:text-blue-800 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
        {description}
      </p>
      <div className="mt-4 pt-3 border-t border-gray-100 group-hover:border-blue-200 transition-colors flex justify-end">
        <span className="text-sm text-blue-600 font-medium inline-flex items-center">
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}