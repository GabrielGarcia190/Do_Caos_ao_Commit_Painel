
type ButtomProps = {
  onClick: () => void;
  title: string;
  selected: boolean;
};

export function CustomButton({ onClick, title, selected }: ButtomProps) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={`font-plus-jakarta ${selected ? 'dark:bg-blue-500 bg-primary  text-white dark:text-black' : 'hover:dark:bg-blue-500 text-primary-gray dark:text-white hover:bg-primary hover:text-white  '}  font-semibold py-2 px-4 rounded`}
    >
      {title}
    </button>
  );
}