export default async function Customers() {
  const check = await fetch(
    "https://67fd624e3da09811b17595bf.mockapi.io/api/v1/dataPoints"
  );
  console.log("check", check);
  return <p>Customers Page</p>;
}
