import { PrismaClient } from '@prisma/client'

export function CreateResponse(success, data = null, message = null) {
    return new Response(JSON.stringify({
        success: success,
        data: data,
        message: message
    }))
}

