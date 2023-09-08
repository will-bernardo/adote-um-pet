import { createServerSupabaseClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  const { body, method } = req;

  if (method === "POST") {
    const supabase = createServerSupabaseClient(
        "https://adote-um-pet.supabase.co",
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzbWRna2Vka2xzcnZ3cnNnbHdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyMDQwMTEsImV4cCI6MjAwOTc4MDAxMX0.0nd8w8c37A2Z0rhGowf9tblOlsV0qQMY4jJb3Saghlg'
    );

    const { email, name, password, marketing } = body;

    if (!name) {
      return res.status(500).json({
        code: "no_param",
      });
    }

    const { data: userData, error: userError } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: name.toLowerCase(),
          accept_mkt: typeof marketing === "string" && marketing === "y",
        },
      },
    });
    if (userError) {
      return res.status(500).json({
        code: "internal_server_error",
        description: "Error on supabase auth",
      });
    } else {
      const { data: userInsert, error: userInsertError } = await supabase
        .from("users")
        .insert({
          id: userData.user?.id,
          email: email,
          name: name.toLowerCase(),
        })
        .select("id");

      if (userInsertError) {
        return res.status(500).json({
          code: "internal_server_error",
          description: "Error on supabase table",
        });
      }

      return res.status(200).json({
        supabaseUser: userInsert,
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({
      code: "method_not_allowed",
      description: `Method ${method} Not Allowed`,
    });
  }
}
