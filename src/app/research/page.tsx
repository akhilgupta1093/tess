import { redirect } from "next/navigation";

// Research now lives on the home page; keep old links working.
export default function Research() {
  redirect("/#working-papers");
}
