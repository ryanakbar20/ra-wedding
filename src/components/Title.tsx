import { poppins500 } from "@/fonts";

const Title = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => (
  <h3 className={`text-lg md:text-xl ${className}`} style={poppins500.style}>
    {children}
  </h3>
);

export default Title;
