import type { MetaFunction } from "@remix-run/node";
import { json, useLoaderData, useNavigation } from "@remix-run/react";
import { getPeople } from "~/api";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { cn } from "~/lib/utils";

export const meta: MetaFunction = () => {
  return [
    { title: "UI Bytes" },
    { name: "description", content: "UI, Front end, Software engineer, news" },
  ];
};

export const loader = async () => {
  const people = await getPeople();
  return json({ people });
};

export default function Index() {
  return <div>TODO</div>;
}
