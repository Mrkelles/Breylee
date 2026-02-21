import Image from "next/image";

export default function FourImageGrid() {

  return (
    <section>
      <div className="flex flex-col items-center justify-center container mx-auto px-4 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-20">
          <Image src="https://i.ibb.co/dwRK1KR0/Teeth-Problems.jpg" alt="teeth problems" height={400} width={400}/>
          <Image src="https://i.ibb.co/qMrNFRBk/Teeth-Problems-2.jpg" alt="teeth problems" height={400} width={400}/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-20">
        <Image src="https://i.ibb.co/Ld06b6G5/Gemini-Generated-Image-1oklfv1oklfv1okl.png" alt="teeth problems" height={450} width={450} />
        <Image src="https://i.ibb.co/svyXzCbF/breylee-white-before-after.jpg" alt="teeth problems" height={450} width={450} />
      </div>
      </div>
    </section>
  );
}
