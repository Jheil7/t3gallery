import { db } from "~/server/db";

export const dynamic = "force-dynamic";
const mockURLs = [
  "https://odusqhg2sm.ufs.sh/f/qBM8yc5L2V3jt89xBJoTLOeyMKUSzkjgi2P4ERZ8Hw1nuovr",
  "https://odusqhg2sm.ufs.sh/f/qBM8yc5L2V3jLV3JFCrpet3HcR8Jm6rEdhxUN9A7uwKoPOSX",
  "https://odusqhg2sm.ufs.sh/f/qBM8yc5L2V3jVq35gctXeFgiSR1n20uGzPmEjst9d7UTpWqZ",
  "https://odusqhg2sm.ufs.sh/f/qBM8yc5L2V3jVykC8ntXeFgiSR1n20uGzPmEjst9d7UTpWqZ",
];

const mockImages = mockURLs.map((url, index) => ({ id: index + 1, url }));

export default async function HomePage() {
  console.log("APP POSTGRES_URL:", process.env.POSTGRES_URL);
  const posts = await db.query.posts.findMany();
  console.log("APP posts count:", posts.length);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
