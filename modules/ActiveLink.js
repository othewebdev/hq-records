import { useRouter } from "next/router";

function ActiveLink({ children, href, isTransparent }) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? "hsl(347 93% 42% / 1)" : "black",
    borderBottom:
      router.asPath === href
        ? " 1px " + " solid " + " hsl(347 93% 42% / 1) "
        : 0 + " solid " + " transparent ",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={isTransparent ? "" : style}>
      {children}
    </a>
  );
}

export default ActiveLink;
