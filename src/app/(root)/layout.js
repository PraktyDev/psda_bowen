import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootClientLayout({ children }) {
  return (
    <section>
      <div className="flex flex-col gap-1">
        <Header />
        <NavBar />
      </div>
      {children}
      <Footer />
    </section>
  );
}