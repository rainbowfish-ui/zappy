import LandingPage from "@/components/landing-page";

export default function Home() {
  return (
    <>
      <div className="size-[50rem] max-md:size-[40rem] absolute bg-shadow bg-no-repeat pointer-events-none -left-20 -top-40 z-[100] max-sm:size-96 max-sm:-left-10 max-sm:-top-14" />
      <LandingPage />
    </>
  );
}
