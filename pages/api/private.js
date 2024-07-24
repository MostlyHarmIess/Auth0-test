// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  withApiAuthRequired,
  getSession,
  getAccessToken,
} from "@auth0/nextjs-auth0";

export async function handler(req, res) {
  try {
    const session = await getSession(req, res);
    const token = getAccessToken(req, res);
    const user = session.user;

    console.log("🚨[private.js:10]: session: ", session);
    console.log("🚨[private.js:12]: token: ", token);
    console.log("🚨[private.js:14]: user: ", user);

    res.status(200).json({ message: "Welcome to our private data" });
  } catch (err) {
    res.status(401).json({ message: "Unauthorised" });
  }
}

export default withApiAuthRequired(handler);
