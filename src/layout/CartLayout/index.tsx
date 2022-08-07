import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

interface CartLayoutProps {
  children?: ReactNode;
}

const CartLayout: FC<CartLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default CartLayout;
