import Image from "next/image";
const ProcSteps = () => {
  return (
    <section className="relative z-10 pt-12 sm:pt-16 lg:pt-28 text-center">
      <div className="max-w-5xl px-6 mx-auto">
        <p className="text-xs uppercase font-semibold tracking-wider text-gray-500">
          End-to-End Automation
        </p>
        <h2 className="text-2xl max-w-xl mx-auto sm:text-3xl font-medium text-gray-800 mt-2 mb-6 capitalize">
          Make Procurement Effortless with Our Smart AI Software
        </h2>
        <p className="text-sm max-w-2xl mx-auto text-gray-500 mb-10">
          Let our AI/ML procurement system handle everything — from uploading
          supplier invoices to drafting documents with precision and speed.
        </p>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="">
            <h1 className="text-gray-800 text-sm">
              Streamline requests and approvals
            </h1>
            <p className="text-gray-500 text-sm">
              Ensure every purchase request follows company policy with built-in
              controls that authorize only approved transactions. Collect
              complete and accurate data from the start and maintain full audit
              trails for every procurement document. Simplify cross-departmental
              collaboration to prevent delays and miscommunication during the
              approval process.
            </p>
          </div>
          <Image
            src="/images/solutions/Precoro product feature image.svg"
            alt="Feature Image"
            width={100}
            height={100}
            className="w-100 rounded-lg"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {}
        </div>
      </div>
    </section>
  );
};

export default ProcSteps;
