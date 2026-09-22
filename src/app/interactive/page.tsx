import { redirect } from "next/navigation";

/** Legacy route — Product portfolio now lives at /product. */
export default function InteractiveRedirectPage() {
  redirect("/product");
}
