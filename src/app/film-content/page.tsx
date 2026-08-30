import { redirect } from "next/navigation";

/** Legacy route — Film now lives at /film. */
export default function FilmContentPage() {
  redirect("/film");
}
