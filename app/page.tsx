/* eslint-disable react/no-unescaped-entities */
import Button1 from "@/components/ui/Button1";
import Button2 from "@/components/ui/Button2";


export default function Home() {

  return (
    <div className="flex items-center justify-center h-screen gap-4 font-medium">
      <Button1 />
      <Button2>Let's talk</Button2>
    </div>
  );
}
