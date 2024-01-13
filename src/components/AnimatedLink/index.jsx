
import Link from 'next/link';


const AnimatedLink = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};

export default AnimatedLink;