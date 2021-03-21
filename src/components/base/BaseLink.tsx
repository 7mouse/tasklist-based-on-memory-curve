interface Props {
  href: string;
  target?: string;
  children: React.ReactNode;
}

const BaseLink: React.FC<Props> = ({ href, target, children }: Props) => {
  const a = "lint";

  return <a href={href}>{children}</a>;
};

export default BaseLink;
