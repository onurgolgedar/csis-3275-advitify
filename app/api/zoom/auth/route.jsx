const KJUR = require('jsrsasign');

export async function POST(req, res) {

  const body = await req.json();

  const iat = Math.round(new Date().getTime() / 1000) - 30;
  const exp = iat + 60 * 60 * 2

  const header = { alg: 'HS256', typ: 'JWT' }

  const payload = {
    sdkKey: process.env.CLIENT_ID,
    appKey: process.env.CLIENT_ID,
    mn: process.env.MEETING_NUMBER,
    role: body.role,
    iat: iat,
    exp: exp,
    tokenExp: exp
  }

  const Header = JSON.stringify(header)
  const Payload = JSON.stringify(payload)
  const signature = KJUR.jws.JWS.sign('HS256', Header, Payload, process.env.CLIENT_SECRET)

  return new Response(JSON.stringify({ data: { signature: signature } }));
}