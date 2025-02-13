interface Props {
  children: JSX.Element | JSX.Element[];
}

function AboutLayout({ children }: Props) {
  return <>{children}</>;
}

export default AboutLayout;
