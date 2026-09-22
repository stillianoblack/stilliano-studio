import { redirect } from "next/navigation";

/** Legacy route — Stories + IP now lives under Content Strategy. */
export default function StoriesRedirectPage() {
  redirect("/content-strategy#stories");
}
