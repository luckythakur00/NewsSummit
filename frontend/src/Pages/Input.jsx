const Input = ({ label, id, name, type = 'text', required = false, isTextarea = false }) => {
  // Base classes for consistent styling
  const baseClasses = "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150";

  return (
    <div className="mb-6">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-gray-500 text-xs">(Required)</span>}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          name={name}
          rows="6"
          required={required}
          className={`${baseClasses} resize-none`}
          // The resize-none prevents users from manually resizing the textarea
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          required={required}
          className={baseClasses}
        />
      )}
    </div>
  );
};

export default Input;