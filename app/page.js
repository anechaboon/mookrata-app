import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello
      <Link href={'/manage'}>Manage</Link>
    </div>
  );
}
