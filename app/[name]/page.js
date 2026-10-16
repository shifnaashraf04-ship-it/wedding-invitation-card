import Invitation from "@/components/Invitation";
import OpenInvitation from "@/components/OpenInvitation";

function formatName(slug = "") {
  return decodeURIComponent(slug)
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export async function generateMetadata({ params }) {
  const { name } = await params;
  const formatted = formatName(name);

  return {
    title: `${formatted} | Wedding Invitation`,
    description:
      "Join us as we celebrate our wedding on 20 October 2026 at Gokulam Resort.",
  };
}

export default async function NamePage({ params }) {
  const { name } = await params;

  return (
    <OpenInvitation>
      <Invitation topName={formatName(name)} />
    </OpenInvitation>
  );
}
