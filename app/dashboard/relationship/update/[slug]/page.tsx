import { RelationshipUpdateForm } from "@/ui-components";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return <RelationshipUpdateForm id={slug} />;
}
