import { SetStateAction, useState } from "react";
import { MetaHeader } from "~~/components/MetaHeader";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export default function Home() {
  const [contractAddress, setContractAddress] = useState<string>("");

  const { data } = useScaffoldContractRead({
    contractName: "FeeSharing",
    functionName: "isRegistered",
    args: [contractAddress],
    watch: true,
  });

  const updateValue = async (e: { target: { value: SetStateAction<string> } }) => {
    try {
      setContractAddress(e.target.value);
    } catch (e) {
      console.error("Invalid format");
    }
  };

  return (
    <>
      <MetaHeader />
      <div className="flex flex-col items-center flex-grow pt-10 ">
        <div className="px-5">
          <h1 className="mb-8 text-center">
            <span className="block text-4xl font-bold">SEEKER</span>
          </h1>
          <p>Check if your Smart Contract is Registered in the Sequencer Fee Sharing (SFS) Contract</p>
        </div>

        <input
          type="text"
          className="w-full max-w-md input input-bordered input-success"
          placeholder="0x1A07B45dc6f8cDB32304c5c93097F107d9001D77"
          value={contractAddress}
          onChange={updateValue}
        />

        <div>{data ? "registrado" : "unknown"}</div>
      </div>
    </>
  );
}
