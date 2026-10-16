import { Background } from "@/components/Background";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return <Background><Header /><main><Hero /><About /><Services /></main><Footer /></Background>;
}
