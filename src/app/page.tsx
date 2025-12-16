import Link from "next/link";

const mockURLs = [
  "https://odusqhg2sm.ufs.sh/f/qBM8yc5L2V3jt89xBJoTLOeyMKUSzkjgi2P4ERZ8Hw1nuovr",
  "https://odusqhg2sm.ufs.sh/f/qBM8yc5L2V3jLV3JFCrpet3HcR8Jm6rEdhxUN9A7uwKoPOSX",
  "https://odusqhg2sm.ufs.sh/f/qBM8yc5L2V3jVq35gctXeFgiSR1n20uGzPmEjst9d7UTpWqZ",
  "https://odusqhg2sm.ufs.sh/f/qBM8yc5L2V3jVykC8ntXeFgiSR1n20uGzPmEjst9d7UTpWqZ",
];

const mockImages = mockURLs.map((url, index) => ({ id: index + 1, url }));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
