const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium
  text-[18] text-primary outline-none ${styles} rounded-[10px]
   hover:bg- `}
    >
      {" "}
      Get Started
    </button>
  );
};
export default Button;
