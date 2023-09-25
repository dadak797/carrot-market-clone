import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import client from "@/libs/server/client";


declare module "iron-session" {
    interface IronSessionData {
        user?: {
           id: number, 
        },
    }
}

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
) {
    console.log(req.session.user);
    const profile = await client.user.findUnique({
        where: { id: req.session.user?.id },
    });
    res.json({
        ok: true,
        profile,
    });
}

export default withIronSessionApiRoute(withHandler("GET", handler), {
    cookieName: "carrotsession",
    password: "098098098340598230945820934850980",
});