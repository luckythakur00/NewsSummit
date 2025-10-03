import { useState } from "react";

export default function FetchCheck() {
  const [q, setQ] = useState("");
  const [data, setData] = useState(null);

  async function check() {
    const res = await fetch(
      `https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${encodeURIComponent(q)}&key=YOUR_API_KEY`
    );
    const json = await res.json();
    setData(json);
  }
  console.log("News Data: ", data);

  return (
    <div>
      <input value={q} onChange={e => setQ(e.target.value)} placeholder="Paste news text or URL" />
      <button onClick={check}>Check</button>
      {data && JSON.stringify(data)}
    </div>
  );
}
