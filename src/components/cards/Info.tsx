import { Paragraph } from "../shared/Paragraph";

interface InfoProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const Info = ({ title, description, children }: InfoProps) => {
  return (
    <div className="p-5 sm:p-6 rounded-3xl bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden">
      <div className="rounded-xl text-heading-1 w-max realtive grid grid-cols-1 sm:grid-cols-2 justify-center items-center mb-3">
        <h2 className="text-heading-1 w-max relative font-semibold md:text-xl mr-2">
          {title}
        </h2>
        {children}
      </div>

      <Paragraph className="text-sm">{description}</Paragraph>
    </div>
  );
};
