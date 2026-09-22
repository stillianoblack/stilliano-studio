import { redirect } from "next/navigation";

/** Legacy route — Film now lives under Content Strategy. */
export default function FilmContentPage() {
  redirect("/content-strategy#film");
}
