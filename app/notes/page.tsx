import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Notes() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: notes } = await supabase.from("temp").select();

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 overflow-hidden">
      <pre>{JSON.stringify(notes, null, 2)}</pre>
    </div>
  );
}
