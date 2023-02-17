import Consent from "./consent";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Consent />
    </>
  );
}
