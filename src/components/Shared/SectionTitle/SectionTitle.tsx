interface IProps {
  title: string;
  main: string;
}
const SectionTitle = ({ title, main }: IProps) => {
  return (
    <div className="text-3xl my-4">
      {title} <br />
      <span className="font-bold">{main}</span>
    </div>
  );
};

export default SectionTitle;
